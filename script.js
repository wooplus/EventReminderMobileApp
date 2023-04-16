// document.getElementById('datetime-field')

const addBtnEl = document.getElementById("add-btn");
const inputFieldEl = document.getElementById("input-field");

addBtnEl.addEventListener("click", () => {
  const dateTimeValue = document.getElementById("datetime-field").value;
  console.log(`${inputFieldEl.value} is due at ${dateTimeValue}`);
  const bDate = new Date(dateTimeValue);
  console.log(bDate.toDateString());
  console.log(bDate.toLocaleTimeString());
});
