// definimos la fecha limite 
const finAnio = new Date("2024-01-01 00:00:00");
const iniAnio= new Date("2023-01-01 00:00:01");
const duracionAnio = finAnio - iniAnio;
//capturamos los id del DOM donde se pintaremos la data resultante
const diasDom = document.getElementById('dias');
const horasDom = document.getElementById('horas');
const minutosDom = document.getElementById('minutos');
const segundosDom = document.getElementById('segundos');
const barraProgreso = document.getElementById('barra-progreso');
const porcentProgreDom = document.getElementById('porcentaje-progreso');

//funcion que captura la fecha y hora actual y resta a la fecha limite, convertimos la data a formato dias horas minutos y segundos 
function actualizarContador() {
  const ahora = new Date();
  const diferencia = finAnio - ahora; //resta fecha limite menos actual, devuelve resultado en milisegundos
  const segundos = Math.floor(diferencia / 1000); // convertimos a segundos que faltan para fin de año
  const minutos = Math.floor(segundos / 60);//los segundos los convertimos a minutos que faltan para fin de año
  const horas = Math.floor(minutos / 60);//los minutos los convertimos a horas que faltan para fin de año
  const dias = Math.floor(horas / 24);//las horas las convertimos en dias que faltan para fin de año
  const porcentajeCompletado = (ahora - iniAnio) / duracionAnio * 100; //obtenemos el porcentaje del año completado

/*.floor redondea el resultado al numero entero inferior mas cercano*/

// pintamos los resultados en el dom
  diasDom.textContent = dias; 
  horasDom.textContent = horas % 24; // las horas que faltan para fin de año las dividimos por 24 y tomamos el resto
  minutosDom.textContent = minutos % 60; // los minutos que faltan para fin de año los dividimos en 60
  segundosDom.textContent = segundos % 60;
  barraProgreso.value = porcentajeCompletado;

  porcentProgreDom.textContent = `${porcentajeCompletado.toFixed(5)}%`; //mostramos el procentaje con 5 decimales para visualizar el avance del tiempo en porcentaje

  requestAnimationFrame(actualizarContador); 
  //requestAnimationFrame sirve para animaciones ej javascript, se ejecuta 60 veces por segundo mientras la pantalla del navegador este activa.
}

actualizarContador();
