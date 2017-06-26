var cargarPagina = function() {
    cargarAlumnas();
};


var cargarAlumnas = function() {
    var url ='http://laboratoria.cuadra.co:9339/api/v1/students/?format=api';
    console.log(url);
    $.getJSON(url, function(response){
        console.log(response);
    });
};

$(document).ready(cargarPagina);