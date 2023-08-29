const { suma, multiplicacion, obj, array, promise, suma2 } = require('./funciones')

//Hooks: 
// beforeAll(() => {
//     console.log('Before All')
// })

// beforeEach(() => {
//     console.log('Before Each')
// })

// afterAll(() => {
//     console.log('After All')
// })


afterEach(() => {
    console.log('After Each')
})

// Describe: recibe 2 parametros:
//1° string con nombre
// 2° callback con los its.

describe('Funciones' , () => {

//it: recibe 2 parametros: 
// 1° string descriptivo de lo que pide el test
// 2° callback con el testeo
    it('Debe retornar 10 si le pasamos 4 y 6', () => {
        expect(suma(4, 6)).toBe(10)

    }) 

    it('Debe retornar la multiplicacion de sus parametros', () => {
        expect(multiplicacion(4, 5)).toBe(20)
        expect(multiplicacion(3, 2)).toBe(6)
    })

})

describe('Objetos', () => {
    it('El objeto debe contener la propiedad name', () => {
        expect(obj()).toHaveProperty('name')
    })

    it('El objeto debe tener dos propiedades: name y modalidad', () => {
        const object = {name: '41b', modalidad: 'FT'}
        expect(obj()).toEqual(object)
    })
})

describe('Arrays', () => {
    it('Debe tener un string con el valor de Camila', () => {
        expect(array()).toContain('Camila')
    })
})

describe('Promesas', () => {
    it('La promesa debe resolverse correctamente', () => {
        return promise().then(
            (value) => expect(value).toBe('demo test promise')
        )
    })
})

describe('Mock functions', () => {
    it('Debe retornar 10 si es llamada con 4 y 6', () => {
        const result = (a, b) => {
            return a + b;
        }
        const prueba = jest.fn(() => result(4, 6))
        suma2(4, 6, prueba)
        expect(prueba.mock.calls.length).toBe(1)

    })
})


