var conexion = {
	estaConectado: function(){
		if(navigator.connection.type != Connection.NONE){
			return true;

		},
		
		eventoConectado:function() {
            document.addEventListener("online",almcen.syncData,false);
        }
		
	}
}