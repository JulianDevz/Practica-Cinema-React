import React, {useReducer,useEffect,useState} from 'react'
import axios from 'axios'
import shortid from 'shortid'
import peliculaContext from './peliculaContext'
import peliculaReducer from './peliculaReducer'
import { FORMULARIO_PELICULA, OBTENER_RESERVA, AGREGAR_RESERVA, VALIDAR_FORMULARIO,  ELIMINAR_RESERVA } from '../../types'



const PeliculaState = ({children}) => {

     

     const reservas =  []

     //State Usuario
     const [user, setUser] = useState (null)

     const initialState = {
          reservas : [],
          formulario : false,
          errorformulario: false,
          reserva: null,
     }

     //Nos trae los datos del usuario de facebook
     const responseFacebook = async (dataF) => {
          const res = await dataF
          setUser(res)
     
          
     } 
 
     //Nos trae los datos del usuario de Gmail
     const responseGoogle = async (dataG) => {
          const res = await dataG
          setUser(res.profileObj)
          
     }


     //Consulta a la API
     const [info, setInfo] = useState ([])

     useEffect (() => {
          const obtenerNombre = async () => {
   
               const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=243c71135aac9b1203881b3fbe7da16f'
               const pelicula = await axios.get(url)
               console.log (pelicula.data.results)
               setInfo(pelicula.data.results)
          }
          obtenerNombre()
     }, [] )


     //Mostrar el Formulario
     const mostrarFormulario = () => {
          dispatch({
               type: FORMULARIO_PELICULA
          })
     }

     //Obtener Reserva
     const obtenerReserva = () => {
          dispatch({
               type: OBTENER_RESERVA,
               payload: reservas
          })
     }

     //Adicion de la Reserva
     const agregarReserva = reservas => {
          reservas.id= shortid.generate()

          dispatch({
               type: AGREGAR_RESERVA,
               payload: reservas
          })
     }

     //Validacion el formulario y mostrar error
     const mostrarError = () => {
          dispatch({
               type:VALIDAR_FORMULARIO
          })
     }


     //Elminamos la reserva
     const eliminarReserva = reservaId => {
          dispatch({
               type: ELIMINAR_RESERVA,
               payload: reservaId
          })
     }



     const [state, dispatch] = useReducer (peliculaReducer, initialState )

     return (
          <peliculaContext.Provider
          value={{
               reservas: state.reservas,
               reserva: state.reserva,
               errorformulario: state.errorformulario,
               formulario: state.formulario,
               info,
               user,
               // setIdPelicula,
               mostrarFormulario,
               obtenerReserva,
               agregarReserva,
               mostrarError,
               eliminarReserva,
               responseFacebook,
               responseGoogle,
               setUser
          }}
          >
               {children}
          </peliculaContext.Provider>
     )
}

export default PeliculaState