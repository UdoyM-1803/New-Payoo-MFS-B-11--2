function getInputValueByID(id) {
    const inputValue = document.getElementById(id).value;
    const numInputValue = parseFloat(inputValue);
    return numInputValue;
}

function getInputStringByID(id) {
    const stringValue = document.getElementById(id).value;
    return stringValue;
}

function getInnerTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const numTextValue = parseFloat(textValue);
    return numTextValue;
}

function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}