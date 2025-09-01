# README

9. ¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?
- Las clases abstractas no pueden ser instanciadas directamente, por lo cual no se podrian crear objetos dentro de ella, estas asi mismo pueden contener metodos abstractos, y metodos concretos, nos ayuda como un molde o guia para otras clases, definiendo una estructura y un comportamiento, para poder instanciar un clase abstracta se debe hacer una clase derivada para hacer su uso.
- Las clases normales pueden ser instanciadas y solo puede contener metodos concretos, aqui si puedes crear una clse hija, creare objetos sin ploblema alguno, al usar los metodos deben ser con una implementacion, que eso es un cuerpo que lo defina segun su funcionamiento, esto nos ayuda a una entidad mas cmpleta con todas las proiedades y comportamientos definidos.


10. ¿Qué es una interfaz en TS y en qué se diferencia de una clase abstracta?
  - Es una declaracion para los objetos, definiendo como tal lo que son propiedades y metodos que la clase debe tener, sin que se proporcione ninguna implementacion de esos miembros, tambien podemos crear una extencion de ella misma como las clases derivadas, mientras que la clase abstracta crea objetos, esta ayuda a efinir el contenido de esos objetos.


11. Ejemplo mínimo de cada pilar de POO en TS (una línea de código por concepto).
  -Encapsulamiento: class Persona { private nombre: string; constructor(nombre: string) { this.nombre = nombre; } }
  -Abstraccion: abstract class Animal { abstract hacerSonido(): void; }
  -Herencia: class Perro extends Animal { hacerSonido() { console.log("Guau"); } }
  -Polimorfismo: const animal: Animal = new Perro(); animal.hacerSonido(); 

