var operandoa;
var operandob;
var operacion;
function iniciar(){
    var uno=document.getElementById("uno")
    var dos=document.getElementById("dos")
    var tres=document.getElementById("tres")
    var cuatro=document.getElementById("cuatro")
    var cinco=document.getElementById("cinco")
    var seis=document.getElementById("seis")
    var siete=document.getElementById("siete")
    var ocho=document.getElementById("ocho")
    var nueve=document.getElementById("nueve")
    var cero=document.getElementById("cero")
    var suma=document.getElementById("suma")
    var resta=document.getElementById("resta")
    var multiplicar=document.getElementById("multiplicar")
    var dividir=document.getElementById("division")
    var pantalla=document.getElementById("pantalla")
    var reset=document.getElementById('reset')
    var resultado=document.getElementById('resultado')


    uno.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"1";
    }
    dos.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"2";
    }
     tres.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"3";
    }
     cuatro.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"4";
    }
     cinco.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"5";
    }
     seis.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"6";
    }
     siete.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"7";
    }
     ocho.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"8";
    }
     nueve.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"9";
    }
    cero.onclick = function(e){
        pantalla.textContent= pantalla.textContent +"0";
    }
     resta.onclick = function(e){
        operandoa= pantalla.textContent ;
        operacion="-";
        limpiar();
    }
     suma.onclick = function(e){
        operandoa=pantalla.textContent;
        operacion="+";
        limpiar();
    }
     dividir.onclick = function(e){
        operandoa=pantalla.textContent;
        operacion="/";
        limpiar();
    } 
    multiplicar.onclick = function(e){
        operandoa=pantalla.textContent;
        operacion="*";
        limpiar();
    } 
    reset.onclick = function(e){
        reseteo();
    }
    resultado.onclick=function(e){
        operandob=pantalla.textContent;
        resolver();
    }
    function limpiar(){
        pantalla.textContent="";
    }
    function reseteo(){
        pantalla.textContent="";
        operandoa=0;
        operandob=0;
        operacion="";
    }

    function resolver(){
        var res=0;
        switch(operacion){
            case "+":
            res=parseFloat(operandoa)+parseFloat(operandob);
            break;
            case "-":
            res=parseFloat(operandoa)-parseFloat(operandob);
            break;
            case "*":
            res=parseFloat(operandoa)*parseFloat(operandob);
            break;
            case "/":
            res=parseFloat(operandoa)/parseFloat(operandob);
            break;   
        }
        reseteo();
        pantalla.textContent=res;
    }
    
       


}