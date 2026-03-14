function filtrar(categoria){

let produtos = document.querySelectorAll(".produto")

produtos.forEach(produto =>{

if(categoria === "todos"){

produto.style.display = "block"

}

else{

if(produto.classList.contains(categoria)){

produto.style.display = "block"

}

else{

produto.style.display = "none"

}

}

})

}

document.getElementById("buscar").addEventListener("keyup", function(){

let texto = this.value.toLowerCase()

let produtos = document.querySelectorAll(".produto")

produtos.forEach(produto =>{

let nome = produto.innerText.toLowerCase()

produto.style.display = nome.includes(texto) ? "block" : "none"

})

})