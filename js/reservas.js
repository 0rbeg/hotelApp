var almacen = {
    db:null,
    th:null,
    np:null,
    nh:null,
    nd:null,
    
    guardarReserva: function(th,np,nh,nd){
        almacen.db = window.openDatabase("hoteApp","1.0","Hotel App", 200000);
        almacen.th = th;
        almacen.np = np;
        almacen.nh = nh;
        almacen.nd = nd;
        almacen.db.transaction(almacen.tablaReserva, almacen.error, almacen.exito);
    },
    error: function(e){
    alert("Error, codigo: "+e.code);
    },
    exito: fucntion(){
    alert("Reserva guardadada en dispositivo, en espera de sincronización");
    
    },
    tablaReserva: function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS reservas(th,np,nd)");
        tx.executeSql("INSERT INTO reservas(th,np,nh,nd) VALUES ("+almacen.th+","+almacen.np+","+almacen.nh+","+almacen.nd+")");
    }
}

        