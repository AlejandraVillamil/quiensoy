//creación de variables
let nombres = ["Alejandra Villamil", "Andres Cardona", "Carlos Alvarez", "Alejandro Fandiño"]
let respondidos = []
let input = document.getElementById("respuestaInput").value
let points = 0 
let textPista = {
    alejandra: "Soy Ingeniera de diseño y automatización electrónica, trabajo como ingeniera de soporte  y soy una  apasionada por la pastelería",
    andres: "Soy administrador de empresas y consultor para la gestión de crisis empresariales.  Me encanta cocinar y tocar guitarra",
    carlos: "Le gusta programar,  ama el css y ademas fue asesorado por el pony de los 7 colores.",
    alejandroF: "Soy una persona emprendedora, que adora los retos y no se rinde fácilmente. Matemático de profesión, detallista y autodidacta cada día, no dejo de aprender. Estoy interesado en las nuevas tecnologías y en las aplicaciones matemáticas en las distintas areas del conocimiento humano."
}
let random = 0
let body = document.getElementsByTagName("body")
let posicion = 0



 //esta variable es solo para el random que obtiene la pista 
 //sobre el tecto. cada una de las posiciones del array 
 //corresponde con una key del array textPista



const saveInStorage = () => {
    const dataString = JSON.stringify(textPista)
        localStorage.setItem('reminingNames', dataString)

    

}
const savePoints = ()=>{
    const pointsString = JSON.stringify(points)
    localStorage.setItem('points', pointsString)
}
function onloadProcess(){
    if (localStorage.getItem('reminingNames') == null) {
        console.log("start")
    } else {
        textPista = JSON.parse(localStorage.getItem("reminingNames"))
        points = JSON.parse(localStorage.getItem('points'))
    }

}
body.onload = onloadProcess()

let pista = document.getElementById("obtenerPista")
pista.addEventListener('click', ()=>{
    saveInStorage(textPista)
    console.log("click en pista")
    document.getElementById("pista").classList.remove("d-none")
    document.getElementById("pista").innerHTML = textPista[0]
})

for ( i = 0 ; i<4; i++){
    console.log(nombres[i])
}
function matchRespuesta(){
   let n = nombres.includes(input)
    if(n === true){
        
        swal("Bien", "Atinaste", "success")
        points += 1
        savePoints()
        console.log(`Tiene ${points} puntos`)
        switch(input){
            case "Alejandra Villamil":
                posicion = 0
                document.getElementById('answer'+posicion).innerText = input
                personas.splice(0,1)
                console.log(personas)
                delete textPista.alejandra
                
                
                break;
            case "Andres Cardona":
                posicion = 1
                document.getElementById('answer' + posicion).innerText = input
                personas.splice(1, 1)
                borrarPistasInutiles("andres")
                console.log(personas)
                delete textPista.andres
                
                
                break;
            case "Carlos Alvarez":
                posicion = 2
                document.getElementById('answer' + posicion).innerText = input
                personas.splice(2, 1)
                borrarPistasInutiles("carlos")
                console.log(personas)
                delete textPista.carlos
                
                break;
            case "Alejandro Fandiño":
                posicion = 3
                document.getElementById('answer' + posicion).innerText = input
                personas.splice()
                borrarPistasInutiles("alejandroF")
                console.log(personas)
                delete textPista.alejandroF
                
                break;
        }
        filledInfo = {
            nombre: input,
            posicion: posicion
        }
        saveInStorage()
        saveInStorageFilledData(filledInfo)
        
    } else{
        points -=1
        savePoints()
        console.log(`Tiene ${points} puntos`)
        swal("Error!", "Sigue intentando", "error")
        
    }
    
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
const saveInStorageFilledData = (filledInfo) => {
    if (localStorage.getItem('nombres') == null) {
        respondidos.push(filledInfo)
        const nombresString = JSON.stringify(respondidos)
        localStorage.setItem('nombres', nombresString)
    } else {
        listInStorage = JSON.parse(localStorage.getItem("nombres"))
        listInStorage.push(filledInfo)
        const nombresString = JSON.stringify(listInStorage)
        localStorage.setItem('nombres', nombresString)
    }
}
const answersStored = () => {
    const namesInStorage = JSON.parse(localStorage.getItem('nombres'))
    
    for (let i = 0; i < namesInStorage.length; i += 1) {
        document.getElementById('answer' + namesInStorage[i].posicion).innerText = namesInStorage[i].nombre
        
    }
}
answersStored()



