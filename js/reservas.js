var almacen = {
	db:null,
	th:null,
	np:null,
	nh:null,
	nd:null,

	guardarReserva: function(th, np, nh, nd){
        //webdatabase
		almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
		almacen.th = th;
		almacen.np = np;
		almacen.nh = nh;
		almacen.nd = nd;
		almacen.db.transaction(almacen.tablaReserva, almacen.error, almacen.exito);
	},
	error: function(e){
		alert("Error, codigo: "+e.code);
	},
	exito: function(){
		alert("Reserva guardada en dispositivo, en espera de sincronizacion");
	},
	tablaReserva: function(tx){
//alert("Guardando reserva");
		tx.executeSql("CREATE TABLE IF NOT EXISTS reservas (th, np, nh, nd)");
		tx.executeSql("INSERT INTO reservas (th, np, nh, nd) VALUES ('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");
//alert("Reserva guardada en BD");
	},
    tablaHistorial: function(tx){
//alert("Guardando reserva");
		tx.executeSql("CREATE TABLE IF NOT EXISTS historial (th, np, nh, nd)");
		tx.executeSql("INSERT INTO historial (th, np, nh, nd) VALUES ('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");
//alert("Reserva guardada en BD");
	},
    
    guardarHistorial: function(th, np, nh, nd){
        //webdatabase
		//almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
		almacen.th = th;
		almacen.np = np;
		almacen.nh = nh;
		almacen.nd = nd;
		almacen.db.transaction(almacen.tablaHistorial, almacen.error, almacen.exito);
	},
    syncData:function(){
        almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
        almacen.db.transaction(almacen.leerReserva, almacen.error, almacen.reservaLeida);
    },
    leerReserva:function(tx){
        tx.executeSql("SELECT * FROM reservas",[],function(tx2,response){
            for (i=0;i<response.rows.length;i++){
                server.envRes(response.rows.item(i).th,response.rows.item(i).np,response.rows.item(i).nh,response.rows.item(i).nd);
                
                almacen.guardarHistorial(response.rows.item(i).th,response.rows.item(i).np,response.rows.item(i).nh,response.rows.item(i).nd);
                
            } tx2.executeSql("DELETE FROM reservas"); },almacen.error);
        
    },
    reservaLeida:function(){
        alert("Reservas Sincronizadas");
    }
}
