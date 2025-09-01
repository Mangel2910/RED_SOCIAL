# README
5). ¿Cómo se definen clases y objetos en TS?

-clases = En TypeScript, las clases se definen utilizando la palabra "class" seguida de ella el nombre de la clase, las clases son aquellas que definen la estructura mediante variables y el comportamiento mediante funciones que pueden asignarles tipos específicos gracias al sistema de tipos de TypeScript

--class ejemplo

class Producto {
  nombre: string;
  precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const nuevoProducto = new Producto("Camisa", 50);

-objetos = Los objetos en TypeScript se definen por la especificación de la estructura, donde cada clave tiene un tipo de dato asociado, este se logra utilizando "type" o algunas otras interfaces que definen sus propiedades 

--type ejemplo

type Persona = {
  nombre: string;
  edad: number;
  activo?: boolean; // La propiedad es opcional
};

--interfaces ejemplo 

interface Coche {
  marca: string;
  modelo: string;
  año: number;
}

6). ¿Qué son los constructores y para qué sirven?

- un constructor en TypeScript es un método dentro de una clase que se ejecuta al crear un objeto de esa clase utilizando la palabra "new", su función principal es analizar los valores de los objetos, asegurándose que tenga un estado valido desde un principio, ellos permiten definir valores inciales de un objeto o configurar tareas necesarias 
  sirve para iniciar algunas propiedades de la clase al momento de crear el objeto
  establece un estado inicial definiendo un objeto preparándolo para su uso
  los constructores aceptan parámetros permitiendo que cada objeto se cree con valores diferentes depende su uso 

--ejemplo 

class Persona {
  nombre: string;
  edad: number;

  // Este es el constructor de la clase Persona
  constructor(nombre: string, edad: number) {
    this.nombre = nombre; // Asigna el valor del parámetro 'nombre' a la propiedad 'nombre' del objeto
    this.edad = edad;     // Asigna el valor del parámetro 'edad' a la propiedad 'edad' del objeto
  }
}

// Se crea una instancia de la clase Persona, llamando al constructor
const miPersona = new Persona("Ana", 30);

console.log(miPersona.nombre); // Salida: Ana
console.log(miPersona.edad);   // Salida: 30
  



7). ¿Qué es la herencia en TS y cómo se implementa (extends / super)?

-la Herencia en TypeScript es un mecanismo de programación orientada a objetos que permite a una clase o subclase heredar propiedades de otras clases, superclases o clases bases, se utiliza la palabra "extends" para definir la relación de herencia, y "super()" para llamar al constructor de la superclase.
la herencia permite crear nuevas clases hijas que ya tienen la funcionalidad de una clase padre existente 
facilita la creación de estrucutras donde las clases mas especificas tienen características de las mas generales
- se implementa con la Palabra clave extends que Se utiliza para que una nueva clase herede de otra clase existente. como: 

        class Animal {
          nombre: string;
          constructor(nombre: string) {
            this.nombre = nombre;
          }
          saludar() {
            console.log(`¡Hola! Soy un animal, me llamo ${this.nombre}`);
          }
        }

        class Perro extends Animal { // Perro hereda de Animal
          constructor(nombre: string) {
            super(nombre); // Llama al constructor de la clase padre
          }
          ladrar() {
            console.log("¡Guau!");
          }
        }


8). Qué significa polimorfismo en el contexto de TS?

el polimorfismo es un concepto orientado a objetos que permiten tratar objetos de diferentes clases como si fueran de una misma base o interfaz lo que logra que el código sea mas flexible. esto logra que diferentes clases implementen el mismo método de maneras diferentes, de forma que un mismo "mensaje" o llamada a un método puede producir resultados distintos dependiendo del objeto. este puede ser apicado en interfaces, herencias y sobrecarga de funciones 






9. ¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?
- Las clases abstractas no pueden ser instanciadas directamente, por lo cual no se podrian crear objetos dentro de ella, estas asi mismo pueden contener metodos abstractos, y metodos concretos, nos ayuda como un molde o guia para otras clases, definiendo una estructura y un comportamiento, para poder instanciar un clase abstracta se debe hacer una clase derivada para hacer su uso.
- Las clases normales pueden ser instanciadas y solo puede contener metodos concretos, aqui si puedes crear una clse hija, creare objetos sin ploblema alguno, al usar los metodos deben ser con una implementacion, que eso es un cuerpo que lo defina segun su funcionamiento, esto nos ayuda a una entidad mas cmpleta con todas las proiedades y comportamientos definidos.


10. ¿Qué es una interfaz en TS y en qué se diferencia de una clase abstracta?
  - Es una declaracion para los objetos, definiendo como tal lo que son propiedades y metodos que la clase debe tener, sin que se proporcione ninguna implementacion de esos miembros, tambien podemos crear una extencion de ella misma como las clases derivadas, mientras que la clase abstracta crea objetos, esta ayuda a efinir el contenido de esos objetos.


11. Ejemplo mínimo de cada pilar de POO en TS (una línea de código por concepto)
  - Encapsulamiento: class Persona { private nombre: string; constructor(nombre: string) { this.nombre = nombre; } }.
  - Abstraccion: abstract class Animal { abstract hacerSonido(): void; }.
  - Herencia: class Perro extends Animal { hacerSonido() { console.log("Guau"); } }.
  - Polimorfismo: const animal: Animal = new Perro(); animal.hacerSonido();.

