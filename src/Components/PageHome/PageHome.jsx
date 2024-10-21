import style from "./PageHome.module.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

function PageHome() {
    const [name, setName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const monitorAuthState = async () => {
          onAuthStateChanged(auth, (user) => {
            if (user === null) {
              navigate('/');
            } else if (user !== null) {
              setName(user.displayName);
              console.log(`Este usuario a confirmado su correo electrónico: ${user.emailVerified}`);              
            }
          });
        };
        monitorAuthState();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const handleClick = async () => {
        await signOut(auth);
        navigate('/');
      }
      

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2>Bienvenido/a {name}</h2>
                <h4>Próximamente la nueva página de predicación pública estará disponible.</h4>
                <h4>¡Muchas gracias por registrarte!</h4>
                <button className={style.btnExit} onClick={handleClick}>Salir</button>
            </div>
        </div>
    )
}

export default PageHome;