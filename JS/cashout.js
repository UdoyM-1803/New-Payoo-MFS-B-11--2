document.getElementById('cash-out-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();

        // Get the Amount and Pin using function ---------
        const amount = getInputValueByID('cash-out-amount');
        const pin = getInputValueByID('cash-out-pin');
        // 00000000000000000000000000000000000000000000000


        // Get the Account Number ------------------------
        const accountNumber = document.getElementById('account-number').value;
        // 00000000000000000000000000000000000000000000000


        // Get the Available Balance using function -------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000


        if (accountNumber.length === 11) {
            if (pin === 1234) {
                if (amount > mainBalance) {
                    alert("Insufficient Balance...!!!");
                }
                else {
                    const newBalance = mainBalance - amount;
                    setInnerTextByIDandValue('main-balance', newBalance);
                }
            }
            else {
                alert("Wrong Validation...!!!");
            }
        }
        else {
            alert("Unable to Perform..!!!");
        }
})