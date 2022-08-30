const{Router}= require('express');

const router= Router();

const empleadosCtrl= require('../controllers/empleados.controller');

//Consultar todos los empleados
router.get('/empleado',empleadosCtrl.getEmpleados);

//Consultar un empleado
router.get('/empleado/:id',empleadosCtrl.getEmpleado);

//Crear un empleado
router.post('/empleado',empleadosCtrl.createEmpleados);

//Eliminar un empleado
router.delete('/empleado/:id',empleadosCtrl.deleteEmpleados);

//Actualizar un empleado
router.put('/empleado/:id',empleadosCtrl.editEmpleados);



module.exports= router;