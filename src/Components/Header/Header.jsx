import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userName } from "../../Redux/features/IniciarSesion";


export function Header() {
const [name, setName] = useState();
const navigate = useNavigate();
const dispatch = useDispatch();

// En useEffect estamos comprobando si se ha iniciado sesión
useEffect(() => {
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        navigate('/');
      } else if (user !== null) {
        setName(user.displayName);
        dispatch(userName(user.displayName))
      }
    });
  };
  monitorAuthState();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const handleClick = async () => {
  await signOut(auth);
  navigate('/');
  console.log('saliste');
}

  return (
    <header className={style.header}>
      <h3 className={style.title}>Arreglo de Predicación Pública</h3>
      <nav className={style.nav}>
        <h4 className={style.name}>{name}</h4>
        <Link className={style.close} onClick={handleClick} >Cerrar sesión</Link>
      </nav>
    </header>
  );
}

