import React, {useContext} from 'react';
import Cartelera from './Cartelera'
import peliculaContext from '../../context/pelicula/peliculaContext'
import styles from './Listado.module.css';

export default function Listado() {

     const listado = useContext(peliculaContext)

     const { info } = listado
     
     return (
          <>
               <ul className={styles.moviesGrid}>
                    {info.map (peliculas => ( 
                         <Cartelera
                              peliculas={peliculas}
                         />
                    ))}
               </ul>
          </>
     )
}
