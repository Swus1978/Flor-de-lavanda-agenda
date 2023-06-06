// Datos de ejemplo en formato JSON
let appointments = [
    {
        "id": 1,
        "name": "Juan Pérez",
        "email": "juanperez@example.com",
        "date": "2023-06-07",
        "time": "10:00 AM"
    },
    {
        "id": 2,
        "name": "María López",
        "email": "marialopez@example.com",
        "date": "2023-06-08",
        "time": "2:30 PM"
    }
];

// Función para mostrar las citas
function displayAppointments() {
    let appointmentsContainer = document.getElementById('appointmentsContainer');
    appointmentsContainer.innerHTML = ''; // Limpiar datos previos

    // Iterar a través del array de citas
    appointments.forEach(function (appointment) {
        // Crear una nueva tarjeta de cita
        let appointmentCard = document.createElement('div');
        appointmentCard.className = 'appointment-card';

        // Construir el contenido HTML para la tarjeta de cita
        let html = '<h3>' + appointment.name + '</h3>';
        html += '<p>Correo Electrónico: ' + appointment.email + '</p>';
        html += '<p>Fecha: ' + appointment.date + '</p>';
        html += '<p>Hora: ' + appointment.time + '</p>';

        // Establecer el contenido HTML para la tarjeta de cita
        appointmentCard.innerHTML = html;

        // Agregar la tarjeta de cita al contenedor
        appointmentsContainer.appendChild(appointmentCard);
    });
}

// Manejar el envío del formulario
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    // Crear un nuevo objeto de cita
    let newAppointment = {
        "id": appointments.length + 1,
        "name": name,
        "email": email,
        "date": date,
        "time": time
    };

    // Agregar la nueva cita al array
    appointments.push(newAppointment);

    // Mostrar la lista actualizada de citas
    displayAppointments();

    // Reiniciar el formulario
    document.getElementById('appointmentForm').reset();
});

// Mostrar las citas iniciales
displayAppointments();
