import "./Login.css";

function Registrate() {
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
        <button type="submit" className="submit">
          Registrarse
        </button>
        <p className="signup-link">
          <a href="#">¿Ya tienes cuenta?</a>
        </p>
      </form>
    </main>
  );
}

export default Registrate;
