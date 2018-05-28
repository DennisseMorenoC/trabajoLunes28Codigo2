const age = prompt ("Ingresa tu edad en años");

if(age == ""){
    alert("Debe ingresar un número");
}else {
    if(isNaN(age)){
        alert("Debe ingresar un número que corresponda");
    }else{
        if (age == 0){
            alert("Debe ingresar un número superior a 0");
        }else if (age>0 && age<4 ){
            alert("Eres un Toddler");
        }else if (age>3 && age<6){
            alert("Eres un Preschool");
        }else if (age>5 && age<13){
            alert("Eres un Gradeschooler");
        }else if (age>12 && age<19){
            alert("Eres un Teen");
        }else if (age>18 && age<22){
            alert("Eres un Young Adult");
        }else if (age>21){
            alert("Eres un Adult");
        }
    }   
}