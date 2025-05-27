const { getAllTanks, getTankById, createTank, updateTank, patchTank, deleteTank } = require('../service/tanksService');

exports.getTanks = (req, res) => {
  const tanks = getAllTanks();
  res.json(tanks);
};

exports.getTank = (req, res) => {
  const id = parseInt(req.params.id);
  const tank = getTankById(id);
  if (!tank) return res.status(404).json({ error: 'Tank not found' });
  res.json(tank);
};

exports.createTank = (req, res) => {
  try {
    const tank = createTank(req.body);
    res.status(201).json(tank);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.updateTank = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updated = updateTank(id, req.body);
    if (!updated) return res.status(404).json({ error: 'Tank not found' });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.patchTank = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const patched = patchTank(id, req.body);
    if (!patched) return res.status(404).json({ error: 'Tank not found' });
    res.json(patched);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.deleteTank = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteTank(id);
  if (!deleted) return res.status(404).json({ error: 'Tank not found' });
  res.status(204).send();
};