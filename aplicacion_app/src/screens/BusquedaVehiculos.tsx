import React, { useState } from 'react'


const BusquedaVehiculos = () => {
  const [users, setUsers] = useState([])
  const [ search, setsearch ] = useState("")      


  return (
    <input type='text' placeholder='Buscar' className='form-control'/>
  )
}

export default BusquedaVehiculos
