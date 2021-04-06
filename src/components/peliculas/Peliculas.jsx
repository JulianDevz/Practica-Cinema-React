import React, { Fragment, useContext, useEffect, useState } from 'react'
import Listado from './Listado'
import ReservarPelicula from '../peliculas/ReservarPelicula'
import ListadoReservas from '../reservaciones/ListadoReservas'
import peliculaContext from '../../context/pelicula/peliculaContext'
import {Link, useHistory} from 'react-router-dom'
import Paginacion from  './Paginacion'
import './Peliculas.css'


export default function Peliculas() {

     const data = useContext(peliculaContext)
     const { setUser, user, totalPeliculas, paginaActual } = data

     const history = useHistory();

     const onClickLogout = e => {
          setUser(null)
     }

     if (!user) {
          history.push("/")
     }

     return (
          <Fragment>
               {/* -------- HEADER -------- */}
               <div className="container-fluid">
                    <div className="row align-items-center">
                         <div className="col-md-12 superior">
                              <div className="row">
                                   <div className="col-md-6 text-white">
                                        <h3>CINEMA</h3>
                                        <h4>Bienvenido {user?.name}</h4>
                                   </div>
                                   <div className="col-md-6 align-self-center d-flex justify-content-end">
                                        <Link to="/">
                                        <button className="btn btn-danger" type="button" onClick={onClickLogout}> Cerrar Sesión </button>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* -------- COMPONENTES -------- */}
               <div className="container text-white">
                    <div className="row">
                         <div className="col-md-12">
                              <div className="row">
                                   <div className="col-md-12 titulo pt-5 pb-5">
                                        <h2>Peliculas en Cartelera</h2>
                                   </div>
                                   <div className="col-md-12">
                                        <Listado />
                                   </div>
                                   <div className="col-md-12 justify-content-center align-item-center d-flex pt-5 pb-3">
                                        <Paginacion/>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-12">
                              <div className="row">
                                   <div className="titulo col-md-12 p-5 text-center">
                                        <h1>Reservar Pelicula</h1>
                                   </div>
                                   <div className="col-md-12 p-5">
                                        <ReservarPelicula />
                                   </div>
                                   <div className="col-md-12 p-3 mb-5 border bg-light text-dark">
                                        <ListadoReservas />
                                   </div>
                              </div>
                         </div>  
                    </div>
               </div>
          </Fragment>
     )
}
