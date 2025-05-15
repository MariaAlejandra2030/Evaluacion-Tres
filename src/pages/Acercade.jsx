import './Acercade.css';
import Menu from '../componentes/Menu';

function Acercade() {
  return (
    <div className="acerca">
      <div className="acerca__fondo" />
      <Menu />

      <div className="acerca__contenido">
        <main className="acerca__main">
          <h2 className="acerca__titulo">Sobre Nosotros</h2>

          <section className="acerca__seccion">
            <h3>Historia</h3>
            <p>
              Nuestro estudio de diseño de interiores nació de la pasión por transformar espacios en lugares funcionales, estéticos y llenos de personalidad. Desde nuestros inicios, hemos trabajado con clientes residenciales y comerciales para crear ambientes que reflejen su estilo y necesidades.
            </p>
          </section>

          <section className="acerca__seccion">
            <h3>Misión</h3>
            <p>
              Brindar soluciones creativas y personalizadas en diseño de interiores, mejorando la calidad de vida de nuestros clientes a través de espacios armoniosos, funcionales y con identidad propia.
            </p>
          </section>

          <section className="acerca__seccion">
            <h3>Visión</h3>
            <p>
              Ser reconocidos como un referente en diseño de interiores en la región, destacándonos por la innovación, el compromiso con el detalle y la satisfacción del cliente en cada proyecto.
            </p>
          </section>

          <section className="acerca__seccion">
            <h3>Equipo</h3>
            <p>
              Somos un equipo de diseñadores, arquitectos y creativos apasionados por la estética, el confort y la funcionalidad. Combinamos experiencia, tendencias y sensibilidad artística para dar vida a espacios únicos.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Acercade;
