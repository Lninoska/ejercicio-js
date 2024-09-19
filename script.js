// alert ("Pasajero, Se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.")


function actualizarhora () {
    let ahora = new Date(); 
    let hora = ahora.toLocaleTimeString();
    let fecha = ahora.toLocaleDateString();

    document.getElementById ('insertTime').innerText = hora;
    document.getElementById ('insertDate').innerText = fecha;
}

actualizarhora ()


setInterval(actualizarhora, 1000)

function generarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function vuelo() {
    document.getElementById('flightNumber').textContent = generarNumAleatorio(1000, 9999);
    document.getElementById('terminalNumber').textContent = generarNumAleatorio(1,20);
}


$(document).ready(function() {
    $("#myModal").modal("show")
})

window.onload = vuelo;



