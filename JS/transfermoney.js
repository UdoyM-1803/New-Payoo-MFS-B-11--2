document.getElementById('transfer-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();

        // Get the Amount and Pin using function --------
        const amount = getInputValueByID('transfer-money-amount');
        const pin = getInputValueByID('transfer-money-pin');
        // 0000000000000000000000000000000000000000000000


        // Get the Account Number -----------------------
        const accountNumber = document.getElementById('transfer-money-account-number').value;
        // 0000000000000000000000000000000000000000000000


        // Get the Recipients Account Number -------------
        const recipientAccountNumber = document.getElementById('transfer-money-recipient-account-number').value;
        // 00000000000000000000000000000000000000000000000


        // Get the Main Balance using function ------------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000


        // Check the Amount and Pin whether it is number or not ---------------------
        if (isNaN(amount) || isNaN(pin)) {
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
                                <h2 class="card-title">Money Transfer</h2>
                                <p class="text-sm">${amount}$ Transferred from your A/C ${accountNumber} to A/C ${recipientAccountNumber}.
                                </p>
                            </div>
                        </div>
                    `
                    container.appendChild(div);
                    // 000000000000000000000000000000000000
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