const vajilla =[
    {id :1,
        nombre:"platos:",
        tipo:["hondo","playo","de postre.",],
        uso:"Tiene usos varios.",} ,
    
        
    {
        id:2,
        nombre:"cubiertos:",
        tipo:["tenedor","cuchillo","cuchara","cucharita.",
        ],
        uso:"Utilizado para manipular y tomar los alimentos."
    },
    {
        id :3,
        nombre:" vasos:",
        tipo:[
            " para vino"," para agua"," para gaseosas.",
        ],
        uso: " Utilizado para beber.",
    }
]
const enteros = [56,88,-7,23,44,12,-36,64]
const enteros1 = [1,2,3,4,,5,6]
/*length
console.log(vajilla.length)*/
/*buscar índice*/
console.log(enteros.length)
console.log(enteros.indexOf(44))
/*Convertir a String*/
const str = enteros.toString()
console.log(str)
/*Concatenar*/
const newArr = enteros.concat(enteros1)
console.log(newArr)
/*agregar elemento al final*/
const agregaFinal = enteros1.push(19,27)
console.log(agregaFinal)
console.log(enteros1)
/*agregar elemento al principio*/
enteros1.unshift(55,76)
console.log(enteros1)
/*eliminar primer/último elemento*/
enteros1.shift()
console.log(enteros1)
enteros1.pop()
console.log(enteros1)
/*convertir elementos de un array en una cadena de texto y unirlos mediante un separador específico*/
let cadenaEnteros = enteros.join("/")
console.log(cadenaEnteros)
/*Métodos con Callbacks*/
/*forEach*/
enteros.forEach(entero =>{
    console.log(entero)
})
/*map*/
const triple =enteros.map(entero =>{
    return entero*3
})
console.log(triple)
/* a diferencia del forEach, que no devuelve valor, el map devuelve un nuevo array con la operación solicitada*/

/*Filter*/
/*crea un nuevo array a partir de uno existente cumpliendo una determinada condición*/
const multTres = enteros.filter((multiplo3) =>{
    return multiplo3%3==0
})
console.log(multTres)
/*Find*/
/*Every con flecha simplificada. Devuelve True o false*/
const todosPosit = enteros.every(mayorQueCero => mayorQueCero>0)
console.log( todosPosit)
/*sort:ordena un array en la forma indicada*/
enteros.sort((a,b)=>{
    return b - a;
}
)
console.log( enteros)

/* forEach anidados*/
vajilla.forEach(function(elemento)
{
    console.log("Elemento", `${elemento.id}`,`:`,`${elemento.nombre}`,`${elemento.tipo}`,`${elemento.uso}`)})