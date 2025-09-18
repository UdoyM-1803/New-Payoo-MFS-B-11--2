document.getElementById("login-btn")
    .addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the Pin Number using function and Account Number --------------
        const accountNumber = document.getElementById('account-number').value;
        
        const pinNumber = getInputValueByID('pin-number');
        // 00000000000000000000000000000000000000000000


        // Pin & Account number Validation -------------
        if (accountNumber.length  === 11) {
            if (pinNumber === 1234) {
                window.location.href = "main.html";
            }
            else {
                alert("Wrong Pin Number");
            }
        }
        else {
            alert("Wrong Submission...!!!");
        }
        // 000000000000000000000000000000000000000000000000
})