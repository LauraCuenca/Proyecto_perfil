document.addEventListener('DOMContentLoaded', () => {
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar la navbar:', error));
});


let btnVerMasMelanie = document.getElementById("btnVerMasMelanie");  
const containerMelanie = document.querySelector(".verMasMelanie");
let btnVerMasLaura = document.getElementById("btnVerMasLaura");  
const containerLaura = document.querySelector(".verMasLaura");

    if(btnVerMasMelanie){
        btnVerMasMelanie.addEventListener("click",() =>{

            containerMelanie.innerHTML += `
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Trabajo como supervisora en el área de Ingeniería en una empresa.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Estudios avanzados en Ingeniería Electrónica.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">28 años, viviendo en Buenos Aires, CABA.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Estudiando programación web con el objetivo de poder insertarme en el mundo IT.</p>
                </div>
              </div>
            </div>`;
          btnVerMasMelanie.classList.add('d-none');
      });
  }
    if (btnVerMasLaura) {
      btnVerMasLaura.addEventListener("click", () => {
          containerLaura.innerHTML += `
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Trabajo en comercio, de atención al público.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Estudio Licenciatura en Sistemas, en la UNLP.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Tengo 30 años, vivo en La Plata.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body d-flex flex-column">
                  <p class="card-text">Realizo varios cursos de programación para insertarme en el mundo IT.</p>
                </div>
              </div>
            </div>`;
          btnVerMasLaura.classList.add('d-none');
      });
  }

  
  
    
    



