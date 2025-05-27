const express = require('express');
const router = express.Router();
const tanksController = require('../controller/tanksController');

router.get('/', tanksController.getTanks);
router.get('/:id', tanksController.getTank);
router.post('/', tanksController.createTank);
router.put('/:id', tanksController.updateTank);
router.patch('/:id', tanksController.patchTank);
router.delete('/:id', tanksController.deleteTank);

module.exports = router;