window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 150000, years: 13, rate: 2.5};
  let amountInput = document.getElementById("loan-amount");
  let yearInput = document.getElementById("loan-years");
  let rateInput = document.getElementById("loan-rate");
  amountInput.value = defaultValues.amount;
  yearInput.value = defaultValues.years;
  rateInput.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(defaultValues) {
  const monthlyRate = (defaultValues.rate / 100) / 12;
  const  n = Math.floor(defaultValues.years * 12)
  return (
    (monthlyRate * defaultValues.amount) / (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment")
  monthlyPayment.innerText = "$" + monthly;
}
