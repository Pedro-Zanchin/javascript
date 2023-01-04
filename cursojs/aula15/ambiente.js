let num = [5, 8, 9, 2, 3]
num[5] = 6
num.push(7) // Adiciona número na última posição do vetor
num.sort() // Organiza em ordem crescente

console.log(`Nosso vetor tem ${num.length} posições e é o ${num}`)

let pos = num.indexOf(1)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}