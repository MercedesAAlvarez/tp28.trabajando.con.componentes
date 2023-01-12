import React from 'react'
import TablaExtra from './TablaExtra'

function Extra() {

  const peli = [
    {
      id : 1,
      title : 'Avatar II',
      length : '180min',
      rating : '10',
      genres : 'Ciencia Ficción',
      awards : 'seguramente todos'
  },
    {
      id : 2,
      title : 'La Bala que doblo la esquina 3',
      length : '120min',
      rating : '10',
      genres : 'Accion',
      awards : 'Muchos'
  }
]

  return (
  <div>
    {peli.map(campo => 
    <>
				<TablaExtra 
				key={campo.id}
				id={campo.id} 
				titulo= {campo.titulo}
				duracion= {campo.length}
				rating= {campo.rating}
				genero= {campo.genres}
				premios= {campo.awards}
				/>
        </>
			
				)}
    
  </div>
  )
}


export default Extra
