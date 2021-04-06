  
import React,{useContext, useEffect} from 'react'
import Reserva from './Reserva'
import peliculaContext from '../../context/pelicula/peliculaContext'

export default function ListadoReserva() {

     const listado = useContext(peliculaContext)

     const { reservas, obtenerReserva} = listado

     useEffect(() => {
          obtenerReserva()
     }, [])

     if (reservas.length === 0) return <p>No hay reservas, comienza realizando una</p>

     

     return (
          <>
               <ul>
                    {reservas.map (reserva => (
                         <Reserva
                              key={reserva.id}
                              reserva={reserva}  
                         />


                    ))}
               </ul>
               
          </>
     )
}