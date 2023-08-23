const catalogo = document.querySelector("#catalogue-container");

var api = "https://pokeapi.co/api/v2/pokemon/";


for(var x = 1; x<=300;x++){
	fetch(api+x)
	.then((response) => response.json())
	.then(data => agregarPokemon(data))
}



function agregarPokemon(info){

	var tipos = info.types;
	var texto ="";
	
	for(var y =0; y<tipos.length;y++ ){
		
		var tipo = (tipos[y].type.name);
		
		 texto=texto+`<div class=type id=tipo-${tipo}>${tipo}</div>`;
	}

	const box = document.createElement("div");
	box.classList.add("box");
	box.innerHTML = `<img class=catalogue-img src=${info.sprites.other["official-artwork"].front_default} onclick=pokeformation(${info.id})>
			<div class=text-box>
				<span class=pokeId>${info.id}</span>
				<span class=pokeName>${info.name}</span>
				${texto}
		</div>`


	catalogo.append(box);
}

function pokeformation(id){
var api = "https://pokeapi.co/api/v2/pokemon/";

	fetch(api+id)
	.then((response) => response.json())
	.then(data => llenarInfo(data))


}


function llenarInfo(data){

	document.getElementById("pokeTitle").innerHTML = data.name;

		var tipos = data.types;
	var texto ="";
	
	for(var y =0; y<tipos.length;y++ ){
		
		var tipo = (tipos[y].type.name);
		
		 texto=texto+`<div class=type id=tipo-${tipo}>${tipo}</div>`;
	}
	document.getElementById("leftSection").innerHTML = `<img class=catalogue-img src=${data.sprites.other["official-artwork"].front_default} onclick=pokeformation(${data.id})>`
	document.getElementById("types").innerHTML = texto;
	var cuadro = document.getElementById("information-box");

		cuadro.classList.remove("information-box-hidden");
		cuadro.classList.toggle("pokeinformation");
}

function esconder(){

	var cuadro = document.getElementById("information-box");
	cuadro.classList.remove("pokeinformation");
	cuadro.classList.toggle("information-box-hidden");

}


function busqueda(){

	buscar = busquedaValor = document.getElementById("search").value

	var api = "https://pokeapi.co/api/v2/pokemon/";
	try	{
	fetch(api+buscar.toLowerCase())
	.then((response) => response.json())
	.then(data => mostrar(data));
	} 
	 catch(error){

		alert("No encontramos ese pokemon");
	}
}

function mostrar(info){
var tipos = info.types;
	var texto ="";
	
	for(var y =0; y<tipos.length;y++ ){
		
		var tipo = (tipos[y].type.name);
		
		 texto=texto+`<div class=type id=tipo-${tipo}>${tipo}</div>`;
	}

	const box = document.createElement("div");
	box.classList.add("box");
	box.innerHTML = `<img class=catalogue-img src=${info.sprites.other["official-artwork"].front_default} onclick=pokeformation(${info.id})>
			<div class=text-box>
				<span class=pokeId>${info.id}</span>
				<span class=pokeName>${info.name}</span>
				${texto}
		</div>`


	catalogo.innerHTML =box.innerHTML;
	
}