let input = document.querySelector("input")
let button = document.querySelector("button")
let resultado = document.querySelector("#response")

button.addEventListener("click", event => {
    event.preventDefault();

    let codigo = input.value;
    
    if(codigo == "1021CDTEIWI01BRED0821FT"){
        resultado.innerHTML = "<p> Testing I </p>"
        resultado.classList.add("response") 
    }else if(codigo == "021CDTWCWI01BRED0821FT") {
        resultado.innerHTML = "<p> Teamwork & Collaboration </p>"
        resultado.classList.add("response") 
    }else if(codigo == "1021CDPOOWI01BRED0821FT") {
        resultado.innerHTML = "<p> Programação Orientada à Objetos </p>"
        resultado.classList.add("response") 
    }else if(codigo == "1021CDINFWI01BRED0821FT") {
        resultado.innerHTML = "<p> Infraestrutura </p>"
        resultado.classList.add("response") 
    }else if(codigo == "1021CDFEIIWI01BRED0821FT") {
        resultado.innerHTML = "<p> Front End II </p>"
        resultado.classList.add("response") 
    }else if(codigo == "1021CDDTWI01BRED0821FT") {
        resultado.innerHTML = "<p> Design Thinking </p>"
        resultado.classList.add("response") 
    }

    if(codigo.length > 0){
        alert("Código invalido!")   
    }else{
        alert("Preencha o campo!")
    }

      
})


