document.getElementById('pay-bill-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();

        // Get the PIN number and Amount using function --
        const amount = getInputValueByID('pay-bill-amount');
        const pin = getInputValueByID('pay-bill-pin');
        // 00000000000000000000000000000000000000000000000


        // Get the Biller Which is selected ---------------
        const selectedBiller = document.getElementById('selected-biller').value;
        // 00000000000000000000000000000000000000000000000


        // Get the Biller Account ------------------------
        const billerAccountNumber = document.getElementById('biller-account-number').value;
        // 00000000000000000000000000000000000000000000000

        
        // Get the Main Balance using function -----------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000


        // Check the Pin and Amount whether it is number or not ------------------------------------------
        if (isNaN(amount) || isNaN(pin)) {
            alert("Please, Input Valid Number...!!!");
            return;
        }


        if (billerAccountNumber.length === 11) {
            if (pin === 1234) {
                if (amount > mainBalance) {
                    alert("You don't have Sufficient balance to pay the Bill...!!!");
                }
                else {
                    const newBalance = mainBalance - amount;
                    setInnerTextByIDandValue('main-balance', newBalance);


                    // Added Transaction History for this Section ---------------------------
                    const container = document.getElementById('transaction-container');

                    const div = document.createElement("div");
                    div.innerHTML = `
                        <div class="card bg-base-100 card-sm">
                            <div class="card-body">
                                <h2 class="card-title">Bill Pay</h2>
                                <p class="text-sm">Bill paid ${amount}$ to A/C ${billerAccountNumber} for ${selectedBiller}.</p>
                            </div>
                        </div>
                    `
                    container.appendChild(div);
                    // 0000000000000000000000000000000000
                }
            }
            else {
                alert("Wrong Validation...!!!");
            }
        }
        else {
            alert("Please, Enter Valid Account Number...!!!");
        }

})