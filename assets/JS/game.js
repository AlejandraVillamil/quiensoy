let nombres = ["Alejandra Villamil", "Andres Cardona", "Carlos Alvarez", "Alejandro Fandiño"]
let input = document.getElementById("respuestaInput").value
let points = 0 
let text = ["blah blah blah blah blah blahblah blah blahblah blah blah", "bleeeeee bleeeeee bleeeeee bleeeeee bleeeeee bleeeeee", "bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiiibliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii bliiiiiiiiii"]
let pista = document.getElementById("obtenerPista")
pista.addEventListener('click', ()=>{
    console.log("click en pista")
    document.getElementById("pista").classList.remove("d-none")
    document.getElementById("pista").innerHTML = text[2]
})

for ( i = 0 ; i<4; i++){
    console.log(nombres[i])
}
function matchRespuesta(){
   let n = nombres.includes(input)
    if(n === true){
        
        swal("Bien", "Atinaste", "success")
        points++
        console.log(`Tiene ${points} puntos`)
        switch(input){
            case "Alejandra Villamil":
                document.getElementById('answer'+0).innerText = input
                break;
            case "Andres Cardona":
                document.getElementById('answer' + 1).innerText = input
                break;
            case "Carlos Alvarez":
                document.getElementById('answer' + 2).innerText = input
                break;
            case "Alejandro Fandiño":
                document.getElementById('answer' + 3).innerText = input
                break;
        }
    } else{
        points--
        console.log(`Tiene ${points} puntos`)
        swal("Error!", "Sigue intentando", "error")
    }
    localStorage.setItem('points', points)
}
let respuesta = document.getElementById("respuestaBtn")
respuesta.addEventListener('click', ()=>{
    input = document.getElementById("respuestaInput").value
    if (input.length!= 0){
        document.getElementById("respuestaInput").value = ""
        console.log(`EL input de respuesta es "${input}"`)
        matchRespuesta()
        document.getElementById("pista").classList.add("d-none")
    } else {
        swal("Error!", "El input está vacío", "error");
    }
    
})

