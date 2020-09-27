const formularioRegistro = document.getElementById('formularioRegistro')

listadeUsuarios = [];

formularioRegistro.addEventListener('submit', (e)=> {
    e.preventDefault()

    const inputNombre = document.getElementById('name').value;
    const inputApellido = document.getElementById('lastName').value;
    let puntos = 0;

    const alertaNombre = document.getElementById('validName')
    const alertaApellido = document.getElementById('lastName')

    if(inputNombre == ''){
        alertaNombre.innerHTML = "Esta vacio rellene el campo"
    }

    if(inputApellido == ''){
        alertaApellido.innerHTML = "Esta vacia rellene apellido"
    }

    if(inputNombre != '' && inputApellido != ''){

        const usuario = {
            nombre: inputNombre,
            apellido: inputApellido,
            puntos: puntos,
        }
        alert("Se registró")

        guardarEnLocalStorage(usuario)
        
        const mensajeNombre = localStorage('usuarios')
        p = mensajeNombre.split(',')
        x = p[0].split(':')
        z = x[1]
        w = z.slice(1, -1)
    }





})

const guardarEnLocalStorage = (usuario)=>{
    if(localStorage.getItem('usuarios')==null){
        listaDeUsuarios.push(usuario)
        const usuarioString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuarioString)
    }else{
        listaEnStorage=JSON.parse(localStorage.getItem('usuarios'))
        listaEnStorage.push(usuario)
        const usuarioString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuarioString)
    }
}
