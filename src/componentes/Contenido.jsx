import { 
  FaPaintRoller,    // para diseño o renovación
  FaCouch,         // para mobiliario
  FaDraftingCompass, // para asesoría o planificación
  FaPalette        // para paletas de colores
} from 'react-icons/fa';
import './Contenido.css';

const servicios = [
  {
    titulo: 'Diseño de Espacios',
    descripcion: 'Creamos ambientes funcionales y estéticamente atractivos, adaptados a tus necesidades y estilo.',
    icono: <FaPaintRoller />,
  },
  {
    titulo: 'Selección de Mobiliario',
    descripcion: 'Asesoramos en la elección de muebles y accesorios que complementen tu espacio y personalidad.',
    icono: <FaCouch />,
  },
  {
    titulo: 'Planificación y Layout',
    descripcion: 'Desarrollamos planos y distribuciones óptimas para aprovechar al máximo cada área.',
    icono: <FaDraftingCompass />,
  },
  {
    titulo: 'Paleta de Colores',
    descripcion: 'Te ayudamos a seleccionar combinaciones de colores armoniosas para crear el ambiente perfecto.',
    icono: <FaPalette />,
  },
];

const Contenido = () => {
  return (
    <div className="servicios-lista">
      {servicios.map((servicio, index) => (
        <div className="servicio-item" key={index}>
          <div className="servicio-icono">{servicio.icono}</div>
          <div>
            <h3 className="servicio-titulo">{servicio.titulo}</h3>
            <p className="servicio-descripcion">{servicio.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contenido;
