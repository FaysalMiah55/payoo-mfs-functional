
document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault()

        const addMoney = getInputFieldValueById("input-money")
        const pinNumber = getInputFieldValueById("input-pin-number")

        if(pinNumber === 1234){
            // add money
            const balance = getTextFieldValueById("account-balance") 
            const newBalance = balance + addMoney

            document.getElementById("account-balance").innerText = newBalance
        }
        else{
            alert("wrong pin! failed to add money")
        }
    })