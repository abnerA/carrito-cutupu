import React from "react";
import style from "./Style.module.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { sendEmail } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // navigate para cambiar de ruta una vez inicida la sesión 


  const nombre = (e) => {
    setName(e.target.value)
  }

  const apellido = (e) => {
    setLastName(e.target.value)
  }

  const correo = (e) => {
    setEmail(e.target.value)
  }

  const contraseña = (e) => {
    setPassword(e.target.value)
  }

  // Function para crear nuevo usuario
  const createAccount = async (email, password, fullName) => {
    try {
      const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullName})
      console.log(userCredencial.user.emailVerified)
      // La siguiente function es para enviar correo de confirmación de su correo
      sendEmail()
      // alert(`Ya estas registrado ${fullName}`);
        navigate('/successful-registration');
    }
    catch(e) {
      if (e.code === 'auth/invalid-email') {
        alert('Tú email no ha sido valido')
      } else if (e.code === 'auth/weak-password') {
        alert('Tu contraseña es muy debil. Debe tener al menos 6 caracteres')
      } else if (e.code === 'auth/email-already-in-use') {
        alert(`Este correo ya existe ${email}`)
      } else {
        console.log(e.message);
      }
    }
  }

  const submit = () => {
    let nombreCompleto = name.charAt(0).toUpperCase() + name.slice(1) +
     ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1);
    createAccount(email, password, nombreCompleto);
  }
  
  return (
    <div className={style.container}>
      <h2 className={style.title}>Registro</h2>
      <form>
        <div className={style.group}>
          <label htmlFor="name">Nombre</label>
          <input autoFocus autoCapitalize="sentences" type="text" name="name" id="name" autoComplete="true" value={name} onChange={nombre} />
        </div>

        <div className={style.group}>
          <label htmlFor="lastName" >Apellido</label>
          <input autoCapitalize="sentences" type="text" name="lastName" id="lastName" value={lastName} onChange={apellido} />
        </div>
        
        <div className={style.group}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" autoComplete="true" value={email} onChange={correo} />
        </div>
        <div className={style.group}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" value={password} onChange={contraseña} />
        </div>
      </form>

      <button type="button" className={style.btn} onClick={submit}>Registrarse</button>
    </div>
  );
}

export default Register;