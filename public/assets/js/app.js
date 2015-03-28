/* JSON -> javascript object notation*/
/*var persona={
    nombre:"Pepe",
    apellido:"perez",
    lugar_nacimiento:"Medellin",
    intereses:['programacion','Futbol']
};

alert(persona.nombre);
*/

var managerscreen = managerscreen || {};
managerscreen={
    cambiarcolorfondo:function(color){
        document.body.style.background=color;
    },
    saludar:function(){
        alert("Hola Muchachos!!!");
    },
    ocultarparrafo:function(){
        document.getElementById('oculto').style.display = 'none';
    },
     mostrarparrafo:function(){
        document.getElementById('oculto').style.display = 'block';
    },
    ocultartodosp:function(tag){
       /* var ps = document.getElementsByTagName(tag);--JAVASCRIPT
        for (i=0; i < ps.length; i++){
            ps[i].style.display='none';
        }*/
        //JQUERY
        $("p").hide();
    },
    mostrartodosp:function(tag){
       /* var ps = document.getElementsByTagName(tag);--Javascript
        for (i=0; i < ps.length; i++){
            ps[i].style.display='block';
        }*/
        //JQUERY
        $("p").show();
    },
    ocultartodosdiv:function(tag){
        /*var ps = document.getElementsByTagName(tag);
        for (i=0; i < ps.length; i++){
            ps[i].style.display='none';
        }*/
        //JQUERY
        $("div").hide();
    },
    mostrartodosdiv:function(tag){
       /* var ps = document.getElementsByTagName(tag);
        for (i=0; i < ps.length; i++){
            ps[i].style.display='block';
        }*/
    //JQUERY
    $("div").show();
    },
    toggletodosdivp:function(tag){
       /* var ps = document.getElementsByTagName(tag);
        for (i=0; i < ps.length; i++){
            ps[i].style.display='block';
        }*/
    //JQUERY
    $("div,p").toggle();
    },
    
   alertify:function(){
       alertify.log("Notification", "Success", 1000);
       alertify.log("Notification", "Error", 2000);
   }
}
var ms=managerscreen;

/*
function menor_edad(edad){
    if(edad<21){
        alert("Usted es menor de edad")
        while (edad>0 & edad<21){
            age=prompt("Ingrese su edad");
            menor_edad(age);
        }
    }
    else{
        alert("Usted es mayor de edad")
    }
}

age=prompt("Ingrese su edad");
menor_edad(age);
*/
