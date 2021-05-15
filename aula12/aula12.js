const idade = 14
if (idade < 16){
    console.log('Não vota')
}else {if(idade < 18 || idade > 65){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}
}
const agora = new Date()
const hora = agora.getHours
if (hora < 12){
    console.log('Bom dia')
}else if(hora < 18){
    console.log('Boa noite')
}

//Condição multipla = Serve pra valores fixos. Tem a possibilidade além de 'sim' e 'não'


const sexo = 'Homem'
switch(sexo){
    case 'Homem': 
        console.log("Você é o sexo mais forte")
        break
    case 'Mulher':
        console.log("Você é o sexo mais inteligente")
        break
}

const novo = new Date()
const dia = novo.getDay()
switch(dia){
    case 0:
        console.log("Domingo")
        break
    case 1: 
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
}