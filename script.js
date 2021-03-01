function tipo(nombre,transmision){
    this.nombre = nombre
    this.transmision = transmision
    alert("Bueno, "+nombre+" hagamos tu bicileta "+transmision)
}
var nombre = prompt("¿Cómo te llamas?")
alert("Hola "+nombre+" esta pagina es un simulador que te permitirá presupuestar cuanto te saldria armar tu bici con nosotres.")
alert("¿Qué tipo de bici queres armar?")
var transmision = prompt("¿piñon fijo o libre?" )
tipo(nombre,transmision)
