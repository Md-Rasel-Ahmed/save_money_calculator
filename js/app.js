// All DOM selector
const calculateBtn = document.getElementById("totalCalBtn");
const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");
const save = document.getElementById("save");
const saveBtn = document.getElementById("saveBtn");
const saveammount = document.getElementById("saveammount");
const remainingAmmount = document.getElementById("remainingBalance");
// all addevent listeners
calculateBtn.addEventListener("click", function () {
  // checking validation
  if (
    income.value === "" ||
    income.value <= 0 ||
    food.value === "" ||
    food.value <= 0 ||
    rent.value === "" ||
    rent.value <= 0 ||
    clothes.value === "" ||
    clothes.value <= 0
  ) {
    alert("Please provide the valid number!");
    return;
  }
  if (expenses() > incomes()) {
    alert("Your expenses are more than your income!");
    return;
  }
  // End checking validation for calculate button
  totalExpense.innerText = expenses();
  balance.innerText = incomes() - expenses();
  food.value = "";
  rent.value = "";
  clothes.value = "";
});
// save button click
saveBtn.addEventListener("click", function () {
  let totalSaveAmmount = (incomes() * saves()) / 100;
  // checking validation for save
  if (save.value <= 0 || save.value == "") {
    alert("Please provide the valid number");
    return;
  }
  if (
    totalSaveAmmount > parseInt(balance.textContent) ||
    isNaN(totalSaveAmmount)
  ) {
    save.classList.add("saveError");
    document.querySelector("small").style.display = "block";
    return;
  } else {
    save.classList.remove("saveError");
    document.querySelector("small").style.display = "none";
  }
  //  End checking validation for save button
  saveammount.innerText = parseInt(totalSaveAmmount);
  remainingAmmount.innerText =
    parseInt(balance.textContent) - parseInt(saveammount.innerText);
  save.value = "";
});
// total income calculator
function incomes() {
  let incomeValue = parseInt(income.value);
  return incomeValue;
}
// total expense calculator
function expenses() {
  let foodValue = parseInt(food.value);
  let rentValue = parseInt(rent.value);
  let clotheValue = parseInt(clothes.value);
  return foodValue + rentValue + clotheValue;
}
// total saves calculator
function saves() {
  let saveValue = parseInt(save.value);
  return saveValue;
}
