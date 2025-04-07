const objs1=document.getElementsByTagName('div')
const objs2=[...document.getElementsByTagName('div')]

objs2.forEach(element => {
    element.innerHTML="curso"
});


console.log(objs1)
console.log(objs2)






// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3

// }

// let valores=[1,5,4]
// console.log(soma(...valores))

// let jogador1={nome:'Bruce',energia:100,vidas:3,magia:150}
// let jogador2={nome:'Bruno',energia:100,vidas:5,velocidade:80}
// let jogador3={...jogador1,...jogador2}


// // console.log('n1: ' + n1)
// // console.log('n2: ' + n2)
// console.log('n3: ' + n3)
// console.log('Tipo de n3: ' + typeof(n3))