
// Add functionality to the Add Money button ------------
document.getElementById('add-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();

        // Get the Amount and Pin using function ---------
        const amount = getInputValueByID('add-money-amount');
        const pin = getInputValueByID('add-money-pin');
        // 00000000000000000000000000000000000000000000000


        // Get the Account Number ------------------------
        const accountNumber = document.getElementById('add-money-account-number').value;
        console.log(typeof accountNumber);
        // 00000000000000000000000000000000000000000000000


        // Get the Available Balance using function -------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000

        // Get the Selected Bank -------------------------
        const selectedBank = document.getElementById('selected-bank').value;
        // 00000000000000000000000000000000000000000000000


        // Check the Amount and Pin whether it is number or not ---------------------
        if (isNaN(amount) || isNaN(pin)) {
            alert("Please, Input valid number...!!!");
            return;
        }
        // 00000000000000000000000000000000000000000000000

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const newBalance = amount + mainBalance;
                setInnerTextByIDandValue('main-balance',newBalance);

                // Added Transaction History for this Section ---------------------------
                const container = document.getElementById('transaction-container');

                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="card bg-base-100 card-sm">
                        <div class="card-body">
                            <h2 class="card-title">Bank Deposit</h2>
                            <p class="text-sm">${amount}$ credited to your A/C ${accountNumber} through ${selectedBank}.
                            </p>
                        </div>
                    </div>
                `
                container.appendChild(div);
                // 000000000000000000000000000000000000000
            }
            else {
                alert("Wrong Validation..!!!");
            }
        }
        else {
            alert("Unable to Perform...!!!")
        }

})
// <!-- <section class="w-5/6 mx-auto flex flex-col gap-2">
                
//             </section> -->