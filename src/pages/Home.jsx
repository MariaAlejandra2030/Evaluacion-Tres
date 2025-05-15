import Menu from '../componentes/Menu'
import './Home.css'


function Home() {
  return (
    <div className="aplicacion">
    <Menu />
    <div className="contenido">
      <div className="contenido-fondo"></div>
      <main className="principal">
        <section className="eslogan">
          <h2 className="eslogan-texto"><span></span>Merezco espacios <br></br> ENCANTADORES!</h2>
        </section>
       
      </main>
    </div>
  </div>
  )
}

export default Home