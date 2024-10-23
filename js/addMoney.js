
document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault()

        const addMoney = getInputFieldValueById("input-money")
        const pinNumber = getInputFieldValueById("input-pin-number")

        if(isNaN(addMoney)){
            alert('failed to add money');
            return
        }

        if(pinNumber === 1234){
            // add money
            const balance = getTextFieldValueById("account-balance") 
            const newBalance = balance + addMoney

            document.getElementById("account-balance").innerText = newBalance

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} tk. New Balance: ${newBalance}`;
            console.log(p);

            document.getElementById("transaction-container").appendChild(p)
        }
        else{
            alert("wrong pin! failed to add money")
        }
    })