document.getElementById("btn-cash-out")
    .addEventListener('click', function(event){
        event.preventDefault()

        // withdraw money
        const withdrawMoney = getInputFieldValueById("input-cash-out")
        const pinNumber = getInputFieldValueById("input-cash-out-pin")

        if(isNaN(withdrawMoney)){
            alert('Failed to add money');
            return
        }

        if(pinNumber === 1234){
            const balance = getTextFieldValueById("account-balance")

            if(withdrawMoney > balance){
                alert("You do not have enough money");
                return
            }

            const newBalance = balance - withdrawMoney
            
            document.getElementById("account-balance").innerText = newBalance

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-red-300');
            div.innerHTML = `
                <h4 class="text-xl font-bold">Cash Out</h4>
                <p> ${withdrawMoney} withdraw. New Balance ${newBalance}</p>
            `

            document.getElementById("transaction-container").appendChild(div);
        }
        else{
            alert("wrong pin! failed to cash out")
        }
    })