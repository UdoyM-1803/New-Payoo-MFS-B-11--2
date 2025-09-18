document.getElementById('get-bonus-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();


        // Get the Coupon Code using Function ------------
        const couponCode = getInputStringByID('coupon-code');
        // 00000000000000000000000000000000000000000000000


        // Get the Main Balance using function -----------
        const mainBalance = getInnerTextValueByID('main-balance');
        // 00000000000000000000000000000000000000000000000


        // Check the Coupon code whether it is String or not -------------------------------------------
        if (!isNaN(couponCode)) {
            alert("Please, Enter Valid Coupon Code");
            return;
        }
        // 0000000000000000000000000000000000000000000000


        // Coupon Code Validation -----------------------
        if (couponCode.toLowerCase() === "coupon") {
            const newBalance = mainBalance + 100;
            setInnerTextByIDandValue('main-balance', newBalance);

            // Added Transaction History for this Section ---------------------------
            const container = document.getElementById('transaction-container');

            const div = document.createElement("div");
            div.innerHTML = `
                <div class="card bg-base-100 card-sm">
                    <div class="card-body">
                        <h2 class="card-title">Get Bonus</h2>
                        <p class="text-sm">You got 100$ bonus for the Coupon.</p>
                    </div>
                </div>
            `
            container.appendChild(div);
            // 000000000000000000000000000000000000
        }
        else {
            alert("Wrong Coupon Code. Please, Enter the Correct Coupon Code to get the Bonus..!!");
        }
        // 0000000000000000000000000000000000000000000000
})