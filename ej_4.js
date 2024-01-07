function borrarCeros(numArr){
    return numArr.filter(elemento => elemento !== 0);
}

console.log(borrarCeros([0, 1, 0, 2, 0, 3]));
console.log(borrarCeros ([9, 3, 6, 4]));
console.log(borrarCeros ([0, 0, 0]));