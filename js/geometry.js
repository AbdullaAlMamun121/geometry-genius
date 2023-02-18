let increment = 0;
//  Catching value by functions
function getValueById(elementId) {
    const triangleInputField = document.getElementById(elementId);
    const triangleInputString = triangleInputField.value;
    const triangleInputValue = parseInt(triangleInputString);
    return triangleInputValue;

}
//  Geting Title using function
function titleElementValueById(elementId) {
    const triangleFieldName = document.getElementById(elementId);
    const triangleString = triangleFieldName.innerText;
    return triangleString;
}
// Getting multiplication value from function
function multiplicationValue(value1, value2) {
    const result = value1 * value2;
    return result;
}
// Set text in formula function
function setValueFormulaById(id, value) {
    const triangleB = document.getElementById(id);
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

// Select all card elements
  const cards = document.querySelectorAll('.hoverColor');

  // Function to generate a random color
  function getRandomColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  }

  // Store the original color of each card
  const originalColors = [];

  cards.forEach((hoverColor) => {
    originalColors.push(hoverColor.style.backgroundColor);
  });

  // Add event listeners for each card element
  cards.forEach((hoverColor, index) => {
    hoverColor.addEventListener('mouseenter', function() {
      // Set the color of the card to a random color
      hoverColor.style.backgroundColor = getRandomColor();
    });

    hoverColor.addEventListener('mouseleave', function() {
      // Restore the original color of the card
      hoverColor.style.backgroundColor = originalColors[index];
    });
  });

// Triangle calculation button
document.getElementById('triangle-calculate').addEventListener('click', function () {
    
    const triangleB = getValueById('triangle-input-b');
    const triangleH = getValueById('triangle-input-h');
    // validation condition
    if (isNaN(triangleB && triangleH) || (triangleB && triangleH) <= 0 || (triangleB && triangleH) === 'string' || (triangleB && triangleH === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('triangle-b', triangleB);
        setValueFormulaById('triangle-h', triangleH);
        const areaValue = 0.5 * multiplicationValue(triangleB, triangleH);

        const triangleTitle = titleElementValueById('triangle-title');
        displayValueById(increment, areaValue, triangleTitle);

    }
    fieldClear('triangle-input-b');
    fieldClear('triangle-input-h');


});

//  Rectangle calculation button
document.getElementById('rectangle-calculation').addEventListener('click', function () {
    
    const rectangleW = getValueById('rectangle-input-w');
    const rectangleL = getValueById('rectangle-input-l');
    if (isNaN(rectangleW && rectangleL) || (rectangleW && rectangleL) <= 0 || (rectangleW && rectangleL) === 'string' || (rectangleW && rectangleL === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('rectangle-w', rectangleW);
        setValueFormulaById('rectangle-l', rectangleL);
        const areaValue = multiplicationValue(rectangleW, rectangleL);

        const rectangleTitle = titleElementValueById('rectangle-title');
        displayValueById(increment, areaValue, rectangleTitle);
    }

    fieldClear('rectangle-input-w');
    fieldClear('rectangle-input-l');

});

// Parallelogram calculation button
document.getElementById('parallelogram-calculation').addEventListener('click', function () {
    
    const parallelogramB = getValueById('parallelogram-input-b');
    const parallelogramH = getValueById('parallelogram-input-h');
    // validation
    if (isNaN(parallelogramB && parallelogramH) || (parallelogramB && parallelogramH) <= 0 || (parallelogramB && parallelogramH) === 'string' || (parallelogramB && parallelogramH === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('parallelogram-b', parallelogramB);
        setValueFormulaById('parallelogram-h', parallelogramH);
        const areaValue = multiplicationValue(parallelogramB, parallelogramH);

        const parallelogramTitle = titleElementValueById('parallelogram-title');
        displayValueById(increment, areaValue, parallelogramTitle);
    }

    fieldClear('parallelogram-input-b');
    fieldClear('parallelogram-input-h');
});
// Rhombus calculation button
document.getElementById('rhombus-calculation').addEventListener('click', function () {
    
    const rhombusD1 = getValueById('rhombus-input-d1');
    const rhombusD2 = getValueById('rhombus-input-d2');
    // validation
    if (isNaN(rhombusD1 && rhombusD2) || (rhombusD1 && rhombusD2) <= 0 || (rhombusD1 && rhombusD2) === 'string' || (rhombusD1 && rhombusD2 === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('rhombus-b', rhombusD1);
        setValueFormulaById('rhombus-bb', rhombusD2);
        const areaValue = 0.5 * multiplicationValue(rhombusD1, rhombusD2);
        const rhombusTitle = titleElementValueById('rhombus-title');
        displayValueById(increment, areaValue, rhombusTitle);
    }

    fieldClear('rhombus-input-d1');
    fieldClear('rhombus-input-d2');

});

// Pentagon calculation
document.getElementById('pentagon-calculation').addEventListener('click', function () {
    
    const pentagonP = getValueById('pentagon-input-p');
    const pentagonB = getValueById('pentagon-input-b');
    // validation
    if (isNaN(pentagonP && pentagonB) || (pentagonP && pentagonB) <= 0 || (pentagonP && pentagonB) === 'string' || (pentagonP && pentagonB === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('pentagon-p', pentagonP);
        setValueFormulaById('pentagon-b', pentagonB);
        const areaValue = 0.5 * multiplicationValue(pentagonP, pentagonB);

        const pentagonTitle = titleElementValueById('pentagon-title');
        displayValueById(increment, areaValue, pentagonTitle);
    }

    fieldClear('pentagon-input-p');
    fieldClear('pentagon-input-b');

});

// Ellipse calculation
document.getElementById('ellipse-calculation').addEventListener('click', function () {
    
    const ellipseA = getValueById('ellipse-input-a');
    const ellipseB = getValueById('ellipse-input-b');
    // validation
    if (isNaN(ellipseA && ellipseB) || (ellipseA && ellipseB) <= 0 || (ellipseA && ellipseB) === 'string' || (ellipseA && ellipseB === '')) {
        alert('Please enter a valid value');
    } else {
        increment++;
        setValueFormulaById('ellipse-a', ellipseA);
        setValueFormulaById('ellipse-b', ellipseB);
        const areaValue = 3.14 * multiplicationValue(ellipseA, ellipseB);

        const ellipseTitle = titleElementValueById('ellipse-title');
        displayValueById(increment, areaValue, ellipseTitle);
    }

    fieldClear('ellipse-input-a');
    fieldClear('ellipse-input-b');

});

// common functions for display
function displayValueById(increment, value, name) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="p-1">${increment}</td>
    <td class="p-1">${name}</td>
    <td class="p-1">${value}<span>cm<sup>2</sup></span></td>
    <td><button class="btn btn-info py-0 size">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
}
