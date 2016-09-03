
var contenido = document.getElementById("contenido");
for(i in personas){
	var tr = document.createElement("tr");
	var tdNombre = document.createElement("td");
	var tdApellido = document.createElement("td");
	var tdEdad= document.createElement("td");
	var tdTelefono = document.createElement("td");
	var tdMail = document.createElement("td");
	tr.appendChild(tdNombre);
	tr.appendChild(tdApellido);
	tr.appendChild(tdEdad);
	tr.appendChild(tdTelefono);
	tr.appendChild(tdMail);
	tdNombre.textContent = personas[i].nombre;
	tdApellido.textContent = personas[i].apellido;
	tdEdad.textContent = personas[i].edad;
	tdTelefono.textContent = personas[i].telefono;
	tdMail.textContent = personas[i].correo;
	contenido.appendChild(tr);
}