function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
   let resultado = ""
   if (jugada === 1) {
       resultado = "Piedra 💎"
   } else if (jugada === 2) {
       resultado = "Papel 📄"
   } else if (jugada === 3) {
       resultado = "Tijera ✂️"
   } else {
       resultado = "Elegiste PERDER"
   }
   return resultado
}

function combate(jugador, pc) {
   if (pc === jugador) {
       alert("EMPATE")
       return "empate"
   } else if ((jugador === 1 && pc === 3) || (jugador === 2 && pc === 1) || (jugador === 3 && pc === 2)) {
       alert("¡GANASTE!")
       return "triunfo"
   } else {
       alert("PERDISTE")
       return "derrota"
   }
}

let triunfos = 0
let perdidas = 0
let empates = 0

while (triunfos < 3 && perdidas < 3 && empates < 3) {
   let pc = aleatorio(1, 3)
   let jugador = parseInt(prompt("Elige: 1 = 💎 ll 2 = 📄 ll 3 = ✂️"))

   alert("PC elige: " + eleccion(pc))
   alert("Tu eliges: " + eleccion(jugador))

   let resultado = combate(jugador, pc)

   // Genera contadores dado el resultado del combate
   if (resultado === "triunfo") {
       triunfos++
   } else if (resultado === "derrota") {
       perdidas++
   } else {
       empates++
   }
}

alert("Ganaste " + triunfos + " veces, perdiste " + perdidas + " veces y " + "empataste " + empates + " veces")
