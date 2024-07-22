let btnVerMasMelanie = document.getElementById("btnVerMasMelanie");  
const containerMelanie = document.querySelector(".verMasMelanie");
let btnVerMasLaura = document.getElementById("btnVerMasLaura");  
const containerLaura = document.querySelector(".verMasLaura");

    if(btnVerMasMelanie){
        btnVerMasMelanie.addEventListener("click",() =>{

            containerMelanie.innerHTML+=
            `<div class="col">
                <div class="card">
                <div class="card-body">
                    <p class="card-text ">" Trabajo como supervisora en el área de Ingeniería en una empresa."</p>
                </div>
                </div>
            </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <p class="card-text" >"Estudios avanzados en Ingeniería Electrónica."</p>
              </div>
            </div>
          </div>
          <div class="col">
              <div class="card">
              <div class="card-body ">
                <p class="card-text p-3">"28 años, viviendo en Buenos Aires, CABA."</p>
                </div>  
              </div>
            </div>
          </div> 
          <div class="col">
              <div class="card">
              <div class="card-body ">
                <p class="card-text p-3">"Estudiando programación web con el objetivo de poder insertarme en el mundo IT."</p>
                </div>  
              </div>
            </div>
          </div> 
            `
            btnVerMasMelanie.classList.add('d-none');
        });
    
    }
    if(btnVerMasLaura){
        btnVerMasLaura.addEventListener("click",() =>{

            containerLaura.innerHTML+=
            `<div class="col">
                <div class="card">
                <div class="card-body">
                    <p class="card-text ">" Lisicing elit. Assumenda aliquid maiores."</p>
                </div>
                </div>
            </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <p class="card-text" >"Incidunt rerum a eaque consectetur esse quas! "</p>
              </div>
            </div>
          </div>
          <div class="col">
              <div class="card">
              <div class="card-body ">
                <p class="card-text p-3">"Assumenda illum ab,  quas! "</p>
                </div>  
              </div>
            </div>
          </div> 
          <div class="col">
              <div class="card">
              <div class="card-body ">
                <p class="card-text p-3">"aperiam ipsam incidunt rerum a eaque consectetur esse"</p>
                </div>  
              </div>
            </div>
          </div> 
            `
            btnVerMasLaura.classList.add('d-none');
        });    
    }
    
    



