const express = require('express');
const router = express.Router();
const nationsController = require('../controller/nationsController');

router.get('/', nationsController.getNations);
router.get('/:id', nationsController.getNation);
router.post('/', nationsController.createNation);
router.put('/:id', nationsController.updateNation);
router.patch('/:id', nationsController.patchNation);
router.delete('/:id', nationsController.deleteNation);

module.exports = router;