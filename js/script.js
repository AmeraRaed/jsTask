var allProducts = document.querySelectorAll(".images .myImg ")
var mytotalPrice = document.querySelector(".TotalPrice ")
var content = document.querySelector(".content")
var btn = document.querySelector(".addToCart")
var none = document.querySelector(".none")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";  
    }
})
btn.onclick = function (){
    none.style.display = "block";
    mytotalPrice.innerHTML=totalPrice;
    if(totalPrice == 5000){
        console.log("Very Goooood")
    }
    else{
        console.log("bad")
    }
}
