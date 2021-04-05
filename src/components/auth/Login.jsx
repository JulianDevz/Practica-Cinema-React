import React, {  useContext, useEffect } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import peliculaContext from '../../context/pelicula/peliculaContext'


const Login = () => {

  const datos = useContext(peliculaContext)

  const { responseFacebook, responseGoogle, user} = datos


  const history = useHistory();
  

  //Inicio Sesión con Google
  useEffect(() => {
    if(!user ||  user.googleId == null){
      return
    }else {
      //Ventana modal de Bienvenida al usuario
      Swal.fire(
        'Bienvenido!',
        'Iniciaste sesión con Google exitosamente!',
        'success'
      )
      history.push("/peliculas")
    }
    
  }, [responseGoogle])

  //Inicio Sesion con Facebook
  useEffect(() => {
    if(!user || user.id == null){
      return
    }else {
      //Ventana modal de Bienvenida al usuario
      Swal.fire(
      'Bienvenido!',
      'Iniciaste sesión con Facebook exitosamente!',
      'success'
      )
      history.push("/peliculas")
    }
  }, [responseFacebook])



  return ( 
    <div className="containerPadre">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card-1 d-flex justify-content-center align-self-center">
            <img src="movie.gif" alt="GIF PELICULAS"/>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="cinema.png" alt="logo cinema"/>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <h2>Login</h2>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <p>Ingresa para continuar a la aplicación</p>
              </div>
              <div className="facebook d-flex justify-content-center">
              <FacebookLogin
                className="btn"
                appId="352474099438726"
                autoLoad={false}
                textButton="Inicia sesion con Facebook"
                fields="name,email,picture"
                size="metro"
                callback={responseFacebook} 
              />
              </div>
              <div className="google d-flex justify-content-center pt-4">
              <GoogleLogin
                className="btn"
                clientId="275642564060-coc7p64m6cqmb33gihj4illalngshpbr.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                buttonText="Iniciar sesión con Google"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default Login;