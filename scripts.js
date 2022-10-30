const outputBillAmount = document.querySelector("#bill-amount");
const inputCashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-msg");
var numberOfIndividualChange = document.querySelectorAll(".notes");
var availableChanges = [2000,500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener(
  "click",
  function ValidateoutputBillAmountAndCashAmount() {
    hideMessage();
    var cashGiven = Number(inputCashGiven.value);
    var billAmount = Number(outputBillAmount.value)
    validatingAmount(billAmount, cashGiven);
  }
);

function validatingAmount(billAmount, cashGiven) {
    if (billAmount > 0) {
        calculateAmountToBeReturned(cashGiven, billAmount);
    } else {
        showMessage(
            "Enter the right amount!!!"
        );
    }
}

function calculateAmountToBeReturned(cashGiven, billAmount) {
    if (cashGiven > billAmount) {
        var amountToBeReturned = cashGiven - billAmount;
        calculateChange(amountToBeReturned);
    } else if (cashGiven = billAmount) {
        showMessage(
            "No change needs to be returned"
        );
    }else {
        showMessage(
            "!***No free food***!"
        );
    }
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableChanges.length; i++) {
    var numberOfeachChange = Math.trunc(amountToBeReturned / availableChanges[i]);
    numberOfIndividualChange[i].innerText = numberOfeachChange;
    amountToBeReturned = amountToBeReturned % availableChanges[i];
  }
}

function hideMessage() {
    errorMessage.style.dispaly = 'none';
}

function showMessage(msg) {
  errorMessage.style.dispaly = 'block';
  errorMessage.innerText = msg;
}

