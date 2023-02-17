// Triangular functions
function triangleGetValueById(elementId) {
    const triangleInputField = document.getElementById(elementId);
    const triangleInputString = triangleInputField.value;
    const triangleInputValue = parseInt(triangleInputString);
    return triangleInputValue;

}
// triangle-title
function triangleElementValueById(elementId) {
    const triangleFieldName = document.getElementById(elementId);
    const triangleString = triangleFieldName.innerText;
    return triangleString;
}

// Triangle calculation button
document.getElementById('triangle-calculate').addEventListener('click', function () {
    
    const triangleB = triangleGetValueById('triangle-input-b');
    const triangleH = triangleGetValueById('triangle-input-h');
    const areaValue = 0.5 * triangleB * triangleH;

   const triangleTitle = triangleElementValueById('triangle-title');
    displayValueById(areaValue, triangleTitle);

});


// common functions for display
function displayValueById(name,value) {
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
     <tbody>
    <td class="p-3">${1}</td>
    <td class="p-3">${name}</td>
    <td class="p-3">${value}</td>
    <td><button class="btn btn-info py-0 size">Convert to m<sup>2</sup> </button></td>
    `
    container.appendChild(tr);
 }
    