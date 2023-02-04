const things = document.getElementById("things");
const count = document.getElementById("count");
const info = document.getElementById("info");
const total = document.getElementById("total");
const submit = document.getElementById("submit");
const result = document.getElementById("result");



let price = 0;
let countProduct = 0;
let selectedProductIndex = -1;

things.addEventListener("click", (e) => {
    switch(e.target.value){
        case "telefon": {price = 500; selectedProductIndex = 0;
       };
    break;
        case "kompyuter": {price = 1500; selectedProductIndex = 1;}
        break;
        case "televizor": {price = 1200; selectedProductIndex = 2;}
        break;
        case "paltaryuyan":{ price = 800; selectedProductIndex = 3;}
        break;
        case "soyuducu": {price = 1000; selectedProductIndex = 4;}
        break;
        default: {price = 0; selectedProductIndex = -1;}
    }

for(let i = 0; i < things.children.length; i++){
    if(things.children[i].style.backgroundColor == "green"){
      things.children[i].style.backgroundColor = "black"; 

        
    }
    count.children[1].innerHTML = 0;
    e.target.style.backgroundColor = "green";

    
}

if(Number(info.children[1].children[selectedProductIndex].children[0].innerHTML) > 0){
    count.children[1].innerHTML = info.children[1].children[selectedProductIndex].children[0].innerHTML;
    
}


countProduct = Number(count.children[1].innerHTML)
    
})





count.addEventListener("click", (e) => {

    if(e.target == count.children[2]){
        countProduct++
        info.children[1].children[selectedProductIndex].children[0].innerHTML = countProduct
        info.children[1].children[selectedProductIndex].children[1].innerHTML = price * countProduct;

        let t =0;
        for(let i = 0; i<info.children[1].children.length; i++){
            t += Number(info.children[1].children[i].children[1].innerHTML)
            
        }
        total.children[1].innerHTML = t;
          
            
       
        
    }
    if(e.target == count.children[0]){
       if(countProduct > 0){
        countProduct--
        info.children[1].children[selectedProductIndex].children[0].innerHTML = countProduct
        info.children[1].children[selectedProductIndex].children[1].innerHTML = price * countProduct;
        let t =0;
for(let i = 0; i<info.children[1].children.length; i++){
    t += Number(info.children[1].children[i].children[1].innerHTML)
    
}
total.children[1].innerHTML = t;
  
    
       }
    }
    if((e.target != count.children[1]) && ((Number(info.children[1].children[selectedProductIndex].children[0].innerHTML) > 0)  )){
        info.children[1].children[selectedProductIndex].style.display = "block"
     }
    count.children[1].innerHTML = countProduct;
  
   



})

document.addEventListener("click", ()=>{
    if(Number(total.children[1].innerHTML) > 0){
        submit.style.display = "block"
        result.style.display = "none"
    }else{
        submit.style.display = "none"
    }

    for(let i = 0; i<info.children[1].children.length; i++){
        if((info.children[1].children[i].children[0].innerHTML == "") || info.children[1].children[i].children[0].innerHTML == 0){
            info.children[1].children[i].style.display = "none"
          }  
    }
})



const productList = [];

class Product {
    constructor(name, price, total){
        this.name = name;
        this.price = price;
        this.total = total;
    }
}


submit.addEventListener("click", ()=>{
    result.innerHTML  = `    <tr>
    <th>Mehsul</th>
    <th>Say</th>
    <th>Mebleg</th>
</tr>`
    for(let i = 0; i < 5; i++){

        if(Number(info.children[1].children[i].children[0].innerHTML) > 0){
            const product = new Product(things.children[i].value, Number(info.children[1].children[i].children[0].innerHTML), Number(info.children[1].children[i].children[1].innerHTML));
            productList.push(product);
            result.innerHTML += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.total}</td></tr>`
            info.children[1].children[i].children[0].innerHTML = 0;
            info.children[1].children[i].children[1].innerHTML = 0;

        }
      
    }

    result.innerHTML +=`Cemi:  ${ total.children[1].innerHTML} Manat`
    
   
    total.children[1].innerHTML = 0;
    count.children[1].innerHTML = 0
    result.style.display = "block"
    console.log(productList)

})