import React,{useState} from 'react'
import {Link} from 'react-router-dom';

export default function CrearCuenta() {

     
     
     const [usuario, setUsuario] = useState ({
          nombre:'',
          email:'',
          password:'',
          confirmar:''
     })

     const {nombre, email, password, confirmar} = usuario

     const onChange = e => {
          setUsuario({
               ...usuario,
               [e.target.name] : e.target.value
          })

     }

     const onSubmit = e => {
          e.preventDefault()
     }

     return (
          <div>
               <div>
                    <h1>Crear una Cuenta</h1>
                    <form
                         onSubmit={onSubmit}
                    >
                         <div>
                              <label htmlFor="nombre">Nombre</label>
                              <input 
                                   type="text"
                                   id="nombre"
                                   name="nombre"
                                   placeholder="Tu Nombre"
                                   onChange={onChange}
                                   value={nombre}
                              />
                         </div>

                         <div>
                              <label htmlFor="email">Email</label>
                              <input 
                                   type="email"
                                   id="email"
                                   name="email"
                                   placeholder="Tu email"
                                   onChange={onChange}
                                   value={email}
                              />
                         </div>

                         <div>
                              <label htmlFor="password">Contraseña</label>
                              <input 
                                   type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Contraseña"
                                   onChange={onChange}
                                   value={password}
                              />
                         </div>

                         <div>
                              <label htmlFor="confirmar">Confirma tu constraseña</label>
                              <input 
                                   type="password"
                                   id="confirmar"
                                   name="confirmar"
                                   placeholder="Confirmar Contraseña"
                                   onChange={onChange}
                                   value={confirmar}
                              />
                         </div>

                         <div>
                              <input 
                                   type="submit"
                                   value="Registrarme"
                              />
                         </div>
                    </form>

                    <Link to={'/'}>
                         Volver
                    </Link>
               </div>
          </div>
     )
}
