var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var noOFNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#error-message");

const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

checkButton.addEventListener("click",function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateReturnChange(amountToBeReturned);

        }
        else {
            showMessage("Do you wanna wash plated!!");
        }

    }
    else {
        showMessage("Invalid Amount");
    }
});
function calculateReturnChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){

        const numOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOFNotes[i].innerText = numOfNotes;
    }
}

function showMessage(msg){
    message.style.display = "block";
    msg.innerText = msg;
}

function hideMessage(){
    message.style.display = "none"
}