document.getElementById('add-money-section')
    .style.display = "none"
document.getElementById('cash-out-section')
    .style.display = "none";
document.getElementById('transaction-section')
    .style.display = "none";
document.getElementById('transfer-money-section')
    .style.display = "none";
document.getElementById('bonus-coupon-section')
    .style.display = "none";
document.getElementById('pay-bill-section')
    .style.display = "none";

document.getElementById('add-money-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "block");
        handleToggle("cash-out-section", "none");
        handleToggle("transaction-section", "none");
        handleToggle("transfer-money-section", "none");
        handleToggle("bonus-coupon-section", "none");
        handleToggle("pay-bill-section", "none");

        addElementOnClickedDiv('add-money-box');
        removeHover("cash-out-box");
        removeHover("transaction-box");
        removeHover("transfer-money-box");
        removeHover("get-bonus-box");
        removeHover("pay-bill-box");
})


document.getElementById('cash-out-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "none");
        handleToggle("cash-out-section", "block");
        handleToggle("transaction-section", "none");
        handleToggle("transfer-money-section", "none");
        handleToggle("bonus-coupon-section", "none");
        handleToggle("pay-bill-section", "none");

        addElementOnClickedDiv('cash-out-box');
        removeHover("add-money-box");
        removeHover("transaction-box");
        removeHover("transfer-money-box");
        removeHover("get-bonus-box");
        removeHover("pay-bill-box");
})

document.getElementById('transfer-money-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "none");
        handleToggle("cash-out-section", "none");
        handleToggle("transaction-section", "none");
        handleToggle("transfer-money-section", "block");
        handleToggle("bonus-coupon-section", "none");
        handleToggle("pay-bill-section", "none");

        addElementOnClickedDiv('transfer-money-box');
        removeHover("cash-out-box");
        removeHover("transaction-box");
        removeHover("add-money-box");
        removeHover("get-bonus-box");
        removeHover("pay-bill-box");
})

document.getElementById('get-bonus-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "none");
        handleToggle("cash-out-section", "none");
        handleToggle("transaction-section", "none");
        handleToggle("transfer-money-section", "none");
        handleToggle("bonus-coupon-section", "block");
        handleToggle("pay-bill-section", "none");

        addElementOnClickedDiv('get-bonus-box');
        removeHover("cash-out-box");
        removeHover("transaction-box");
        removeHover("add-money-box");
        removeHover("transfer-money-box");
        removeHover("pay-bill-box");
})

document.getElementById('pay-bill-box')
    .addEventListener('click', function() {
        handleToggle("add-money-section", "none");
        handleToggle("cash-out-section", "none");
        handleToggle("transaction-section", "none");
        handleToggle("transfer-money-section", "none");
        handleToggle("bonus-coupon-section", "none");
        handleToggle("pay-bill-section", "block");

        addElementOnClickedDiv('pay-bill-box');
        removeHover("add-money-box");
        removeHover("transaction-box");
        removeHover("transfer-money-box");
        removeHover("get-bonus-box");
        removeHover("cash-out-box");
})