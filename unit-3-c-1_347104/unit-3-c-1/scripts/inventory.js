document.querySelector("#add_more_product").addEventListener("click",addfun)

var productarr=JSON.parse(localStorage.getItem("products"))||[]
console.log(productarr)







displaydata(productarr)

function displaydata(productarr){

productarr.forEach(function(ele,ind){
  

var divtag=document.createElement("div")
document.querySelector("#all_products").append(divtag)

var imgtag=document.createElement("img")
imgtag.setAttribute("src",ele.image)
divtag.append(imgtag)

var ptag=document.createElement("p")
ptag.innerText=ele.type
divtag.append(ptag)


var ptag1=document.createElement("p")
ptag1.innerText=ele.desc
divtag.append(ptag1)


var ptag2=document.createElement("p")
ptag2.innerText= "₹"+" "+ele.price
divtag.append(ptag2)

var inputtag=document.createElement("input")
inputtag.setAttribute("type","submit")
inputtag.setAttribute("value","Remove")
inputtag.setAttribute("id","remove_product")
inputtag.addEventListener("click",function(){

  deletefun(ele,ind)
})
divtag.append(inputtag)

});




}


function deletefun(ele,ind){

productarr.splice(ind,1)
localStorage.setItem("products",JSON.stringify(productarr)) 
window.location.reload()  
}



function addfun(){

window.location.href="index.html"


}