const objs=document.getElementsByTagName("div")


let num=[10,20,30,40,50]

for(o of objs){
    console.log(o.innerHTML='Curso')
}

for(o in objs){
    console.log(objs[o].innerHTML='curso')
}























// for(n of num){  //fala quais são os elementos em sua respectiva posição
//     console.log(n)
// }



// for(n in num){ //Fala a posição dos elementos
//     console.log(num[n]) //Com a merda dos colchetes, ele vai mostrar quais são os elementos em sua respectiva posição
// }


// for(let i=0; i < num.length; i++){
//     console.log(num[i])
// }