import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

  // const [employee, setEmployee] = useState([])
  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)



  const params = useParams()

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/get-employee/' + params.id)

    setName(result.data.message.name);
    setDesig(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);

  }

  let location = useNavigate()

  const editEmployee = async (e) => {
    e.preventDefault()

    const body = {
      id: params.id,
      name,
      designation: desig,
      salary: sal,
      experience: exp
    }

    const result = await
      axios.post('http://localhost:8000/editEmployee', body)
      location('/')
    alert(result.data.message)
  }

  useEffect(() => { fetchEmp() }, [])

  // console.log(employee);


  return (
    <div>

      <h1 className='text.center mt-5'>EDIT EMPLOYEE</h1>


      <form className='container w-50 p-5 bg-dark mt-5 mb-5' action="">

        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control mt-3" name='n11' id='an11' placeholder='Employye Name:' />
        <input onChange={(e) => setDesig(e.target.value)} value={desig} type="text" className="form-control mt-3" name='n22' id='an22' placeholder='Designation:' />
        <input onChange={(e) => setSal(e.target.value)} value={sal} type="text" className="form-control mt-3" name='n33' id='an33' placeholder='Salary:' />
        <input onChange={(e) => setExp(e.target.value)} value={exp} type="text" className="form-control mt-3" name='n44' id='an44' placeholder='Experience:' />

        <button onClick={(e) => editEmployee(e)} className='btn btn-primary p-2 w-25 mt-4 '>UPDATE</button>

      </form>
    </div>
  )
}

export default Edit