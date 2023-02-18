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
// Set text in formula function
function setValueFormulaById(id,value) {
   const triangleB =  document.getElementById(id);
    const triangleH = document.getElementById(id);
    triangleB.innerText = value;
    triangleH.innerText = value;
}
// Field clear function
function fieldClear(id) {
    const inputField1 = document.getElementById(id);
    const inputField2 = document.getElementById(id);
    inputField1.value = '';
    inputField2.value = '';

}

// Triangle calculation button
document.getElementById('triangle-calculate').addEventListener('click', function () {
    incriment++;
   
    const triangleB = getValueById('triangle-input-b');
    const triangleH = getValueById('triangle-input-h');
    setValueFormulaById('triangle-b', triangleB);
    setValueFormulaById('triangle-h', triangleH);
    const areaValue = 0.5 * multiplicationValue(triangleB ,triangleH);

   const triangleTitle = titleElementValueById('triangle-title');
    displayValueById(incriment, areaValue, triangleTitle);
    fieldClear('triangle-input-b');
    fieldClear('triangle-input-h');
});

//  Rectangle calculation button
    document.getElementById('rectangle-calculation').addEventListener('click', function () {
        incriment++;
        const rectangleW = getValueById('rectangle-input-w');
        const rectangleL = getValueById('rectangle-input-l');
        setValueFormulaById('rectangle-w', rectangleW);
        setValueFormulaById('rectangle-l', rectangleL);
        const areaValue = multiplicationValue (rectangleW , rectangleL);
    
       const rectangleTitle = titleElementValueById('rectangle-title');
        displayValueById(incriment, areaValue, rectangleTitle);
        
        fieldClear('rectangle-input-w');
        fieldClear('rectangle-input-l');
    
    });

    // Parallelogram calculation button
    document.getElementById('parallelogram-calculation').addEventListener('click', function () {
        incriment++;
        const parallelogramB = getValueById('parallelogram-input-b');
        const parallelogramH = getValueById('parallelogram-input-h');
        setValueFormulaById('parallelogram-b', parallelogramB);
        setValueFormulaById('parallelogram-h', parallelogramH);
        const areaValue =  multiplicationValue(parallelogramB ,parallelogramH);
    
       const parallelogramTitle = titleElementValueById('parallelogram-title');
        displayValueById(incriment,areaValue, parallelogramTitle);
        fieldClear('parallelogram-input-b');
        fieldClear('parallelogram-input-h');
    });
    // Rhombus calculation button
    document.getElementById('rhombus-calculation').addEventListener('click', function () {
        incriment++;
        const rhombusD1 = getValueById('rhombus-input-d1');
        const rhombusD2 = getValueById('rhombus-input-d2');
        setValueFormulaById('rhombus-b', rhombusD1);
        setValueFormulaById('rhombus-bb', rhombusD2);

        const areaValue = 0.5 * multiplicationValue(rhombusD1 ,rhombusD2);
    
       const rhombusTitle = titleElementValueById('rhombus-title');
        displayValueById(incriment, areaValue, rhombusTitle);
        
        fieldClear('rhombus-input-d1');
        fieldClear('rhombus-input-d2');
    
    });

    // Pentagon calculation
    document.getElementById('pentagon-calculation').addEventListener('click', function () {
        incriment++;
        const pentagonP = getValueById('pentagon-input-p');
        const pentagonB = getValueById('pentagon-input-b');
        setValueFormulaById('pentagon-p', pentagonP);
        setValueFormulaById('pentagon-b', pentagonB);
        const areaValue = 0.5 * multiplicationValue(pentagonP ,pentagonB);
    
       const pentagonTitle = titleElementValueById('pentagon-title');
        displayValueById(incriment, areaValue, pentagonTitle);
        
        fieldClear('pentagon-input-p');
        fieldClear('pentagon-input-b');
    
    });

    // Ellipse calculation
    document.getElementById('ellipse-calculation').addEventListener('click', function () {
        incriment++;
        const ellipseA = getValueById('ellipse-input-a');
        const ellipseB = getValueById('ellipse-input-b');
        setValueFormulaById('ellipse-a', ellipseA);
        setValueFormulaById('ellipse-b', ellipseB);
        const areaValue = 3.14 * multiplicationValue(ellipseA ,ellipseB);
    
       const ellipseTitle = titleElementValueById('ellipse-title');
        displayValueById(incriment, areaValue, ellipseTitle);
        
        fieldClear('ellipse-input-a');
        fieldClear('ellipse-input-b');

    
    });

// common functions for display
function displayValueById(incriment,value,name) {
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="p-1">${incriment}</td>
    <td class="p-1">${name}</td>
    <td class="p-1">${value}<span>cm<sup>2</sup></span></td>
    <td><button class="btn btn-info py-0 size">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
 }
    