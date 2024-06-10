class HashTable { // Hash Table es una estrucutra de datos que permite almacenar un valor con una clave especifica.
    constructor (size) {
        this.buckets = new Array (size);
        this.numBuckets = this.buckets.length;
    }

    hash (key) { // Este método calcula el indice de una clave dentro de una tabla
        let total = 0; 
        for (let i = 0; i < key.length; i++) { // recorremos la longitud  de la clave y le añadimos cada elemento al final.
            total += key.charCodeAt (i);
        }      

    return total % this.numBuckets; // Devolvemos el resultado módulo del total entre el numero de Buckets.
    }

    insert (key, value) {  // Añade un nuevo valor en la tabla
        const index = this.hash(key);
        if (!this.buckets [index] ) this.buckets [index] = [];

        this.buckets [index].push([key,value]);
    }

    get (key) { // Recupera el valor asociado con una clave.
        const index = this.hash (key);
        if (!this.buckets [index]) return null;
        for (let i = 0; i < this.buckets [index].length; i++) {
            if (this.buckets [index] [i] [0] === key ) {
                return this.buckets [index] [i] [1]; 
            }
        }
    }
}

const hashTable = new HashTable();


hashTable.insert ("Agustin" , { // Creo una instancia para comprobar que funcione.
    name: "Agustin",
    age: 20,
    email: "agustin540@gmail.com"
});

console.log (hashTable.get ("Agustin"));
 

