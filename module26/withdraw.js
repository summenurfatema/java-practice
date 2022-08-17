// console.log('from withdraw bank html')

// document.getElementById('withdraw-button').addEventListener('click', function () {

//     const withdrawField = document.getElementById('withdraw-field');
//     const previouseWithdrawString = withdrawField.value;
//     const previouseWithdraw = parseFloat(previouseWithdrawString);


//     const withdrawTotal = document.getElementById('withdraw-total');
//     const newWithdrawString = withdrawTotal.innerText;
//     const newWithdraW = parseFloat(newWithdrawString);





//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceString = balanceTotal.innerText;
//     const previousBalance = parseFloat(previousBalanceString);

//     if (isNaN(previouseWithdraw) === true || previouseWithdraw === 0) {
//         return alert('Please Insert Valid Input');
//     }

//     const currentWithdraw = previouseWithdraw + newWithdraW;
//     withdrawTotal.innerText = currentWithdraw;

//     const newBalance = previousBalance - currentWithdraw;
//     balanceTotal.innerText = newBalance;



//     withdrawField.value = '';
// })

// function getInputValueById(inputFieldId) {
//     const inputField = document.getElementById(inputId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);

//     inputField.value = '';
//     return inputFieldValue;
// }
// function getElementValueById(textElementId) {
//     const textElement = document.getElementById(elementId);
//     const textElementValueString = textElement.innerText;
//     const textElementValue = parseFloat(textElementValueString);

//     return textElementValue;
// }

// function setTextElementValueById(elementId, newValue) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }


document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');


    if (isNaN(newWithdrawAmount) === true || newWithdrawAmount === 00) {
        return alert('Please Insert Valid Input');
    }
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;


    setTextElementValueById('withdraw-total', newWithdrawTotal);




    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal);


})