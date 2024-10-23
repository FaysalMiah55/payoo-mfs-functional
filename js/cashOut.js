document.getElementById("btn-cash-out")
    .addEventListener('click', function(event){
        event.preventDefault()

        // withdraw money
        const withdrawMoney = getInputFieldValueById("input-cash-out")
        const pinNumber = getInputFieldValueById("input-cash-out-pin")

        if(pinNumber === 1234){
            // withdraw money
            const balance = getTextFieldValueById("account-balance")
            const newBalance = balance - withdrawMoney
            
            document.getElementById("account-balance").innerText = newBalance
        }
        else{
            alert("wrong pin! failed to cash out")
        }
    })