const fs = require("fs/promises");

const { filePath } = require("./constants");

const getIncomes = async () => {
  return await fs.readFile(filePath, "utf-8");
};

module.exports = getIncomes;
