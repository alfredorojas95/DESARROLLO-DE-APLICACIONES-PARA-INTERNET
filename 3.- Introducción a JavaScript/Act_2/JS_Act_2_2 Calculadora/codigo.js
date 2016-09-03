//	Obtenemos	el	button	y	lo	almacenamos	en	una	variable	llamada	"btn"
var btn	= document.getElementById("btn_suma");
var btn	= document.getElementById("btn_resta");
var btn	= document.getElementById("btn_multiplicacion");
var btn	= document.getElementById("btn_division");
/*	Obtenemos	el	div	que	muestra	el	resultado	y	lo
almacenamos	en	una	variable	llamada	"resultado"	*/
var resultado	= document.getElementById("resultado")
/*	Obtenemos	los	dos	input	y	los	almacenamos	en	
variables	"inputUno"	y	"inputDos"	*/
var inputUno	= document.getElementById("input-uno");
var inputDos	= document.getElementById("input-dos");
//	Añadimos	el	evento	click	a	la	variable	"btn"
btn_suma.addEventListener("click",function(){
var n1	= inputUno.value;
var n2	= inputDos.value;
resultado.innerHTML = suma(n1,n2);
});

btn_resta.addEventListener("click",function(){
var n1	= inputUno.value;
var n2	= inputDos.value;
resultado.innerHTML = resta(n1,n2);
});

btn_multiplicacion.addEventListener("click",function(){
var n1	= inputUno.value;
var n2	= inputDos.value;
resultado.innerHTML = multiplicacion(n1,n2);
});

btn_division.addEventListener("click",function(){
var n1	= inputUno.value;
var n2	= inputDos.value;
resultado.innerHTML = division(n1,n2);

});
/*	Función	que	retorna	la	suma	de	dos	números	*/
function suma(n1, n2){
	//	Es	necesario	aplicar	parseInt	a	cada	número
	if((validarNum(n1))&&(validarNum(n2))){
		var num1 = parseInt(n1);
		var num2 = parseInt(n2);
		resultado.style.color="black";
		return (num1+num2);
	} else {
		resultado.style.color="red";
		return "Debe ingresa solo números enteros"
	}
	
}

function resta(n1, n2){
	if((validarNum(n1))&&(validarNum(n2))){
		var num1 = parseInt(n1);
		var num2 = parseInt(n2);
		resultado.style.color="black";
		return (num1-num2);
	} else {
		resultado.style.color="red";
		return "Debe ingresa solo números enteros";
	}
}

function multiplicacion(n1, n2){
	if((validarNum(n1))&&(validarNum(n2))){
		var num1 = parseInt(n1);
		var num2 = parseInt(n2);
		resultado.style.color="black";
		return (num1*num2);
	} else {
		resultado.style.color="red";
		return "Debe ingresa solo números enteros"
	}
}

function division(n1, n2){
	if((validarNum(n1))&&(validarNum(n2))){
		var num1 = parseInt(n1);
		var num2 = parseInt(n2);
		if(num2 !== 0){
			return (num1/num2);
		} else {
			resultado.style.color="red";
			return "El segundo número debe ser distinto de 0";
		}
		
	} else {
		resultado.style.color="red";
		return "Debe ingresa solo números enteros"
	}
}

function validarNum(n1){	//	verificar número entero o decimal
	if(n1%1 == 0){
		return true;
	} else {
		return false;
	}
}