import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Inicializar Bootstrap JavaScript
    if (window.$) {
      window.$(document).ready(function() {
        // Hover para dropdowns en desktop
        window.$('.navbar-nav .dropdown').hover(
          function() {
            if (window.$(window).width() > 991.98) {
              window.$(this).find('.dropdown-menu').addClass('show');
              window.$(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
            }
          },
          function() {
            if (window.$(window).width() > 991.98) {
              window.$(this).find('.dropdown-menu').removeClass('show');
              window.$(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
            }
          }
        );

        // Inicializar carousel
        window.$('#mainSlider').carousel({
          interval: 5000,
          wrap: true
        });
      });
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/59179611288', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro enviado (demo)');
    window.$('#modalRegistro').modal('hide');
  };

  return (
    <div className="App">
      {/* ========== NAVBAR ========== */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
        <div className="container section-container">
          <a className="navbar-brand" href="#home">SERVICEBOL</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <ul className="navbar-nav ml-auto fw-bold d-none d-lg-flex">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#inicio" id="inicioDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inicio</a>
                <div className="dropdown-menu" aria-labelledby="inicioDropdown">
                  <a className="dropdown-item" href="#servicios">Servicios</a>
                  <a className="dropdown-item" href="#reparacion">Reparación</a>
                  <a className="dropdown-item" href="#compras">Compras</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#informacion" id="infoDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Información General</a>
                <div className="dropdown-menu" aria-labelledby="infoDropdown">
                  <a className="dropdown-item" href="#sobre-nosotros">Sobre Nosotros</a>
                  <a className="dropdown-item" href="#mision-vision">Misión y Visión</a>
                  <a className="dropdown-item" href="#valores">Valores</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#servicios" id="serviciosDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>
                <div className="dropdown-menu" aria-labelledby="serviciosDropdown">
                  <a className="dropdown-item" href="#emprendedores">Emprendedores</a>
                  <a className="dropdown-item" href="#reparadores">Reparadores</a>
                  <a className="dropdown-item" href="#vendedores">Vendedores</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#tarifas" id="tarifasDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tarifas</a>
                <div className="dropdown-menu" aria-labelledby="tarifasDropdown">
                  <a className="dropdown-item" href="#envios-departamentales">Envíos Departamentales</a>
                  <a className="dropdown-item" href="#envios-domicilio">Envíos a Domicilio</a>
                  <a className="dropdown-item" href="#recojo-oficinas">Recojo en oficinas</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#contacto" id="contactoDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contacto</a>
                <div className="dropdown-menu" aria-labelledby="contactoDropdown">
                  <a className="dropdown-item" href="#formulario">Formulario de Contacto</a>
                  <a className="dropdown-item" href="#telefono">Teléfono</a>
                  <a className="dropdown-item" href="#correo">Correo Electrónico</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#blog" id="blogDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                <div className="dropdown-menu" aria-labelledby="blogDropdown">
                  <a className="dropdown-item" href="#blog-principal">Página Principal</a>
                  <a className="dropdown-item" href="#blog-noticias">Blog de Noticias</a>
                  <a className="dropdown-item" href="#blog-opinion">Blog de Opinión</a>
                </div>
              </li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className="d-lg-none w-100 mt-2" id="accordionMenu">
              {['Inicio', 'Información General', 'Servicios', 'Tarifas', 'Contacto', 'Blog'].map((item, index) => (
                <div className="card" key={index}>
                  <div 
                    className="card-header-custom" 
                    id={`heading${index}`}
                    data-toggle="collapse" 
                    data-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {item}
                  </div>
                  <div 
                    id={`collapse${index}`} 
                    className={`collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordionMenu"
                  >
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0 accordion-item">
                        <li><a href={`#${item.toLowerCase().replace(' ', '-')}-1`}>Opción 1</a></li>
                        <li><a href={`#${item.toLowerCase().replace(' ', '-')}-2`}>Opción 2</a></li>
                        <li><a href={`#${item.toLowerCase().replace(' ', '-')}-3`}>Opción 3</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ========== BARRA USUARIO ========== */}
      <div className="Usuario-container">
        <div className="container section-container">
          <section className="Usuario">
            <div className="descripcion">
              <p>La mejor plataforma para bolivianos compradores y emprendedores</p>
            </div>
            <div className="d-flex align-items-center">
              <input className="form-control mr-3" type="text" placeholder="🔍 Buscar..." style={{width: '180px'}} />
              <button 
                className="fw-bold btn btn-link p-0 text-dark" 
                data-toggle="modal" 
                data-target="#modalRegistro"
                style={{textDecoration: 'none'}}
              >
                Usuario ♠
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* ========== CARRUSEL ========== */}
      <section>
        <div id="mainSlider" className="carousel slide full-width-carousel" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#mainSlider" data-slide-to="0" className="active"></li>
            <li data-target="#mainSlider" data-slide-to="1"></li>
            <li data-target="#mainSlider" data-slide-to="2"></li>
          </ol>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=500&fit=crop" 
                className="d-block w-100" 
                alt="Servicio de calidad" 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Servicios de Calidad</h5>
                <p>Los mejores profesionales a tu servicio</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=500&fit=crop" 
                className="d-block w-100" 
                alt="Reparaciones profesionales" 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Reparaciones Profesionales</h5>
                <p>Técnicos certificados para todas las reparaciones</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop" 
                className="d-block w-100" 
                alt="Instalaciones seguras" 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Instalaciones Seguras</h5>
                <p>Cumpliendo todas las normas de seguridad</p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#mainSlider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Siguiente</span>
          </a>
        </div>
      </section>

      {/* ========== CATEGORÍAS PRINCIPALES ========== */}
      <section className="servicios py-5 text-center bg-white">
        <div className="container section-container">
          <h2 className="mb-5 h1">Nuestras Categorías</h2>
          <div className="row">
            {[
              {
                title: "SERVICIOS",
                image: "https://www.baneco.com.bo/assets/content/img/images/persons/servicios/657cdaf8d9395.jpg",
                text: "Puedes contratar servicios disponibles para mejorar tu estilo de vida sin extensas búsqueda."
              },
              {
                title: "Compras",
                image: "https://emprendepyme.net/wp-content/uploads/2023/03/servicio-producto.jpg",
                text: "Todos los productos que necesitas y quieres a un solo click, con envíos interdepartamental y con calidad destacada."
              },
              {
                title: "Reparaciones",
                image: "https://www.tejal.cl/wp-content/uploads/2021/10/reparaciones-1024x576.jpg",
                text: "Reparaciones en general tanto para hogar o para diferentes tipos de dispositivos tecnológicos."
              }
            ].map((categoria, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm card-border">
                  <div className="card-img-container">
                    <img src={categoria.image} className="card-img-top" alt={categoria.title} />
                  </div>
                  <div className="card-body">
                    <h5>{categoria.title}</h5>
                    <p className="card-text">{categoria.text}</p>
                    <button className="btn btn-outline-primary mt-2">Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICIOS DE INSTALACIÓN ========== */}
      <section className="mejores-servicios py-5">
        <div className="container section-container">
          <h2 className="mb-5 h1 text-center">Mejores Servicios de Instalación</h2>
          <p className="text-center lead mb-5">Profesionales certificados para tus instalaciones más importantes</p>

          {[
            {
              title: "Instalación de Plomería",
              icon: "fa-faucet",
              color: "primary",
              image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
              description: "Instalación profesional de sistemas de agua fría y caliente, reparación de tuberías y montaje de sanitarios.",
              features: ["Sistemas de Agua", "Reparaciones", "Montaje Sanitario", "Garantía 1 Año"],
              price: "150 Bs.",
              time: "2-4 horas"
            },
            {
              title: "Instalación de Gas",
              icon: "fa-fire",
              color: "warning",
              image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
              description: "Instalación segura de sistemas de gas natural y LP con certificados de seguridad incluidos.",
              features: ["Gas Natural", "Gas LP", "Certificado", "Normas ISO"],
              price: "200 Bs.",
              time: "3-5 horas"
            },
            {
              title: "Instalación Eléctrica",
              icon: "fa-bolt",
              color: "info",
              image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
              description: "Instalación y mantenimiento de sistemas eléctricos residenciales e industriales.",
              features: ["Residencial", "Industrial", "24/7", "Certificado"],
              price: "180 Bs.",
              time: "2-6 horas"
            }
          ].map((servicio, index) => (
            <div className="servicio-fila mb-5" key={index}>
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="servicio-img-container">
                    <img src={servicio.image} className="img-fluid rounded shadow" alt={servicio.title} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="servicio-content">
                    <div className="servicio-header mb-4">
                      <div className="servicio-icon d-inline-block mr-3">
                        <i className={`fas ${servicio.icon} fa-2x text-${servicio.color}`}></i>
                      </div>
                      <h3 className={`d-inline-block text-${servicio.color}`}>{servicio.title}</h3>
                    </div>
                    <p className="servicio-descripcion mb-4">{servicio.description}</p>
                    <div className="servicio-features mb-4">
                      {servicio.features.map((feature, idx) => (
                        <span key={idx} className={`badge badge-${idx === 0 ? servicio.color : idx === 1 ? 'success' : idx === 2 ? 'info' : 'warning'} mr-2 mb-2`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="servicio-info mb-4">
                      <div className="row">
                        <div className="col-6">
                          <strong className="text-success h5">Desde {servicio.price}</strong>
                        </div>
                        <div className="col-6 text-right">
                          <span className="text-muted">
                            <i className="fas fa-clock mr-1"></i>{servicio.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="btn servicio-btn">Solicitar Servicio</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-5">
            <button className="btn btn-outline-primary btn-lg">Ver Todos los Servicios</button>
          </div>
        </div>
      </section>
      

      {/* ========== PRODUCTO DESTACADO ========== */}
      <section>
        <div id="ribbon">
          <div id="birthday" className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-6 p-4 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop" 
                  className="img-fluid rounded shadow" 
                  alt="Producto más vendido" 
                  style={{maxHeight: '300px', width: 'auto'}} 
                />
              </div>
              <div className="col-lg-5 col-md-6 p-4 text-light text-center">
                <p className="text-warning h3 mb-3">El Producto más vendido</p>
                <p className="h5 text-shadow mb-4">
                  El Smartphone XYZ ha sido nuestro producto más vendido. Con una pantalla de alta resolución, 
                  batería de larga duración y cámaras de última generación, es perfecto para quienes buscan lo mejor en tecnología.
                </p>
                <button className="btn btn-warning btn-lg">Ver más detalles</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORÍAS DE COMPRAS ========== */}
      <section className="categorias-compras py-5 text-center bg-light">
        <div className="container section-container">
          <h2 className="mb-5 h1">Categorías de Compras</h2>
          <div className="row">
            
            {/* Celulares */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://cdn-icons-png.freepik.com/512/1787/1787134.png" 
                    className="img-fluid" 
                    alt="Celulares" 
                  />
                </div>
                <div className="card-body">
                  <h5>Celulares</h5>
                  <p>Los mejores smartphones con tecnología de punta. Encuentra modelos para todos los gustos.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Computadoras */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/%C3%8Dcono_Computadora_-_Internet.JPG" 
                    className="img-fluid" 
                    alt="Computadoras" 
                  />
                </div>
                <div className="card-body">
                  <h5>Computadoras</h5>
                  <p>Potentes laptops y desktops para todas tus necesidades profesionales y de entretenimiento.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Accesorios */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/olegtoka/olegtoka1803/olegtoka180300003/96637066-illustration-of-accessories-icons-for-mobile-phone-devices.jpg" 
                    className="img-fluid" 
                    alt="Accesorios" 
                  />
                </div>
                <div className="card-body">
                  <h5>Accesorios</h5>
                  <p>Complementos ideales para mejorar tu experiencia con gadgets, tecnología y más.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Ropa */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/yupiramos/yupiramos1804/yupiramos180401061/98575220-shirt-clothes-isolated-icon-vector-illustration-design.jpg" 
                    className="img-fluid" 
                    alt="Ropa" 
                  />
                </div>
                <div className="card-body">
                  <h5>Ropa</h5>
                  <p>Las últimas tendencias de moda, ropa cómoda y elegante para todas las edades.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Zapatos */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/mchlskhrv/mchlskhrv1711/mchlskhrv171100109/90041087-sneakers-sport-shoes-vector-illustration.jpg" 
                    className="img-fluid" 
                    alt="Zapatos" 
                  />
                </div>
                <div className="card-body">
                  <h5>Zapatos</h5>
                  <p>Elige entre una amplia variedad de zapatos, desde deportivos hasta de vestir.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Juguetes */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/yupiramos/yupiramos1905/yupiramos190511872/121970844-kids-toys-bear-cubes-boat-rocket-drum-truck-bucket-xylophone-vector-illustration.jpg" 
                    className="img-fluid" 
                    alt="Juguetes" 
                  />
                </div>
                <div className="card-body">
                  <h5>Juguetes</h5>
                  <p>Juguetes creativos y educativos para niños de todas las edades. Diversión garantizada.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Electrodomésticos */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/memetiqaosvor/memetiqaosvor2507/memetiqaosvor250770463/248940015-modern-flat-design-vector-illustration-concept-of-smart-home-appliances-and-electronics-smart.jpg" 
                    className="img-fluid" 
                    alt="Electrodomésticos" 
                  />
                </div>
                <div className="card-body">
                  <h5>Electrodomésticos</h5>
                  <p>Encuentra los mejores electrodomésticos, desde frigoríficos hasta aspiradoras.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Herramientas */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/marvinjk/marvinjk2305/marvinjk230500076/210780801-tools-flat-contour-style-vector-concept-illustration.jpg" 
                    className="img-fluid" 
                    alt="Herramientas" 
                  />
                </div>
                <div className="card-body">
                  <h5>Herramientas</h5>
                  <p>Herramientas para bricolaje, reparaciones y proyectos en casa o el trabajo.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
            {/* Alimentos */}
            <div className="col-md-4 mb-4">
              <div className="categoria-item card h-100 border-0 shadow-sm card-border">
                <div className="categoria-img-container">
                  <img 
                    src="https://previews.123rf.com/images/memetiqaosvor/memetiqaosvor2507/memetiqaosvor250749727/249007646-vector-illustration-of-kebab-french-fries-and-salad-on-white-background.jpg" 
                    className="img-fluid" 
                    alt="Alimentos" 
                  />
                </div>
                <div className="card-body">
                  <h5>Alimentos</h5>
                  <p>Compra productos alimenticios de calidad, desde ingredientes básicos hasta productos gourmet.</p>
                  <a href="#" className="btn btn-outline-primary">Ver más</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========== SERVICIOS DE ENVÍO ========== */}
      <section className="envios py-5 text-center bg-white">
        <div className="container section-container">
          <h2 className="mb-5 h1">Nuestros Servicios de Envío</h2>
          <div className="row">
            
            {/* Envíos Departamentales */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm card-border">
                <div className="card-img-container">
                  <img 
                    src="https://www.socialhizo.com/images/mapas/mapas-america/mapa-de-bolivia-division-politica-socialhizo.jpg" 
                    className="card-img-top" 
                    alt="Envíos Departamentales" 
                  />
                </div>
                <div className="card-body">
                  <h5>Envíos Departamentales</h5>
                  <p className="card-text">
                    Garantizamos entregas rápidas y seguras dentro de los principales departamentos de Bolivia, 
                    con opciones de seguimiento en tiempo real para su tranquilidad.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Envíos a Domicilio */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm card-border">
                <div className="card-img-container">
                  <img 
                    src="https://www.cooperativaobrera.coop/images/2020/05/04/a_envios-a-domicilio__400x400.webp" 
                    className="card-img-top" 
                    alt="Envíos a Domicilio" 
                  />
                </div>
                <div className="card-body">
                  <h5>Envíos a Domicilio</h5>
                  <p className="card-text">
                    Ofrecemos envíos a la puerta de su hogar, con la garantía de entrega puntual y la opción 
                    de seleccionar el horario que más le convenga.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Recojo en Oficina */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm card-border">
                <div className="card-img-container">
                  <img 
                    src="https://static.vecteezy.com/system/resources/previews/002/757/037/non_2x/post-office-female-worker-and-customer-flat-color-illustration-sending-parcel-procedures-post-service-delivery-parcels-collection-point-isolated-cartoon-character-on-white-background-vector.jpg" 
                    className="card-img-top" 
                    alt="Recojo en Oficina" 
                  />
                </div>
                <div className="card-body">
                  <h5>Recojo en Oficina</h5>
                  <p className="card-text">
                    Si prefiere realizar el retiro de sus productos de manera presencial, tenemos oficinas 
                    en varias ciudades para que pueda recoger su pedido con facilidad y rapidez.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* ========== TÉCNICOS ESPECIALIZADOS ========== */}
      <section className="tecnicos-reparacion-filas py-5">
        <div className="container section-container">
          <h2 className="mb-5 h1 text-center">Nuestros Técnicos Especializados</h2>
          <p className="text-center lead mb-5">Profesionales certificados con las mejores calificaciones</p>

          {/* Técnico 1 - Carlos Mendoza */}
          <div className="tecnico-fila mb-4">
            <div className="row align-items-center">
              <div className="col-md-2 text-center mb-3 mb-md-0">
                <div className="tecnico-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    className="tecnico-img" 
                    alt="Carlos Mendoza" 
                  />
                  <div className="tecnico-especialidad">
                    <i className="fas fa-tv"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="tecnico-info-principal">
                  <h4 className="tecnico-nombre mb-1">Carlos Mendoza</h4>
                  <p className="tecnico-especialidad-texto text-primary mb-2">Especialista en Electrodomésticos</p>
                  
                  <div className="tecnico-calificacion mb-2">
                    <div className="estrellas d-inline-block">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="puntuacion ml-2">✫ 4.8</span>
                    <small className="text-muted ml-2">(124 reparaciones)</small>
                  </div>
                  
                  <div className="tecnico-detalles mb-2">
                    <span className="mr-3"><i className="fas fa-briefcase text-primary mr-1"></i>5 años</span>
                    <span className="mr-3"><i className="fas fa-check-circle text-success mr-1"></i>Certificado</span>
                    <span><i className="fas fa-bolt text-warning mr-1"></i>Disponible</span>
                  </div>
                  
                  <div className="tecnico-servicios">
                    <span className="badge badge-light mr-1 mb-1">Refrigeradores</span>
                    <span className="badge badge-light mr-1 mb-1">Lavadoras</span>
                    <span className="badge badge-light mr-1 mb-1">Cocinas</span>
                    <span className="badge badge-light mb-1">Hornos</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="tecnico-precio mb-3">
                  <strong className="text-success h4">80 Bs.</strong>
                  <small className="d-block text-muted">precio base</small>
                </div>
                <button className="btn tecnico-btn w-100">
                  <i className="fas fa-calendar-check mr-2"></i>Agendar
                </button>
              </div>
            </div>
          </div>

          {/* Técnico 2 - Rodrigo Alvarez */}
          <div className="tecnico-fila mb-4">
            <div className="row align-items-center">
              <div className="col-md-2 text-center mb-3 mb-md-0">
                <div className="tecnico-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    className="tecnico-img" 
                    alt="Rodrigo Alvarez" 
                  />
                  <div className="tecnico-especialidad">
                    <i className="fas fa-couch"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="tecnico-info-principal">
                  <h4 className="tecnico-nombre mb-1">Rodrigo Alvarez</h4>
                  <p className="tecnico-especialidad-texto text-warning mb-2">Especialista en Muebles</p>
                  
                  <div className="tecnico-calificacion mb-2">
                    <div className="estrellas d-inline-block">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="puntuacion ml-2">✫ 5.0</span>
                    <small className="text-muted ml-2">(89 reparaciones)</small>
                  </div>
                  
                  <div className="tecnico-detalles mb-2">
                    <span className="mr-3"><i className="fas fa-briefcase text-warning mr-1"></i>7 años</span>
                    <span className="mr-3"><i className="fas fa-award text-info mr-1"></i>Maestra</span>
                    <span><i className="fas fa-bolt text-warning mr-1"></i>Disponible</span>
                  </div>
                  
                  <div className="tecnico-servicios">
                    <span className="badge badge-light mr-1 mb-1">Madera</span>
                    <span className="badge badge-light mr-1 mb-1">Tapicería</span>
                    <span className="badge badge-light mr-1 mb-1">Restauración</span>
                    <span className="badge badge-light mb-1">Antigüedades</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="tecnico-precio mb-3">
                  <strong className="text-success h4">60 Bs.</strong>
                  <small className="d-block text-muted">precio base</small>
                </div>
                <button className="btn tecnico-btn w-100">
                  <i className="fas fa-calendar-check mr-2"></i>Agendar
                </button>
              </div>
            </div>
          </div>

          {/* Técnico 3 - Miguel Torres */}
          <div className="tecnico-fila mb-4">
            <div className="row align-items-center">
              <div className="col-md-2 text-center mb-3 mb-md-0">
                <div className="tecnico-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    className="tecnico-img" 
                    alt="Miguel Torres" 
                  />
                  <div className="tecnico-especialidad">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="tecnico-info-principal">
                  <h4 className="tecnico-nombre mb-1">Miguel Torres</h4>
                  <p className="tecnico-especialidad-texto text-info mb-2">Especialista en Dispositivos</p>
                  
                  <div className="tecnico-calificacion mb-2">
                    <div className="estrellas d-inline-block">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="puntuacion ml-2">✫ 4.9</span>
                    <small className="text-muted ml-2">(156 reparaciones)</small>
                  </div>
                  
                  <div className="tecnico-detalles mb-2">
                    <span className="mr-3"><i className="fas fa-briefcase text-info mr-1"></i>4 años</span>
                    <span className="mr-3"><i className="fas fa-bolt text-danger mr-1"></i>Urgente</span>
                    <span><i className="fas fa-bolt text-warning mr-1"></i>Disponible</span>
                  </div>
                  
                  <div className="tecnico-servicios">
                    <span className="badge badge-light mr-1 mb-1">Smartphones</span>
                    <span className="badge badge-light mr-1 mb-1">Laptops</span>
                    <span className="badge badge-light mr-1 mb-1">Tablets</span>
                    <span className="badge badge-light mb-1">Computadoras</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="tecnico-precio mb-3">
                  <strong className="text-success h4">100 Bs.</strong>
                  <small className="d-block text-muted">precio base</small>
                </div>
                <button className="btn tecnico-btn w-100">
                  <i className="fas fa-calendar-check mr-2"></i>Agendar
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="btn btn-outline-primary btn-lg">
              <i className="fas fa-users mr-2"></i>Ver Todos los Técnicos
            </button>
          </div>
        </div>
      </section>

      {/* ========== MISIÓN Y VISIÓN ========== */}
      <section className="mision-vision py-5 text-center bg-light">
        <div className="container section-container">
          <h2 className="mb-5 h1">Misión y Visión</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-border h-100">
                <div className="card-body">
                  <h5 className="text-primary">Misión</h5>
                  <p>
                    Proveer a los bolivianos un servicio confiable y eficiente de compras, reparaciones y envíos, 
                    promoviendo la comodidad, el ahorro de tiempo y la satisfacción de nuestros usuarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-border h-100">
                <div className="card-body">
                  <h5 className="text-success">Visión</h5>
                  <p>
                    Ser la plataforma líder en Bolivia que ofrece soluciones integrales para la compra de productos, 
                    contratación de servicios y reparaciones, contribuyendo al desarrollo económico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOBRE NOSOTROS ========== */}
      <section className="informacion py-5 text-center bg-white">
        <div className="container section-container">
          <h2 className="mb-5 h1">Sobre Nosotros</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card card-border">
                <div className="card-body">
                  <p className="lead">
                    En <strong>ServiceBol</strong>, nos dedicamos a ofrecer soluciones prácticas y accesibles 
                    para todos los bolivianos, creando una plataforma que conecta compradores, emprendedores 
                    y reparadores a través de servicios de calidad, envíos confiables y asistencia profesional.
                  </p>
                  <button className="btn btn-primary mt-3">Conoce más sobre nosotros</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer id="new-footer">
        <div className="container section-container">
          <div className="row text-left">
            <div className="col-md-4 mb-4">
              <h4>ServiceBol</h4>
              <p>
                ServiceBol ofrece servicios, reparaciones y compras para los bolivianos. 
                Compras, almacenamiento y envíos. Un intermediario confiable con tiendas 
                y empresas registradas certificadas.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Oficina Principal</h4>
              <p><i className="fas fa-map-marker-alt mr-2"></i>Av. Ballivian C. Olivos #133</p>
              <p><i className="fas fa-envelope mr-2"></i>ServiceBol@gmail.com</p>
              <p><i className="fas fa-phone mr-2"></i>+591 79611288</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Links de Ayuda</h4>
              <ul className="list-unstyled">
                <li><a href="#faq">Preguntas frecuentes</a></li>
                <li><a href="#tarifas">Tarifas</a></li>
                <li><a href="#prohibidos">Artículos prohibidos</a></li>
                <li><a href="#shopping">Shopping</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="social-icons mb-3">
                <a href="#facebook" className="text-light mx-2"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#twitter" className="text-light mx-2"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#instagram" className="text-light mx-2"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#youtube" className="text-light mx-2"><i className="fab fa-youtube fa-2x"></i></a>
              </div>
              <p className="copy">© 2024 ServiceBol. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== WHATSAPP ========== */}
      <div 
        className="whatsapp" 
        onClick={handleWhatsAppClick}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => e.key === 'Enter' && handleWhatsAppClick()}
      >
        <i className="fab fa-whatsapp"></i>
      </div>

      {/* ========== MODAL REGISTRO ========== */}
      <div className="modal fade" id="modalRegistro" tabIndex="-1" role="dialog" aria-labelledby="modalRegistroLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-4">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalRegistroLabel">
                <i className="fas fa-user-plus mr-2"></i>Registro de Usuario
              </h5>
              <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Crea una contraseña segura" required />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="terminos" required />
                  <label className="form-check-label" htmlFor="terminos">
                    Acepto los términos y condiciones
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  <i className="fas fa-user-check mr-2"></i>Registrarse
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="mb-0">¿Ya tienes cuenta? <a href="#login" data-dismiss="modal" data-toggle="modal" data-target="#modalLogin">Inicia sesión</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
