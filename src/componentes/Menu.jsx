import { useNavigate } from "react-router-dom"
function MenuLateral() {
  
  let redireccion = useNavigate()

  function cerrarSesion(){
    redireccion("/Login");
  }

  return (
    <aside className="menu-lateral">
      <h1 className="menu-lateral-logo">HOME<span className="menu-lateral-logo--resaltado"></span></h1>
      <nav className="menu-lateral-navegacion">
        <a className="menu-lateral-navegacion-item" href="./Servicios">Servicios</a>
        <a className="menu-lateral-navegacion-item" href="./Contacto">Contacto</a>
        <a className="menu-lateral-navegacion-item" href="./Acercade">Acerca de</a>
        <button onClick={cerrarSesion} type='button' className="menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral