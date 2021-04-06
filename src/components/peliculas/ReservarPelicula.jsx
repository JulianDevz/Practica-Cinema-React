import React, { useState, useContext } from 'react';
import peliculaContext from '../../context/pelicula/peliculaContext';
import Swal from 'sweetalert2';
import './ReservarPelicula.css'

export default function ReservarPelicula() {

     const data = useContext(peliculaContext)

     const { formulario, info,  errorformulario, mostrarFormulario, agregarReserva, mostrarError, user} = data


     const [reserva, setReserva] = useState ({
          nombre:'',
          pelicula:'',
          cantidad:'',
          fecha:'',
          hora:''
     })

     const {nombre, pelicula, cantidad, fecha, hora} = reserva

     const onChange = e => {
          setReserva ({
               ...reserva,
               [e.target.name] : e.target.value
          })
     }

     const onSubmit = e => {
          e.preventDefault()

          //Validacion
          if (pelicula === '' || cantidad === '' || fecha === '' || hora === '' ){
               mostrarError()
               return
          }
          Swal.fire({
               position: 'botton-start',
               icon: 'success',
               title: 'Reserva Exitosa',
               showConfirmButton: false,
               timer: 1500
          })


          //Reserva nueva
           agregarReserva(reserva)

          

          //Reset
          setReserva({
               nombre:'',
               pelicula:'',
               cantidad:'',
               fecha:'',
               hora:''
          })
     }

     return (
          <div>
               <button type="button" onClick={() => mostrarFormulario()} className="btn btn-primary mb-5">
                    Nueva Reserva
               </button>
               {
                    formulario ? (
                         <form
                         onSubmit={onSubmit}
                         >
                              <div>
                                   <div class="form-group has-feedback">
                                        <div>
                                             <label>Usuario</label>
                                        </div>
                                        <i class="fa fa-user form-control-g"/>
                                        <input 
                                             type="text"
                                             readonly="readonly"
                                             className="form-control formx"
                                             placeholder={user?.name}
                                             name="nombre"
                                             value={nombre}
                                             onChange={onChange}
                                        />
                                   </div>
                                   
                                   <div class="form-group has-feedback">
                                        <div>
                                             <label>Pelicula</label>   
                                        </div>
                                        <i class="fa fa-video form-control-g"/>
                                        <select  onChange={onChange} name="pelicula" value={pelicula} className="form-control">
                                             <option value="" > --Pelicula a Reservar-- </option>
                                             <option value={info.title} > Zack Snyder's Justice League </option>
                                             <option value={info.title} > Raya and the Last Dragon </option>
                                             <option value={info.title} > King Kong vs. Godzilla </option>
                                             <option value={info.title} > Godzilla: King of the Monsters </option>
                                             <option value={info.title} > Miraculous World: New York, United HeroeZ </option>
                                             <option value={info.title} > Mortal Kombat Legends: Scorpion's Revenge </option>
                                        </select>
                                   </div>

                                   <label>Cantidad Boletos</label>
                                   <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="Ingresa el numero de boletos"
                                        name="cantidad"
                                        value={cantidad}
                                        onChange={onChange}
                                   />

                                   <label for="start">Fecha</label>
                                   <input 
                                        type="date" 
                                        id="start" 
                                        name="fecha"
                                        min="2021-04-03" max="2021-04-07"
                                        onChange={onChange}
                                        className="form-control"
                                   />

                                   <label>Hora</label>
                                   <select onChange={onChange} name="hora" value={hora} className="form-control">
                                        <option value="" > Hora </option>
                                        <option value="10 A.M." > 10 a.m. </option>
                                        <option value="14 P.M." > 2 p.m. </option>
                                        <option value="18 P.M." > 6 p.m </option>
                                   </select>
                                   
                              </div>

                              <div className="mt-3">
                                   <button type="submit" className="btn btn-success">
                                        Confirmar
                                   </button>
                              </div>
                         </form>
                    ) 

                    :

                    null
               }
               {errorformulario 
               ? <p className="text-light fw-bold mt-3">Ingrese correctamente todos los campos</p> 
               : null}
               
          </div>
     )
}