console.log("JS cargado correctamente");

function mostrarAlerta() {
  alert("¡Gracias por tu interés! Muy pronto te contactaremos. ");
}


// Mostrar hora en el footer
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById("horaActual").textContent = "Hora actual: " + hora;
}
setInterval(mostrarHora, 1000);

// HERO dinámico
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.getElementById('hero-content');

  const secciones = {
    inicio: `
      <div class="container">
        <h1 class="display-5 fw-bold">Protegé tu empresa<br>de las amenazas cibernéticas</h1>
        <p class="lead mb-4">Soluciones modernas de seguridad para tu negocio</p>
       
      </div>
    `,
    nosotros: `
      <div class="container">
        <h1 class="display-5 fw-bold">¿Quiénes somos?</h1>
        <p class="lead">Somos un equipo apasionado por la ciberseguridad, comprometido con proteger los datos e infraestructuras digitales de nuestros clientes.</p>
        <p class="text-muted">Contamos con más de 10 años de experiencia en el sector, brindando soluciones personalizadas, asesoría constante y tecnología de punta para empresas de todos los tamaños.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <h5>Misión</h5>
            <p>Proteger la información digital de nuestros clientes mediante soluciones innovadoras, accesibles y efectivas en ciberseguridad.</p>
          </div>
          <div class="col-md-6">
            <h5>Visión</h5>
            <p>Ser líderes en Latinoamérica en servicios de ciberseguridad, destacándonos por nuestra excelencia, profesionalismo y cercanía con cada cliente.</p>
          </div>
        </div>

        
    `,
    contacto: `
      <div class="container">
        <h1 class="display-5 fw-bold">Contacto</h1>
        <p class="lead">Estamos listos para ayudarte a proteger tu información. ¡Contactanos hoy!</p>

        <div class="row mt-4">
          <div class="col-md-6">
           

            <h5><i class="bi bi-telephone-fill me-2"></i> Teléfono</h5>
            <p>+506 8888-8888</p>

            <h5><i class="bi bi-whatsapp me-2 text-success"></i> WhatsApp</h5>
            <p><a href="https://wa.me/50688888888" target="_blank">Chatear por WhatsApp</a></p>
          </div>

          <div class="col-md-6">
            <h5><i class="bi bi-geo-alt-fill me-2"></i> Ubicación</h5>
            <p>Alajuela, Costa Rica</p>

            <h5><i class="bi bi-clock-fill me-2"></i> Horario de atención</h5>
            <p>Lunes a Viernes: 8:00 a.m. – 5:00 p.m.</p>
          </div>
        </div>

       
      </div>
    `,
    planes: `
      <div class="container">
        <h1 class="display-5 fw-bold text-warning">Nuestros Planes</h1>
        <div class="row text-start mt-4">

          <div class="col-md-4 mb-4">
            <div class="card plan-card" onclick="mostrarDetalle('basico')">
              <div class="card-body">
                <h5 class="card-title">Plan Básico</h5>
                <p class="card-text">Protección esencial para pequeñas empresas.</p>
                <span class="text-muted">Desde $29/mes</span>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card plan-card" onclick="mostrarDetalle('pro')">
              <div class="card-body">
                <h5 class="card-title">Plan Pro</h5>
                <p class="card-text">Cobertura avanzada con monitoreo 24/7.</p>
                <span class="text-muted">Desde $59/mes</span>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card plan-card" onclick="mostrarDetalle('empresarial')">
              <div class="card-body">
                <h5 class="card-title">Plan Empresarial</h5>
                <p class="card-text">Seguridad personalizada para grandes compañías.</p>
                <span class="text-muted">Desde $99/mes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  };

  // Función pública para cambiar de sección
  window.cambiarSeccion = function (seccion) {
    hero.classList.remove('fade-in');
    hero.innerHTML = secciones[seccion];
    void hero.offsetWidth;
    hero.classList.add('fade-in');
  };

  // Mostrar detalle de plan
  window.mostrarDetalle = function (plan) {
    const detalles = {
      basico: `
        <div class="container text-center">
          <h2 class="text-success">Detalles del Plan Básico</h2>
          <p>Incluye antivirus, protección contra malware y respaldo semanal automático. Ideal para pymes.</p>
          <button class="btn btn-outline-secondary mt-3" onclick="cambiarSeccion('planes')">← Volver a planes</button>
        </div>
      `,
      pro: `
        <div class="container text-center">
          <h2 class="text-primary">Detalles del Plan Pro</h2>
          <p>Además del plan básico, incluye monitoreo continuo 24/7, firewall avanzado y respuesta ante incidentes.</p>
          <button class="btn btn-outline-secondary mt-3" onclick="cambiarSeccion('planes')">← Volver a planes</button>
        </div>
      `,
      empresarial: `
        <div class="container text-center">
          <h2 class="text-warning">Detalles del Plan Empresarial</h2>
          <p>Soluciones personalizadas, equipo dedicado, auditorías, seguridad cloud y soporte premium 24/7.</p>
          <button class="btn btn-outline-secondary mt-3" onclick="cambiarSeccion('planes')">← Volver a planes</button>
        </div>
      `
    };

    hero.classList.remove('fade-in');
    hero.innerHTML = detalles[plan];
    void hero.offsetWidth;
    hero.classList.add('fade-in');
  };

  // Enlaces del menú
  document.getElementById('link-inicio').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccion('inicio');
  });

  document.getElementById('link-nosotros').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccion('nosotros');
  });

  document.getElementById('link-contacto').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccion('contacto');
  });

  document.getElementById('link-planes').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccion('planes');
  });

  // Mostrar inicio por defecto
  cambiarSeccion('inicio');
});

