const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../db');

function readData(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function writeData(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = {
  readData,
  writeData
};