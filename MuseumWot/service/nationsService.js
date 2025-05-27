const { readData, writeData } = require('../utils/fileUtils');

function getAllNations() {
  return readData('nations.json');
}

function getNationById(id) {
  const nations = getAllNations();
  return nations.find(nation => nation.id === id);
}

function createNation(nationData) {
  const nations = getAllNations();
  const newId = nations.length > 0 ? Math.max(...nations.map(n => n.id)) + 1 : 1;

  const newNation = {
    id: newId,
    ...nationData
  };

  nations.push(newNation);
  writeData('nations.json', nations);
  return newNation;
}

function updateNation(id, updatedData) {
  let nations = getAllNations();
  const index = nations.findIndex(nation => nation.id === id);

  if (index === -1) return null;

  nations[index] = { ...nations[index], ...updatedData };
  writeData('nations.json', nations);
  return nations[index];
}

function patchNation(id, partialData) {
  return updateNation(id, partialData);
}

function deleteNation(id) {
  let nations = getAllNations();
  const filtered = nations.filter(nation => nation.id !== id);

  if (filtered.length === nations.length) return false;

  writeData('nations.json', filtered);
  return true;
}

module.exports = {
  getAllNations,
  getNationById,
  createNation,
  updateNation,
  patchNation,
  deleteNation
};