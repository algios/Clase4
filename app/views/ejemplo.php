<html>
    <head>
        <script src="./assets/js/app.js"></script>
        <script src="./assets/libs/alertify/lib/alertify.min.js"></script>
        <script src="./assets/libs/complexify/jquery.complexify.js"></script>
        <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="./assets/libs/alertify/themes/alertify.core.css">
        <link rel="stylesheet" type="text/css" href="./assets/libs/alertify/themes/alertify.default.css">
        
        
    </head>
    <body>
        <button onclick="ms.saludar()">Saludar</button>
        <button onclick="ms.cambiarcolorfondo('green')">Verde</button>
        <button onclick="ms.cambiarcolorfondo('red')">Rojo</button>
        <button onclick="ms.ocultarparrafo()">Ocultar</button>
        <button onclick="ms.ocultartodosp('p')">Ocultar Todo p</button>
        <button onclick="ms.mostrarparrafo()">Mostrar</button>
        <button onclick="ms.mostrartodosp('p')">Mostrar Todo p</button>
        <button onclick="ms.ocultartodosp('div')">Ocultar Todo div</button>
        <button onclick="ms.mostrartodosp('div')">Mostrar Todo div</button>
        <button onclick="ms.toggletodosdivp('div')">Toggle todos div p</button>
        <button onclick="ms.alertify()">Mensaje</button>
        <p id='oculto'>Esto es un parrafo</p>
        <p>Esto es otro parrafo</p>
        <div>hola</div>
    </body>
</html>