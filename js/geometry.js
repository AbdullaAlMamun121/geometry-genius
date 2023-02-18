let incriment = 0;
// Triangular catching value functions
function getValueById(elementId) {
    const triangleInputField = document.getElementById(elementId);
    const triangleInputString = triangleInputField.value;
    const triangleInputValue = parseInt(triangleInputString);
    return triangleInputValue;

}
// Triangle geting Title function
function titleElementValueById(elementId) {
    const triangleFieldName = document.getElementById(elementId);
    const triangleString = triangleFieldName.innerText;
    return triangleString;
}

// Triangle calculation button
document.getElementById('triangle-calculate').addEventListener('click', function () {
    incriment++;
    const triangleB = getValueById('triangle-input-b');
    const triangleH = getValueById('triangle-input-h');
    const areaValue = 0.5 * triangleB * triangleH;

   const triangleTitle = titleElementValueById('triangle-title');
    displayValueById(incriment,areaValue, triangleTitle);

});

// Rectangle calculation button
document.getElementById('rectangle-calculation').addEventListener('click', function () {
    incriment++;
    const rectangleW = getValueById('rectangle-input-w');
    const rectangleL = getValueById('rectangle-input-l');
    const areaValue =  rectangleW * rectangleL;

   const rectangleLTitle = titleElementValueById('rectangle-title');
    displayValueById(incriment,areaValue, rectangleLTitle);

});
// common functions for display
function displayValueById(incriment,value,name) {
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="p-2">${incriment}</td>
    <td class="p-2">${value}<span>cm<sup>2</sup></span></td>
    <td class="p-1">${name}</td>
    <td><button class="btn btn-info py-0 size">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
 }
    