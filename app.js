const operations = require("./incomes");

const propductsApi = async (action, data) => {
  try {
    switch (action) {
      case "get-all":
        const incomes = await operations.getIncomes();
        console.log("incomes: ", incomes);
        break;

      case "get-by-id":
        const income = await operations.getIncomeById(data);
        console.log("income: ", income);
        break;

      case "add":
        const newIncome = await operations.addIncome(data);
        console.log("new income: ", newIncome);
        break;

      case "update":
        const updatedIncome = await operations.updateIncome(data);
        console.log("updated income: ", updatedIncome);
        break;

      case "delelete":
        const response = await operations.deleteIncomes(data);
        console.log(response);
        break;
    }
  } catch (error) {
    console.log(error.message);
  }
};
