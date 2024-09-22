
//show the cashout form

document.getElementById('show-cashout')
    .addEventListener('click', function(){
        //show cashout btn click
        document.getElementById('cash-out-form').classList.remove('hidden');
        //hide the addmoney form
        document.getElementById('addmoney-form').classList.add('hidden');

    })

//show addmoney form

document.getElementById('show-addmoney')
    .addEventListener('click', function(){
        //show cashout btn click
        document.getElementById('addmoney-form').classList.remove('hidden');
        //hide the addmoney form
        document.getElementById('cash-out-form').classList.add('hidden');

    })