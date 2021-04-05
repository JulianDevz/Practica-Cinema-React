import React,{useContext, useState} from 'react'
import peliculaContext from '../../context/pelicula/peliculaContext'
import styles from './Cartelera.module.css';
// import styled from '@emotion/styled'


// const Imagen = styled.img`
//      width: 50%;
//      margin: 10px;
//      border: black solid 5px;
// `


export default function PeliculaReservada({peliculas}) {

     const listado = useContext(peliculaContext)

     const { info } = listado

     const {poster_path} = peliculas

     const IMG_PELI = 'https://image.tmdb.org/t/p/w1280'

     const variable = "19"


     return (
          <> 
               { peliculas.title[3] > variable ? 
               <li className={styles.movieCard}>
                    <img 
                         width="230px" 
                         height="345px" 
                         className={styles.movieImage} 
                         src={IMG_PELI + poster_path} 
                         alt={`Imagen de ${info.poster_path}`} 
                    />
                    <h4>{peliculas.title}</h4>
               </li>
               :  null } 
               
          </>
     )
}
