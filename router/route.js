const express = require('express');

const controller = require('../controller/datacontroller')
const router = express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))
    
    })
    
router.post('/add-data',controller.postdata)
    
router.get('/get-data',controller.getuser);
    
router.put('/edit-data1/:id',controller.decrese1)
router.put('/edit-data2/:id',controller.decrese2)
router.put('/edit-data3/:id',controller.decrese3)
    






module.exports = router;