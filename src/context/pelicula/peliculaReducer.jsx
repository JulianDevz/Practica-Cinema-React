import { FORMULARIO_PELICULA, OBTENER_RESERVA, AGREGAR_RESERVA, VALIDAR_FORMULARIO,  ELIMINAR_RESERVA } from '../../types'

export default (state, action) => {
     switch(action.type) {
          case FORMULARIO_PELICULA:
               return {
                    ...state,
                    formulario: true
               }
          case OBTENER_RESERVA:
               return {
                    ...state,
                    reserva: action.payload
               }
          case AGREGAR_RESERVA:
               return {
                    ...state,
                    reservas: [...state.reservas, action.payload],
                    formulario: false,
                    errorformulario: false
               }
          case VALIDAR_FORMULARIO:
               return {
                    ...state,
                    errorformulario: true
               }
          case ELIMINAR_RESERVA:
               return {
                    ...state,
                    reservas: state.reservas.filter(reserva => reserva.id !== action.payload),
                    reserva: null
               }

          default:
               return state
     }
}