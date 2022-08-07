const getIncomes = require("./getIncomes");

const getIncomeById = async (id) => {
  const result = await getIncomes();

  const parsedResult = JSON.parse(result);

  const { incomes } = parsedResult;

  const index = incomes.findIndex((income) => income.id === id);

  if (index >= 0) {
    return incomes[index];
  }

  return "income is missing";
};

module.exports = getIncomeById;
