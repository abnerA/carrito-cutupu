import React, { useState } from "react";
import style from "./Style.module.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); // navigate para cambiar de ruta una vez inicida la sesión 

  const [estilo, setEstilo] = useState({display: 'none', message: ''})

  const emailValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  // Function para logearse
  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential.user);
      navigate('/calendary');
    } catch (err) {
      if(err.code === 'auth/wrong-password' || err.code === 'auth/invalid-login-credentials') {
        setEstilo({
            display: 'block', 
            message: 'Contraseña incorrecta'
        })
      } else if (err.code === 'auth/user-not-found') {
        setEstilo({
            display: 'block', 
            message: 'Este usuario no existe'
        })
      } else if (err.code === 'auth/invalid-email') {
        setEstilo({
            display: 'block', 
            message: 'Debes poner un correo que sea valido'
        })
      } else {
          setEstilo({
            display: 'block',
            message: err.code
          })
      }
    }
  };

  const register = () => {
    navigate('/register');
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Acceso</h2>
      <form onSubmit={logIn} >
        <div className={style.group}>
          <label htmlFor="email" >Email</label>
          <input autoFocus id="email" type="email" name="email" autoComplete="true" onChange={emailValue} />
        </div>

        <div className={style.group}>
          <label htmlFor="password" >Contraseña</label>
          <input id="password" name="password" type="password" onChange={passwordValue} onKeyDown={(e) => {
              if (e.key === "Enter") {
                logIn()
              }
            }} />
        </div>

        {/* Div para poner el mensaje de error */}
        <div className={style.messageError} style={{display: estilo.display}}>
            <p>{estilo.message}</p>
        </div>

        <button type="button" className={style.btn} onClick={logIn}>Iniciar sesión</button>
      </form>

        <div className={style.registro}>
            <p>¿Necesitas una cuenta?</p>
            <button type="button" className={style.btn} onClick={register}>Crear una cuenta</button>
        </div>
    </div>
  );
}

export default Login;
