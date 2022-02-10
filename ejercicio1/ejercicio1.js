const cambiarColorRojo = () => {
    var cuadradoUno = document.getElementById("body")
    if (cuadradoUno.style.backgroundColor === "" || cuadradoUno.style.backgroundColor === "blue" || cuadradoUno.style.backgroundColor === "green"){
        cuadradoUno.style.backgroundColor = "red"
    } else if (cuadradoUno.style.backgroundColor == "red"){
        cuadradoUno.style.backgroundColor = ""
    }
}
const cambiarColorVerde = () => {
    var cuadradoUno = document.getElementById("body")
    if (cuadradoUno.style.backgroundColor === "" || cuadradoUno.style.backgroundColor === "red" || cuadradoUno.style.backgroundColor === "blue"){
        cuadradoUno.style.backgroundColor = "green"
    } else if (cuadradoUno.style.backgroundColor == "green"){
        cuadradoUno.style.backgroundColor = ""
    }
}
const cambiarColorAzul = () => {
    var cuadradoUno = document.getElementById("body")
    if (cuadradoUno.style.backgroundColor === "" || cuadradoUno.style.backgroundColor === "red" || cuadradoUno.style.backgroundColor === "green"){
        cuadradoUno.style.backgroundColor = "blue"
    } else if (cuadradoUno.style.backgroundColor == "blue"){
        cuadradoUno.style.backgroundColor = ""
    }
}