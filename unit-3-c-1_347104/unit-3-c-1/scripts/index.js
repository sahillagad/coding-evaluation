//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",addproductfun)
document.querySelector("#show_products").addEventListener("click",showproductfun)




function addproductfun(){
event.preventDefault()
  
var productarr=JSON.parse(localStorage.getItem("products"))||[]

var object={

type:document.getElementById("type").value,
desc:document.getElementById("desc").value,
price:document.getElementById("price").value,
image:document.getElementById("image").value

}

productarr.push(object)
localStorage.setItem("products",JSON.stringify(productarr))



type:document.getElementById("type").value=""
desc:document.getElementById("desc").value=""
price:document.getElementById("price").value=""
image:document.getElementById("image").value=""


}

function showproductfun(){

window.location.href="inventory.html"
}