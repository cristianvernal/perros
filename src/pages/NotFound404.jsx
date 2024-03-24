import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/App.css"

const NotFound404 = () => {
  return (
    
    <div className='flex-container'>
      <div className="container">
        {" "}
        <div className="row justify-content-center">
          {" "}
          <div className="col-md-6">
            {" "}
            <img
              src="https://previews.123rf.com/images/tutsi925/tutsi9252103/tutsi925210300004/164897085-p%C3%A1gina-404-enlace-a-p%C3%A1gina-inexistente-un-p%C3%A1jaro-en-la-cabeza-de-un-perro.jpg"
              className="img-fluid"
              alt="Dog Brains"
            />{" "}
          </div>
        </div>
      </div>
        <h1>Pagina no encontrada "404"</h1>
        <Link to="/"><Button>Volver a Inicio</Button></Link>
    </div>
  )
}

export default NotFound404
