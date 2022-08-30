const empleadosCtrl={};


//Consultar todos los emppleados
empleadosCtrl.getEmpleados=(req,res) => {
    req.getConnection((err,conn) => {
      conn.query('SELECT * FROM empleado',(err,rows) => {
        if(err){
            console.log(err);
        }
        res.json(rows);
      });  
    });
}

//Consultar un empleado
empleadosCtrl.getEmpleado=(req,res) => {
    const {id}= req.params;
      req.getConnection((err,conn) => {
         conn.query('SELECT * FROM empleado WHERE _id= ?',[id],(err,rows) => {
             res.json(rows[0]);
      });
    });
}

//Crear un empleado
empleadosCtrl.createEmpleados=(req,res) => {
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn) => {
      conn.query('INSERT INTO empleado SET ?',[data],(err,empleado) => {
       res.redirect('/empleado');
      });
    });
}

//Eliminar un empleado
empleadosCtrl.deleteEmpleados=(req,res) => {
    const {id}= req.params;
    req.getConnection((err,conn) => {
      conn.query('DELETE FROM empleado WHERE _id = ?',[id],(err,rows) => {
        //res.redirect('/empleado');
        res.send(rows);
      }); 
    });
}

//Actualizar un empleado
empleadosCtrl.editEmpleados=(req,res) => {
    const {id}= req.params;
    const data= req.body;
    req.getConnection((err,conn) => {
      conn.query('UPDATE empleado SET ? WHERE _id = ?',[data, id],(err,rows) => {
            this.getEmpleados;
      });
    });
}




module.exports= empleadosCtrl;