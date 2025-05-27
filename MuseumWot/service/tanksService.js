const { readData, writeData } = require('../utils/fileUtils');
const { getNationById } = require('./nationsService');

function getAllTanks() {
  return readData('tanks.json');
}

function getTankById(id) {
  const tanks = getAllTanks();
  return tanks.find(tank => tank.id === id);
}

function createTank(tankData) {
  const tanks = getAllTanks();

  // Проверка существования страны
  if (!getNationById(tankData.nation_id)) {
    throw new Error("Nation not found");
  }

  const newId = tanks.length > 0 ? Math.max(...tanks.map(t => t.id)) + 1 : 1;

  const newTank = {
    id: newId,
    ...tankData
  };

  tanks.push(newTank);
  writeData('tanks.json', tanks);
  return newTank;
}

function updateTank(id, updatedData) {
  let tanks = getAllTanks();
  const index = tanks.findIndex(t => t.id === id);

  if (index === -1) return null;

  if (updatedData.nation_id && !getNationById(updatedData.nation_id)) {
    throw new Error("Nation not found");
  }

  tanks[index] = { ...tanks[index], ...updatedData };
  writeData('tanks.json', tanks);
  return tanks[index];
}

function patchTank(id, partialData) {
  return updateTank(id, partialData);
}

function deleteTank(id) {
  let tanks = getAllTanks();
  const filtered = tanks.filter(t => t.id !== id);

  if (filtered.length === tanks.length) return false;

  writeData('tanks.json', filtered);
  return true;
}

module.exports = {
  getAllTanks,
  getTankById,
  createTank,
  updateTank,
  patchTank,
  deleteTank
};