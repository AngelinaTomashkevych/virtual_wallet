const fs = require("fs/promises");

const { filePath } = require("./constants");

const getIncomes = require("./getIncomes");

const updateIncome = async (data) => {
  const result = await getIncomes();
  const parsedResult = JSON.parse(result);

  const { incomes } = parsedResult;

  const newIncomes = incomes.map((income) => {
    if (income.id === data.id) {
      return data;
    }
    return income;
  });

  await fs.writeFile(filePath, JSON.stringify({ incomes: newIncomes }));

  return data;
};

module.exports = updateIncome;
