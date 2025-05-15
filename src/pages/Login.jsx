import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

   const redireccion = useNavigate();

  function PaginaRegistrate() {
    redireccion("/Registrate");
  }


  return (
    

    
    <main className="login-container">
      <form className="form">
        <p className="form-title">Inicia sesión</p>
        <div className="input-container">
          <input type="email" placeholder="Usuario" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Contraseña" />
        </div>
        <button type="submit" className="submit">
          Iniciar sesión
        </button>
        <p className="signup-link">
          <label onClick={PaginaRegistrate} className="signup_tog">
              ¿No tienes cuenta?
            </label>
            
        </p>
      </form>
    </main>
  );
}

export default Login;
