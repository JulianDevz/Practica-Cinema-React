import React,{useContext} from 'react'
import peliculaContext from '../../context/pelicula/peliculaContext'
import Swal from 'sweetalert2'

export default function Reserva({reserva}) {

     const data = useContext(peliculaContext)

     const {  eliminarReserva, user } = data

     

        const onClickEliminar = e => {
          Swal.fire({
               title: 'Estas seguro?',
               text: "Los cambios no podran ser revertidos",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Si, estoy seguro'
             }).then((result) => {
               if (result.isConfirmed) {
                 Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Reserva Eliminada',
                    showConfirmButton: false,
                    timer: 2000
                 })
                 eliminarReserva(reserva.id)
               }
             })
     }

     return (

          <div>
               {reserva === '' ? <h2>No hay reservaciones</h2> : <li>
                    <p>Pelicula: {reserva.pelicula}</p>
                    <p>Usuario: {user?.name}</p>
                    <p>#Boletos: {reserva.cantidad}</p>
                    <p>Fecha: {reserva.fecha}</p>
                    <p>Hora: {reserva.hora}</p>
                    <div>
                         
                         <button type="submit" onClick={onClickEliminar} className="btn btn-danger m-2">
                              Eliminar
                         </button>
                    </div>
               </li>}
          </div>
     )
}