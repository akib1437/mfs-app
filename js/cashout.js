document.getElementById('btn-cashout-btn')
    .addEventListener('click', function (event){
        
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;
        console.log(cashOutInput);

    const cashoutPinInput = document.getElementById('input-cashout-pin').value;
    console.log(cashoutPinInput);

    if (cashoutPinInput === '1234'){
        console.log('cashout successful')
       
        const balance = document.getElementById('balance').innerText;
        console.log(balance);

        const cashOutNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert("failed to addMoney.Please try again")
    }
    })