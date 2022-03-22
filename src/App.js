import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import razerPhoto from "./assets/img/razer.jpg";
import logitechPhoto from "./assets/img/logitech.png";
import corsairPhoto from "./assets/img/corsair.png";
import testimonio1Photo from "./assets/img/testimonials-1.jpg";
import testimonio2Photo from "./assets/img/testimonials-2.jpg";
import testimonio3Photo from "./assets/img/testimonials-3.jpg";
import { useState } from "react";
import WeatherData from "./WeatherData";
import CanvasClock from "./CanvasClock";

function App() {
  const [fontSize, setFontSize] = useState(30);
  const [getStyle, setStyle] = useState();

  return (
    <>
      <nav className="navbar navbar-dark bg-dark static-top">
        <p className="text-center">
          "Presiona el botón "Disminuir" o "Aumentar" para cambiar el tamaño de
          la fuente (letra)"
        </p>
        <div className="container">
          <div
            className="btn-toolbar justify-content-center"
            role="toolbar"
            aria-label="Botones"
          >
            <button
              type="button"
              onClick={() => setFontSize(fontSize - 2)}
              className="disminuir btn btn-dark mr-1"
            >
              Disminuir
            </button>
            <button
              type="button"
              onClick={() => setFontSize(fontSize + 2)}
              className="aumentar btn btn-dark mr-1"
            >
              Aumentar
            </button>
            <button
              type="button"
              onClick={() => setFontSize(30)}
              className="restablecer btn btn-danger"
            >
              Restablecer
            </button>
          </div>
          <WeatherData />
          <CanvasClock />
        </div>
      </nav>
      <header className="masthead" id="masthead">
        <div className="alert" style={{ display: getStyle }}>
          <span
            className="closebtn"
            onClick={() => {
              setStyle("none");
            }}
          >
            &times;
          </span>
          <p>
            Con su consentimiento, nosotros y nuestros socios utilizamos cookies
            o tecnologías similares para almacenar, acceder y procesar datos
            personales como su visita a este sitio web.
          </p>
          <p>
            Nosotros y nuestros socios hacemos el siguiente procesamiento de
            datos:
          </p>
          <p>
            Anuncios y contenido personalizados, medición de anuncios y
            contenido, conocimiento de la audiencia y desarrollo de productos,
            datos de geolocalización precisos e identificación a través del
            escaneo del dispositivo, almacenamiento y/o acceso a información en
            un dispositivo
          </p>
        </div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 style={{ fontSize: `${fontSize}px` }}>
                  ¡Descubre los teclados que podemos ofrecerte!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="features-icons bg-dark text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <h3>Teclados de Membrana</h3>
                <p className="lead mb-0">
                  Son los tipos de teclados más comunes que existen, son
                  sencillos y baratos.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                <h3>Teclado Mecánicos</h3>
                <p className="lead mb-0">
                  Son los tipos de teclados que son rápidos y precisos al
                  momento de teclear
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <h3>Teclados Ergonómicos</h3>
                <p className="lead mb-0">
                  Son los tipos de teclados que son mucho mas comódos para
                  teclar durante largos tiempos, a diferencia de los otros dos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0 bg-dark text-white">
            <img
              src={razerPhoto}
              alt="Teclado Razer BlackWidow V3 Mini HyperSpeed"
              className="col-lg-6 order-lg-2 text-white showcase-img"
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Razer</h2>
              <p className="lead mb-0">
                Este es el Razer BlackWidow V3 Mini HyperSpeed: compacto para
                cualquier espacio y versátil para cualquier configuración.
                Disfruta de un juego sin interrupciones con un elegante teclado
                mecánico inalámbrico para juegos de tamaño 65 % que ofrece el
                equilibrio perfecto entre diseño y funcionalidad.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0 bg-dark text-white">
          <img
            src={logitechPhoto}
            alt="Teclado Logitech MX Keys Mini"
            className="col-lg-6 order-lg-1 text-white showcase-img"
          />
          <div className="col-lg-6 order-lg-2 my-auto showcase-text">
            <h2>Logitech</h2>
            <p className="lead mb-0">
              Éste es MX Keys Mini, un teclado minimalista hecho para creadores.
              Un formato más pequeño y teclas más inteligentes la capacidad de
              crear y hacer cosas.
            </p>
          </div>
        </div>
        <div className="row g-0 bg-dark text-white">
          <img
            src={corsairPhoto}
            alt="Teclado Logitech MX Keys Mini"
            className="col-lg-6 order-lg-2 text-white showcase-img"
          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Corsair</h2>
            <p className="lead mb-0">
              El teclado para juegos CORSAIR K55 RGB PRO ilumina su escritorio
              con retroiluminación RGB dinámica de cinco zonas, y potencia su
              juego con seis teclas exclusivas para macros.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials text-center bg-dark text-white">
        <div className="container">
          <h2 className="mb-5">Opiniones de nuestros clientes</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={testimonio1Photo}
                  alt="Testimonio 1"
                />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">
                  "¡Excelentes teclados!"
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={testimonio2Photo}
                  alt="Testimonio 2"
                />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">"¡Excelente Servicio!"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={testimonio3Photo}
                  alt="Testimonio 3"
                />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">
                  "Tiempo de entrega maravilloso y eficaz"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action text-white text-center">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">¡Ordena tu teclado hoy mismo!</h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Keyshop 2022. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    </>
  );
}

export default App;
