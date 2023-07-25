// --------------------- Variables index---------------------------------------------------------
let passwordDiv = document.getElementById("stylePassword");
let passwordInput = document.getElementById("password");
const divPassword = document.getElementById("stylePassword");
const divLogIn = document.getElementById("btn-logIn");
const btnVolver=document.getElementById("btn-volver")
let userInfo = [];
const cuentas = [
  {
    email: "Mali",
    password: "1234",
    balance: 200,
  },
  {
    email: "Gera",
    password: "5678",
    balance: 290,
  },
  {
    email: "Maui",
    password: "0000",
    balance: 67,
  },
];
function botonesPorUsuario (){
  divPassword.style.display = "flex";
  divLogIn.style.display = "flex";
  btnVolver.style.display="flex"
}
function logIn1() {
  let userHide2 = document.getElementById("usuario-2");
  let userHide3 = document.getElementById("usuario-3");
  userHide2.innerHTML = "";
  userHide3.innerHTML = "";
  userInfo = Object.values(cuentas[0]);
  infoLocal(userInfo);
  botonesPorUsuario ()
}

function logIn2() {
  let userHide1 = document.getElementById("usuario-1");
  let userHide3 = document.getElementById("usuario-3");
  userHide1.innerHTML = "";
  userHide3.innerHTML = "";
  userInfo = Object.values(cuentas[1]);
  infoLocal(userInfo);
  botonesPorUsuario ()
}

function logIn3() {
  let userHide1 = document.getElementById("usuario-1");
  let userHide2 = document.getElementById("usuario-2");
  userHide1.innerHTML = "";
  userHide2.innerHTML = "";
  userInfo = Object.values(cuentas[2]);
  infoLocal(userInfo);
  botonesPorUsuario ()
}
//--------------------- Guardar información del usuario en localStorage ----------
function infoLocal(arregloLocal) {
  console.log("dentro de infolocal", arregloLocal);
  // Convertir el arreglo en una cadena JSON antes de almacenarlo en localStorage
  localStorage.setItem("userInLocalStorage", JSON.stringify(arregloLocal));
}

// check password
function checkPassword() {
  let password = passwordInput.value;
  if (userInfo[1] === password) {
    console.log("inicio sesión");
    window.location.href = "./home.html";
  } else {
    alert("Contraseña Incorrecta");
  }
  passwordInput.value = "";
}

//--------------------------------------------- Scripts for Home ---------------------------------------------//
//---------------------------------VARIABLES-------------------------------------//
let profileBank = document.getElementById("perfil");
let ingresar = document.getElementById("in");
let retirar = document.getElementById("out");
let btnIngresar = document.getElementById("ingresar");
let btnRetirar = document.getElementById("retirar-btn");
let btncerrar = document.getElementById("cerrar-btn");
let conseguirBalance = document.getElementById("pBalance");
let balance = 0;
const mostrarIngresar = document.getElementById("moneyIn");
const mostrarRetirar = document.getElementById("moneyOut");
const perfilUsuario = document.getElementById("perfilUsuario");




// Recuperar el arreglo almacenado en localStorage y convertirlo de nuevo a un arreglo JavaScript
const userInLocalStorage = JSON.parse(
  localStorage.getItem("userInLocalStorage")
);
console.log("variable de local", userInLocalStorage[2]);


// INGRESAR EL MONTO A CONSIGNAR
btnIngresar.addEventListener("click", function (event) {
  console.log();

  let valorIn = ingresar.value;
  if (valorIn) {
    console.log(valorIn);
    valorIn = parseInt(valorIn);
    console.log(valorIn);
    balance = userInLocalStorage[2] + valorIn;
    if (balance > 990) {
      alert(
        "El monto máximo en la cuenta debe ser de $990 con esta transacción usted supera el monto"
      );
      conseguirBalance.innerHTML = `Valor consignado: $0\n Saldo Actual: $${userInLocalStorage[2]}`
    }
    else {

      
      conseguirBalance.innerHTML = `Valor consignado: $${valorIn}\n Saldo Actual: $${balance}`
      
      
      userInLocalStorage[2] = balance;
      localStorage.setItem(
        "userInLocalStorage",
        JSON.stringify(userInLocalStorage)
      )
    }

    ingresar.value = "";
 
  }
  else {
    alert("Transacción rechazada.Ingrese un valor válido.")
    conseguirBalance.innerHTML = `Valor consignado: $0\n Saldo Actual: $${userInLocalStorage[2]}`
  }
});

// INGRESAR EL MONTO A RETIRAR
btnRetirar.addEventListener("click", function (event) {
  let valorOut = retirar.value;
  if (valorOut) {
    valorOut = parseInt(valorOut);
    balance = userInLocalStorage[2] - valorOut;
    console.log(valorOut);
    
    if (balance < 10 || valorOut < 0) {
      alert(
        `valor no valido.Su balance es menor a $10 unicamente puede retirar $${valorOut-10}`
        
      );
      conseguirBalance.innerHTML =`Valor retirado: $0\nSaldo Actual: $${userInLocalStorage[2]}`
    }
    else {
      conseguirBalance.innerHTML =`Valor retirado: $${valorOut}\nSaldo Actual: $${balance}`
      userInLocalStorage[2] = balance;
      localStorage.setItem(
        "userInLocalStorage",
        JSON.stringify(userInLocalStorage)
      )
    }
    retirar.value = "";
    
 
  }
else {
  alert("Transacción rechazada.Ingrese un valor válido.")
  conseguirBalance.innerHTML =`Valor retirado: $0\nSaldo Actual: $${userInLocalStorage[2]}`
}
});
// CERRAR SESIÓN Y VOLVER A LA PÁGINA DE INICIO
btncerrar.addEventListener("click", function () {
  //localStorage.removeItem(userInLocalStorage)
  window.location.href = "./index.html";
});

//--------------------------------- FUNCIONES ----------------------//
function volver(){
  window.location.href = "./index.html";
}

function espacioParaIngresar() {
  mostrarIngresar.style.display = "flex";
  mostrarRetirar.style.display = "none";
  conseguirBalance.innerHTML = `\nSaldo Actual: $${userInLocalStorage[2]}`
}
function espacioParaRetirar() {
  mostrarRetirar.style.display = "flex";
  mostrarIngresar.style.display = "none";
  conseguirBalance.innerHTML = `\nSaldo Actual: $${userInLocalStorage[2]}`
}
function balancePantalla() {
  mostrarRetirar.style.display = "none";
  mostrarIngresar.style.display = "none";
  conseguirBalance.innerHTML = `Estado de cuenta: $${userInLocalStorage[2]}`
}

// ------------------------------ Valores en pantalla ---------------------//
perfilUsuario.innerHTML = `Bienvenido ${userInLocalStorage[0]}`
//conseguirBalance.innerHTML=`Hola, ${userInLocalStorage [2]}`; 