var ft = {
    win : function (r) {
    if(r.response){
        //exitoso
        navigator.notification.alert(
    'registrado correctamente',  // message
    function(){
         navigator.vibrate(2000);
         navigator.notification.beep(2);
         window.localStorage.setItem('uuid',10);
         window.location.href ="#home";
         
    },         // callback
    'Bienvenido',            // title
    'Registrado'                  // buttonName
),
        
    }else{
        alert("Error");
    }
},
    fail : function (error) {
        alert("Error "+error.code);
    
},
    start:function(path){
        var options = new FileUploadOptions();
        options.fileKey = "foto";
        options.fileName = "MiFoto";
        options.mimeType = "image/jpeg";

        
        var ft = new FileTransfer();
        ft.upload(path, encodeURI("http://carlos.igisoft.com/apps/test.php"), ft.win, ft.fail, options);
    }
    
}




