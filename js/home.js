// add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // prevent page reload after form submit
        event.preventDefault();

        // step-2: get money oto be added to the account balance
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // step-3: get the pin number
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

        // step-4: pin number validity 
        if (pinNumberInput === '1234'){
            console.log('adding money to your account')

            //step-5: get the current balance
        const balance = document.getElementById('balance').innerText;
        console.log(balance);

        //step-6: add addMoney with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        
        //update the new balance to the dom
        document.getElementById('balance').innerText = newBalance;
        }

        else{
            alert("failed to addMoney.Please try again")
        }
        
})