
document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault()
        console.log("add money");

        const addMoney = getInputFieldValueById("input-money")
        const pinNumber = getInputFieldValueById("input-pin-number")
        console.log(addMoney, pinNumber);
    })