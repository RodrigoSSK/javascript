
let num = [5, 8, 2, 9, 3]
num[4] = 1
num.push(6)
num.sort()

num.length


console.log(`Nosso vetor é o ${num} e ele tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]} e o último é o ${num[5]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}



