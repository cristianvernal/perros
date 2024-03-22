import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h1>404 Not Found</h1>
        <Link to="/"><Button>Volver a Inicio</Button></Link>
    </div>
  )
}

export default NotFound404
