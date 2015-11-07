var fn = {
	init: function(){
	//	if(!fn.islogged())
	//		window.location.href = "#reg";
           // alert('Aqui!!');
		
		//Funcionalidades de Registro
        window.location.href = "#nr2";
		$('#regSend').click(fn.getRegister);
		$('#takePhoto').click(mediaCapture.takePhoto);
        $('#nr1 ul[data-role=listview] a').click(fn.seleccionarTipo);
	},
	ready:function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	islogged: function(){
		return ls.estaRegistrado();
	},
	getRegister: function(){
		var nom = $('#regName').val();
		var tel = $('#regTel').val();
		var mail = $('#regMail').val();
		var foto = $('#regPhoto').attr('rel');
		if(nom != '' && tel != '' && mail != '' && foto != undefined && foto != ''){
			server.regSend(nom, tel, mail, foto);
		}else{
			navigator.notification.alert('Todos los campos son requeridos', null, "Error de Registro", "Aceptar");
		}
	},
    seleccionarTipo: function(){
        $(this).parents("ul").find("a").removeClass('ui-btn-active');
        console.log("Hola");
        $(this).addClass("ui-btn-active");
    }
};
    
$(fn.ready);
//$(fn.init);