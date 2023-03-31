// Obtener la fecha y hora actual
const now = new Date();

// Obtener los valores de la fecha y hora actual
const dayOfWeek = now.toLocaleDateString('es-ES', { weekday: 'long' });//convertimos a español
const day = now.getDate();
const month = now.toLocaleDateString('es-ES', { month: 'long' });
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Crear el mensaje que se mostrará en el alert
const message = `Hoy es ${dayOfWeek} ${day} de ${month} del ${year}, y son las ${hours} horas, ${minutes} minutos con ${seconds} segundos.`;

// Mostrar el mensaje en un alert
alert(message);