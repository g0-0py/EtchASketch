function createGrid(gridSize) {
  let divNumber = 0;
  const container = document.getElementById('grid-container');
  
  // add logic to set grid element size (w/h)

  for (let i = gridSize ** 2; i > 0; i--) {
    newDiv();
  }
  

  function newDiv() {
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id', divNumber)
    newDiv.setAttribute('class', "divGrid")
    newDiv.setAttribute('width' pixelWidth);
    newDiv.setAttribute('height' pixelHeight)
    container.appendChild(newDiv)
    divNumber++
  }
}