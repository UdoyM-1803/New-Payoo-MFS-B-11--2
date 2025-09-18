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


        // Check the Account number, Amount and Pin whether it is number or not ---------------------
        if (isNaN(amount) || isNaN(pin) || isNaN(accountNumber)) {
            alert("Please, Input valid number...!!!");
            return;
        }
        // 00000000000000000000000000000000000000000000000
        

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                if (amount > mainBalance) {
                    alert("Insufficient Balance...!!!");
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
                                <h2 class="card-title">Withdraw Money</h2>
                                <p>${amount}$ withdrew from your A/C ${accountNumber}.
                                </p>
                            </div>
                        </div>
                    `
                    container.appendChild(div);
                    // 000000000000000000000000000000000000000
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