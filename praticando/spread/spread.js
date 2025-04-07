let convidadosantigos = ['Ana','Carlos', 'Mariana']
let convidadosnovos = [...convidadosantigos, 'José']

let convidadosatutalizados = convidadosnovos.map(nome => nome === 'Carlos' ? 'Roberto' : nome)
// O map irá percorer todos os elementos que precisa ser alterados
console.log(convidadosatutalizados)