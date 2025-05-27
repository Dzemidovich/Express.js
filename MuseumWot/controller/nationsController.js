const { getAllNations, getNationById, createNation, updateNation, patchNation, deleteNation } = require('../service/nationsService');

exports.getNations = (req, res) => {
  const nations = getAllNations();
  res.json(nations);
};

exports.getNation = (req, res) => {
  const id = parseInt(req.params.id);
  const nation = getNationById(id);
  if (!nation) return res.status(404).json({ error: 'Nation not found' });
  res.json(nation);
};

exports.createNation = (req, res) => {
  const nation = createNation(req.body);
  res.status(201).json(nation);
};

exports.updateNation = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateNation(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Nation not found' });
  res.json(updated);
};

exports.patchNation = (req, res) => {
  const id = parseInt(req.params.id);
  const patched = patchNation(id, req.body);
  if (!patched) return res.status(404).json({ error: 'Nation not found' });
  res.json(patched);
};

exports.deleteNation = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteNation(id);
  if (!deleted) return res.status(404).json({ error: 'Nation not found' });
  res.status(204).send();
};