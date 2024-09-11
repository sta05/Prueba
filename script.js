const APIkey = "57cc9d54";
const url = `http://www.omdbapi.com/?apikey=${APIkey}`;


let titulo = document.getElementById("titulo");
let enviar = document.getElementById("enviar");
let info = document.getElementById("info");

// alert("Hola mundo");


enviar.onclick = async function()  {
	try {
		const response = await fetch(url+"&t=" + encodeURIComponent(titulo.value));
		const data = await response.json();
		if(data.Response === "True"){
			const director = data.Director;
			const año = data.Year;
			info.textContent = `Director: ${director} Año: ${año}`;
		}
	} catch (e) {
		info.textContent = "";
		console.error("Yo, error");
	}
}
