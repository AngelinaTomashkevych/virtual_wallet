const fs = require("fs/promises");

const { v4: uuidv4 } = require("uuid");

const getIncomes = require("./getIncomes");
const { filePath } = require("./constants");

const addIncome = async (data) => {
  const result = await getIncomes();
  const newIncome = { ...data, id: uuidv4() };
  const parsedResult = JSON.parse(result);

  parsedResult.incomes.push(newIncome);

  await fs.writeFile(filePath, JSON.stringify(parsedResult));

  return newIncome;
};

module.exports = addIncome;
