const { Router } = require ('express');
const routesMain = Router();
const mainControllers = require ('../controllers/mainController');

routesMain.get ('/', mainControllers.home);
routesMain.get ('/about', mainControllers.about);


module.exports = routesMain;