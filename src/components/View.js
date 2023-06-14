import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function View() {

  const [employee, setEmployee] = useState([])

  const params = useParams()

  // console.log(params.id);
  // api
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/get-employee/' + params.id)
    setEmployee(result.data.message);
  }
  console.log(employee);

  useEffect(() => {
    fetchEmp()
  }, [])


  return (
    <div>
      <Row>
        <div className='text-center container w-50 mt-5 '>
          <img style={{ height: '500px', width: '500px' , borderRadius:'250px' }}  src="https://i.postimg.cc/QdQZw5wy/Top-60-Employee-Engagement-image19-1024x510.png" alt="" />
        </div>

        <div className='text-center mt-5 mb-5'>

          <Card className='text-center w-50 container p-3' style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>{employee.name}</Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Employee Id: {employee.id}</ListGroup.Item>
              <ListGroup.Item>Designation: {employee.designation}</ListGroup.Item>
              <ListGroup.Item>Salary: {employee.salary}</ListGroup.Item>
            </ListGroup>

          </Card>

        </div>
      </Row>
    </div>
  )
}

export default View