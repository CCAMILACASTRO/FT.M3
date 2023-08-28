
//EJEMPLO FUNCION GENERADORA:

function* generatorShowInstructors () {
    console.log('Iniciando')
    yield 'Cami';
    yield 'Javi';
    // console.log('Terminando')
    return 'Terminando'
}

const generatorObject = generatorShowInstructors()

console.log(generatorObject)
console.log(generatorObject.next()) 
//El done esta en false porque la ejecucion quedo pausada y no termino de ejecutarse
console.log(generatorObject.next()) 
console.log(generatorObject.next()) 


// EJEMPLO CON WHILE
function* naturalNumbers() {
    let number = 1;
    while(true){
        yield number;
        number += 1
    }
}

const generatorObject2 = naturalNumbers()
console.log(generatorObject2.next())
console.log(generatorObject2.next())