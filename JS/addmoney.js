
// Add functionality to the Add Money button ------------
document.getElementById('add-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();

        // Get the Amount and Pin using function ---------
        const amount = getInputValueByID('add-money-amount');
        const pin = getInputValueByID('add-money-pin');
        // 00000000000000000000000000000000000000000000000


        // Get the Account Number ------------------------
        const accountNumber = document.getElementById('account-number').value;
        // 00000000000000000000000000000000000000000000000


        // Get the Available Balance using function -------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000


        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const newBalance = amount + mainBalance;
                setInnerTextByIDandValue('main-balance',newBalance);
            }
            else {
                alert("Wrong Validation..!!!");
            }
        }
        else {
            alert("Unable to Perform...!!!")
        }

})