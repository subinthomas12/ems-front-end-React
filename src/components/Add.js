import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';



function Add() {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)

  useEffect(() => {
    setId(uuid().slice(0, 5))
  }, [])


    let location=useNavigate()

  const addEmployee = async (e) => {
    e.preventDefault()
    setId(uuid().slice(0, 5))
    const body = {

      id,
      name,
      designation:desig,
      salary:sal,
      experience:exp
    }

    const result=await axios.post('http://localhost:8000/addEmployee',body)
    location('/')
    alert(result.data.message)

  }


  // console.log(id);
  // console.log(name);
  // console.log(desig);
  // console.log(sal);
  // console.log(exp);



  return (

    <div>
      <h1 className='text.center mt-3'>ADD NEW EMPLOYEE</h1>

      <p className='p-5 fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam dolores enim labore minus consequuntur corporis molestiae consectetur voluptatibus explicabo ut facere quia earum, hic optio obcaecati aliquam non assumenda.</p>
      <h3 className='text-center'>Employee Data</h3>

      <form className='container w-50 p-5 bg-dark mt-5 mb-5' action="">

        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-3" name='n1' id='an1' placeholder='Employye Name:' />
        <input onChange={(e) => setDesig(e.target.value)} type="text" className="form-control mt-3" name='n2' id='an2' placeholder='Designation:' />
        <input onChange={(e) => setSal(e.target.value)} type="text" className="form-control mt-3" name='n3' id='an3' placeholder='Salary:' />
        <input onChange={(e) => setExp(e.target.value)} type="text" className="form-control mt-3" name='n4' id='an4' placeholder='Experience:' />

        <button onClick={(e) => addEmployee(e)} className='btn btn-success p-2 w-25 mt-4 '>ADD</button>

      </form>

    </div>
  )
}

export default Add