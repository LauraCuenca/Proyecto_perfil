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
              <div class="card h-100 ">
                <div class="card-body center flex-column">
                  <p class="card-text">Trabajo como supervisora en el área de Ingeniería en una empresa.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 ">
                <div class="card-body center flex-column">
                  <p class="card-text">Estudios avanzados en Ingeniería Electrónica.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 ">
                <div class="card-body center flex-column">
                  <p class="card-text">28 años, viviendo en Buenos Aires, CABA.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 ">
                <div class="card-body center flex-column">
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
                <div class="card-body center flex-column">
                  <p class="card-text">Trabajo en comercio, de atención al público.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body center flex-column">
                  <p class="card-text">Estudio Licenciatura en Sistemas, en la UNLP.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body center flex-column">
                  <p class="card-text">Tengo 30 años, vivo en La Plata.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 ">
                <div class="card-body center flex-column">
                  <p class="card-text">Realizo varios cursos de programación para insertarme en el mundo IT.</p>
                </div>
              </div>
            </div>`;
          btnVerMasLaura.classList.add('d-none');
      });
  }

  function validarFormulario() {
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMsj = document.getElementById('msjError');
    let mensaje = document.getElementById('message').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación del nombre (debe contener al menos 3 caracteres, maximo 50 y no debe ser un número)
    if ((nombre.length < 3)||(nombre.length > 50)||(nombre.trim() === "")) {
        errorMsj.textContent = "Por favor, ingresa un nombre y apellid válido (mínimo 3 caracteres, máximo 50 caracteres), no se aceptan números.";
        return false; // Evita que el formulario se envíe
    }else if(!isNaN(nombre)){
        errorMsj.textContent = "Por favor, ingresa un nombre y apellido válido, no se aceptan números";
        return false;
    }
    // Validación del email (usando una expresión regular simple para verificar el formato)
    if (!emailRegex.test(email)) {
       errorMsj.textContent = "Por favor, ingresa un email válido, debe contener los caracteres @ y .";
        return false; // Evita que el formulario se envíe
    }
    if(mensaje.trim() === ""){
      errorMsj.textContent = "Por favor, ingresar un mensaje";
        return false; // Evita que el formulario se envíe
    }
    errorMsj.textContent = "";
    // Si la validación pasa, el formulario se puede enviar
    alert("Formulario enviado");
    return true;
}
function toggleContraste(){
  let form = document.getElementById("myForm");
  let formBody = document.getElementById("formBody");
  let formBtnEstilos = document.getElementById("formBtnEstilos");
  let formBtnEnviar = document.getElementById("formBtnEnviar");

  formBody.classList.remove("formBodyContraste");
  form.classList.remove("bgAltoContraste");
  formBtnEstilos.classList.remove("formBtnEstilosAltoContraste");
  formBtnEnviar.classList.remove("formBtnEstilosAltoContraste"); 
  
}

function toggleAltoContraste() {
  let form = document.getElementById("myForm");
  let formBody = document.getElementById("formBody");
  let formBtnEstilos = document.getElementById("formBtnEstilos");
  let formBtnEnviar= document.getElementById("formBtnEnviar");

  formBody.classList.add("formBodyContraste");
  form.classList.add("bgAltoContraste");
  formBtnEstilos.classList.add("formBtnEstilosAltoContraste");
  formBtnEnviar.classList.remove("formBtnEstilosAltoContraste");
  formBtnEnviar.classList.add("formBtnEstilosAltoContraste"); 
}


  
  
    
    



