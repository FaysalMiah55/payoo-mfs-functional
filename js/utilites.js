// get input field
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

// get text field
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber
}

// toggle button field
function showSectionById(id){
    // hide all section id
    document.getElementById("add-money-form").classList.add('hidden')
    document.getElementById("cash-out-form").classList.add('hidden')
    document.getElementById("transaction-form").classList.add('hidden')
    // show the selected section
    document.getElementById(id).classList.remove('hidden')
}