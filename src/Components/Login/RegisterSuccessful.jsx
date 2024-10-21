import style from "./Style.module.css";

import { useNavigate } from "react-router-dom";

function RegisterSuccessful() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Te has registrado de manera exitosa.</h2>
      <h3>Ahora puedes iniciar sesión</h3>
      <button type="button" className={style.btn} onClick={handleClick}>
        Iniciar sesión
      </button>
    </div>
  );
}

export default RegisterSuccessful;
