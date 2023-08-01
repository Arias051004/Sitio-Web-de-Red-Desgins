
let correction = 0;
let duration = 60;
const items = document.getElementsByClassName("item");
const pages = ["/Paginas/Productos.html", "/Paginas/Promociones.html", "/Paginas/Contacto.html", "https://www.facebook.com/1377387549227405/posts/pfbid0PtMMUrYwSfBZQGTdz82811Dcq3sK6onQ5DNb8VtfLwGJvJmzJdHv1Mt6P7Hhcoz7l/?mibextid=cr9u03"];

//funcion para redireccionar a otra pagina
goToOtherPage = (page) => window.location.href = page;


//Funcion que anima las opiniones de los clientes
function rotate() {
  let radius = "90";
  let amount = items.length;
  let deltaAngle = Math.PI;
  let angle;
  let y;
  let x;
  let z;
  
  //Se repite para cada uno de los items
  for (let i = 1; i <= amount; i++) {
    angle = deltaAngle * i * 1 - correction; //se agrega el angulo
    y = Math.sin(angle) * radius / 2; //se agrega el seno
    z = Math.cos(angle) * radius; //se agrega el coseno
  
    
    x = i * 0;
    
    //Se cambia el css de los item para agregar la animacion en '3d'
    items[i - 1].style.transform = "translate3d(" + x + "px, " + y + "px, " + z + "px)";
  }
  
  correction += Math.PI * 2 / (60 * duration);
  
  window.requestAnimationFrame(rotate);
}

//Agrega las imagenes de las opiniones de los clientes
function clients() {
  for (let i = 1; i < 9; i++) {
    document.getElementById("root2").innerHTML += "<div class='item'><img src='/multimedia/clientes/cliente"+i+".png' alt='Opinion de Cliente'></div>";
  }
}

clients();
rotate();
