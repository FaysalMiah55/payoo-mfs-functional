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