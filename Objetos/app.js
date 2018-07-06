class Nave {
	constructor (color) {
    this.color = color;
    this.vidas = 100;
    this.armas = 2;
  }
  atacar (otraNave) {
    let ataque = this.armas * 2;
    otraNave.vidas = otraNave.vidas - ataque;
  }
}

const a = new Nave ("rojo");

const b = new Nave ("azul");

a.atacar(b)

b.vidas

//  Realizar en consola Chrome
// class Nave {
// 	constructor (color) {
//     this.color = color;
//     this.vidas = 100;
//     this.armas = 2;
//   }
//   atacar (otraNave) {
//     let ataque = this.armas * 2;
//     otraNave.vidas = otraNave.vidas - ataque;
//   }
// }
// undefined
// const a = new Nave ("rojo");
// undefined
// const b = new Nave ("azul");
// undefined
// a.atacar(b)
// undefined
// b.vidas
// 96
// for (let i in a) {
// console.log(i);

// VM155:2 Uncaught SyntaxError: Unexpected end of input
//     at <anonymous>:1:1
// (anonymous) @ VM138:1
// for (let i in a) {
// console.log(i);
// }
// VM159:2 color
// VM159:2 vidas
// VM159:2 armas
// undefined

