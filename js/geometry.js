let incriment = 0;
//  catching value functions
function getValueById(elementId) {
    const triangleInputField = document.getElementById(elementId);
    const triangleInputString = triangleInputField.value;
    const triangleInputValue = parseInt(triangleInputString);
    return triangleInputValue;

}
//  geting Title function
function titleElementValueById(elementId) {
    const triangleFieldName = document.getElementById(elementId);
    const triangleString = triangleFieldName.innerText;
    return triangleString;
}
// Getting multiplication value
function multiplicationValue(value1, value2) {
    const result = value1 * value2;
    return result;
}

// Triangle calculation button
document.getElementById('triangle-calculate').addEventListener('click', function () {
    incriment++;
    const triangleB = getValueById('triangle-input-b');
    const triangleH = getValueById('triangle-input-h');
    const areaValue = 0.5 * multiplicationValue(triangleB ,triangleH);

   const triangleTitle = titleElementValueById('triangle-title');
    displayValueById(incriment,areaValue, triangleTitle);

});

//  Rectangle calculation button
    document.getElementById('rectangle-calculation').addEventListener('click', function () {
        incriment++;
        const rectangleW = getValueById('rectangle-input-w');
        const rectangleL = getValueById('rectangle-input-l');
        const areaValue = multiplicationValue (rectangleW , rectangleL);
    
       const rectangleTitle = titleElementValueById('rectangle-title');
        displayValueById(incriment,areaValue, rectangleTitle);
    
    });

    // Parallelogram calculation button
    document.getElementById('parallelogram-calculation').addEventListener('click', function () {
        incriment++;
        const parallelogramB = getValueById('parallelogram-input-b');
        const parallelogramH = getValueById('parallelogram-input-h');
        const areaValue =  multiplicationValue(parallelogramB ,parallelogramH);
    
       const parallelogramTitle = titleElementValueById('rectangle-title');
        displayValueById(incriment,areaValue, parallelogramTitle);
    
    });
    // Rhombus calculation button
    document.getElementById('rhombus-calculation').addEventListener('click', function () {
        incriment++;
        const rhombusD1 = getValueById('rhombus-input-d1');
        const rhombusD2 = getValueById('rhombus-input-d2');
        const areaValue = 0.5 * multiplicationValue(rhombusD1 ,rhombusD2);
    
       const rhombusTitle = titleElementValueById('rhombus-title');
        displayValueById(incriment,areaValue, rhombusTitle);
    
    });

    // pentagon-calculation
    document.getElementById('pentagon-calculation').addEventListener('click', function () {
        incriment++;
        const pentagonP = getValueById('pentagon-input-p');
        const pentagonB = getValueById('pentagon-input-b');
        const areaValue = 0.5 * multiplicationValue(pentagonP ,pentagonB);
    
       const pentagonTitle = titleElementValueById('pentagon-title');
        displayValueById(incriment,areaValue, pentagonTitle);
    
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
    