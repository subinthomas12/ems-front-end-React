import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Home() {


    const [employees, setEmployees] = useState([])

    // api call
    const fetchEmployees = async () => {
        const result = await axios.get('http://localhost:8000/getEmployees')
        setEmployees(result.data.message);
    }


    // api delete
    const deleteEmployee = async (id) => {

        const result = await axios.delete('http://localhost:8000/deleteEmployee/' + id)

        // fetchEmployee()
        alert(result.data.message)
        fetchEmployees()
    }



    console.log(employees);

    useEffect(() => {
        fetchEmployees()
    }, [])


    return (
        <div className='p-3'>

            <Row>
                <Col lg={4} className='ms-3'>
                    <div className='w-75 border container text-light p-4 mt-3'>
                        <h2 className='text-center p-3'>Employee Management App</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel voluptatibus delectus quo ipsum dolore eaque reprehenderit, excepturi, magnam tenetur asperiores eum consectetur rem illum repellat, corrupti laborum iure nihil.</p>

                        <Link to={'/add'}>

                            <Button variant='success' className='fs-5'>
                                <i class='fa-solid fa-user-plus'></i> Add new employee
                            </Button>

                        </Link>
                    </div>

                </Col>
                <Col lg={6}>
                    <Image style={{ height: '400px', display: 'flex' }}
                        className='w-100 border' src="https://i.postimg.cc/DyDPKrTq/employee-management-system.jpg" />

                </Col>
            </Row>

            <div className='container-fluid mt-4 p-2 border'>
                <h3 className='text-center p-3'>List Of Employees</h3>

                <Table striped bordered hover variant="">
                    <thead>
                        <tr className='text-info'>
                            <th>#</th>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Experience</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employees?.map((employee, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.designation}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.experience}</td>
                                    <td className='text-center'>
                                        <ButtonGroup aria-label="Basic example">

                                            <Link to={`edit/${employee.id}`}>
                                                <Button variant="warning"> <a style={{ textDecoration: 'none' }} href=""><i class="fa-solid fa-user-pen "></i> Edit</a>
                                                </Button>
                                            </Link>

                                            <Link to={`view/${employee.id}`}>
                                                <Button className='ms-2' variant="info"> <a style={{ textDecoration: 'none' }} href=""><i class="fa-solid fa-users-viewfinder "></i> View</a>
                                                </Button>
                                            </Link>

                                            <Link to={'delete/${employee.id}'}>
                                                <Button onClick={() => deleteEmployee(employee.id)} className='ms-2' variant="danger"> <a style={{ textDecoration: 'none' }} href=""><i class="fa-solid fa-user-xmark "></i> Delete</a>
                                                </Button>
                                            </Link>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}


                    </tbody>
                </Table>
            </div>


        </div>
    )
}

export default Home


