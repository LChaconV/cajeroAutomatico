// --------------------- Variables index---------------------------------------------------------
let passwordDiv = document.getElementById("stylePassword");
let passwordInput=document.getElementById("password"); 
const divPassword = document.getElementById("stylePassword")
const divLogIn = document.getElementById("btn-logIn")
let userInfo= []
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


function logIn1() {
  let userHide2 = document.getElementById("usuario-2");
  let userHide3 = document.getElementById("usuario-3");
  userHide2.innerHTML = "";
  userHide3.innerHTML = "";
  userInfo = Object.values(cuentas[0]);
  infoLocal(userInfo)
  divPassword.style.display="flex"
  divLogIn.style.display="flex"

}



function logIn2() {
  let userHide1 = document.getElementById("usuario-1");
  let userHide3 = document.getElementById("usuario-3");
  userHide1.innerHTML = "";
  userHide3.innerHTML = "";
  userInfo = Object.values(cuentas[1]);
  infoLocal(userInfo)
  divPassword.style.display="flex"
  divLogIn.style.display="flex"
}

function logIn3() {
  let userHide1 = document.getElementById("usuario-1");
  let userHide2 = document.getElementById("usuario-2");
  userHide1.innerHTML = "";
  userHide2.innerHTML = "";
  userInfo = Object.values(cuentas[2]);
  infoLocal(userInfo);
  divPassword.style.display="flex"
  divLogIn.style.display="flex"
} 

  //--------------------- Guardar información del usuario en localStorage ----------
function infoLocal(arregloLocal){
  console.log("dentro de infolocal",arregloLocal)  
  // Convertir el arreglo en una cadena JSON antes de almacenarlo en localStorage
  localStorage.setItem("userInLocalStorage", JSON.stringify(arregloLocal));
  }
  

// check password
function checkPassword(){

  let password = passwordInput.value
if(userInfo[1]===password){
  console.log("inicio sesión")
  window.location.href = "./home.html";

} else {
  alert("Contraseña Incorrecta")
}
passwordInput.value=""
}

//--------------------------------------------- Scripts for Home ---------------------------------------------//
// userInfo= Object.values(cuentas[0]) // prueba

// Recuperar el arreglo almacenado en localStorage y convertirlo de nuevo a un arreglo JavaScript
const userInLocalStorage = JSON.parse(localStorage.getItem("userInLocalStorage"));
console.log("variable de local", userInLocalStorage)



let profileBank =document.getElementById("perfil")
let ingresar = document.getElementById("in")
let retirar=document.getElementById("out")
let btnIngresar = document.getElementById("ingresar")
let btnRetirar = document.getElementById("retirar-btn")
let btncerrar = document.getElementById("cerrar-btn")

let balance = 0






/*

function ingresarMonto(){
  let valorIn = ingresar.value
console.log("valor",valorIn)
 
balance=userInfo[3]+ingresar.value
console.log("balance",balance)
if(balance>990 ){
  alert("valor no valido.Su balance es mayor a $990 ingrese ", 990-balance, "menos.")
}
else {
  console.log(userInfo[2])
  userInfo[2]=balance 
  alert("Transacción exitosa")
}
}
*/

btnIngresar.addEventListener("click",function(event){
  //let variableLocal=userInLocalStorage[2]
  console.log()
  let valorIn = ingresar.value
  console.log(valorIn)
  valorIn =parseInt(valorIn)
  console.log(valorIn)
  balance=userInLocalStorage[2]+valorIn
  if (balance >500){
    alert( "El monto máximo en la cuenta debe ser de $$ con esta transacción usted supera el monto")
  }
  console.log(userInLocalStorage[2]+valorIn)
  console.log("balance", balance)
userInLocalStorage [2]=balance
console.log("nuevo user info [2]",userInLocalStorage[2])
localStorage.setItem("userInLocalStorage", JSON.stringify(userInLocalStorage));
ingresar.value=""
})


btnRetirar.addEventListener("click",function(event){
 
  let valorOut = retirar.value
  valorOut =parseInt(valorOut)
  balance=userInLocalStorage[2] - valorOut
  console.log(valorOut)
  if(balance <10 || valorOut<0 ){
    alert("valor no valido.Su balance es menor a $10 unicamente puede retirar $",20)
  }else {
userInLocalStorage [2]=balance
}
retirar.value=""
})

btncerrar.addEventListener("click",function(){
 
//localStorage.removeItem(userInLocalStorage)
window.location.href = "./index.html";


})


