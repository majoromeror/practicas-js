//generar un número aleatorio 
//en minutos cuyo equivalente en horas debe ser mayor o 
//igual a 5 horas y menor o igual a 10 horas 
//(posteriores a la hora actual).
//Ejemplo:
//Hora Actual: 5:22
//Valor Aleatorio Generado de Minutos: 450
//Hora Final: 12:52
console.log("HORA");
var hoy = new Date();
var hora=hoy.getHours();
var minuto=hoy.getMinutes();
console.log("Hora Actual: "+hora+":"+minuto);
//1h=60min
minIn=hora*60+minuto;
minAv=Math.floor(Math.random()*(60*10-60*5+1)+60*5);
minTotal=minIn+minAv;
hFinalmin=(minTotal)%(24*60);
hFinal=Math.trunc(hFinalmin/60);
minFinal=hFinalmin-hFinal*60;

console.log("Valor Aleatorio Generado de Minutos: "+minAv);
console.log("Hora Final: "+hFinal+":"+minFinal);