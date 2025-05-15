import Menu from '../componentes/Menu';
import Contenido from '../componentes/Contenido'; // Importamos la lista de servicios

const Servicios = () => {
  return (
    <div className="aplicacion">
      <Menu />
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <section className="aplicacion__eslogan">
          </section>

                 <Contenido />
        </main>
      </div>
    </div>
  );
};

export default Servicios;
