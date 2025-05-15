import './Contacto.css';
import Menu from '../componentes/Menu'; // Verifica que la ruta sea correcta

const Contacto = () => {
  return (
    <div className="contacto">
      <Menu/> {/* Menú lateral que se mantiene fijo */}
      
      <div className="contacto__contenido">
        <div className="contacto__fondo" />
        
        <main className="contacto__main">
          <h2 className="contacto__titulo">Contáctanos</h2>
          
          <div className="contacto__formulario">
            <form className="formulario">
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo" required />
              <input type="telefono" placeholder="Teléfono" required />
              <textarea placeholder="Escribe tu mensaje..." rows="5" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>

            <div className="contacto__info">
              <h3>Información de contacto</h3>
              <p><strong>Teléfono:</strong> +57 315 327 1001</p>
              <p><strong>Email:</strong> tuespacio@corporacion.com</p>
              <p><strong>Dirección:</strong> Cl 99, Medellín, Colombia</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contacto;
