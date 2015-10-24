var fn = {
    init: function(){
        //alert();
        //var x = false;
        if (!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#regSend').click(fn.getReg); //aqui probamos el boton con un alert
        $('#tomarFoto').click(mc.start());
    },
    deviceready; function(){
        document.addEventListener("deviceready", fn.init, false);
    
    },
    estaRegistrado: function(){
        if(window.localStorage.getItem('uuid') != undefined){
            return  true;
            }
        return false;
    }
    getReg: function(){
        //var nom = document.getElementById('regNom').value; javaScript
        var nom = $('#regNom').val(); //esto es con jquery
        var tel = $('#regTel').val();
        var email = $('#regMail').val();
        var foto = $('#fotoTomada').attr("rel");
        
        if (nom !='' && tel != '' && email != '' && foto != undefined && foto != '' ) 
            {
             //alert(nom+'-'+tel+'-'+email);
            fn.enviarRegistro(nom,email,tel,foto);    
            }
             
        else{
            navigator.notification.alert('Todos los campos son reuweridos');
        }
            //alert("Todos los campos son requeridos"); 
        //alert(nom);
    },
    enviarRegistro: function(nombre, mail, telefono,foto){
        $.ajax({
            method: "POST",
            url: "http://carlos.igisoft.com/apps/test.php",
            data: { 
                nom: nombre,
                mail: mail,
                tel: telefono
            }
        }).done(function(msg){
            if(msg == 1){
                //enviar foto
                ft.start(foto);
                
            }
            else{
                alert("Datos incorrectos");
            }
                
                
                });
        
  });
    }
};
//jQuery(document).ready(fn.init)
//window.addEventListener("load",fn.init, false);

//var obj= $(document);
//obj.ready(fn.init);

//$(document).ready(fn.init)

//comentar linea de abajo cuando la app este lista para compilar y descomentar la de  deviceready abajo

//$(fn.init);

$(fn.deviceready);