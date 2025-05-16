import "./Login.css";
import { useNavigate } from "react-router-dom";

function Registrate() {
  const redireccion = useNavigate();

  function PaginaRegistrate() {
    redireccion("/Login");
  }

  return (
    <main className="login-container">
      <form className="form">
        <p className="form-title">Registrate</p>
        <div className="input-container">
          <input type="email" placeholder="Usuario" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Nombre" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Correo" />
        </div>
        <button onClick={PaginaRegistrate} type="submit" className="submit">
          Registrarse
        </button>
        <p className="signup-link">
          <label onClick={PaginaRegistrate} className="signup_tog">
            ¿Ya tienes cuenta?
          </label>
        </p>
      </form>
    </main>
  );
}

export default Registrate;
