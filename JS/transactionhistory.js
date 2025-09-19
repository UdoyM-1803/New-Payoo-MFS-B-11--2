document.getElementById('transaction-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "none")
        handleToggle("cash-out-section", "none")
        handleToggle("transaction-section", "block");
        handleToggle("transfer-money-section", "none");
        handleToggle("bonus-coupon-section", "none");
        handleToggle("pay-bill-section", "none");

        addElementOnClickedDiv('transaction-box');
        removeHover("add-money-box");
        removeHover("pay-bill-box");
        removeHover("transfer-money-box");
        removeHover("get-bonus-box");
        removeHover("cash-out-box");
})