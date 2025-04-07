let n=0
let max=1000
let pares=0

for(let i=n;i<max;i++){
    if(i%2==0){
        continue
    }
    pares++
}

console.log('Quantidade de pares - ' + pares)
console.log('Fim do programa')




/*
let n=0
let max=1000

while(n<max){
    console.log('Quero jogar - ' + n)
    if(n>10){
        break
    }
    n++
}ELe termina o loop e vai pra proxima execução fora do loop
console.log('Fim do programa')
*/