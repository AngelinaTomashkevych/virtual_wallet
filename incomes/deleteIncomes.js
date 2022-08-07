const fs = require("fs/promises");

const { filePath } = require("./constants");

const getIncomes = require("./getIncomes");

const deleteIncomes = async (id) => {
  const result = await getIncomes();
  const parsdResult = JSON.parse(result);

  const { incomes } = parsdResult;

  const incomesWithout = incomes.filter((income) => income.id !== id);

  await fs.writeFile(filePath, JSON.stringify({ incomes: incomesWithout }));

  return "Success";
};

module.exports = deleteIncomes;
