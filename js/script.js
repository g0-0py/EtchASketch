function createGrid(gridSize) {
  let divNumber = 0;
  const container = document.getElementById('grid-container');
  
  //logic to set grid element size
  pixelWidth = (600/gridSize-3).toString() + "px"
  pixelHeight = (600/gridSize-3).toString() + "px"

  for(let i = gridSize**2; i > 0; i--) {
    newDiv(pixelWidth, pixelHeight)
  }

  function newDiv(pixelWidth, pixelHeight) {
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id', divNumber)
    newDiv.setAttribute('class', "divGrid")
    newDiv.style.width = pixelWidth;
    newDiv.style.height = pixelHeight;
    container.appendChild(newDiv)
    divNumber++

    newDiv.addEventListener('mouseover', function(event) {
      event.target.style.background = 'black';
    });
  }
}

function destroyGrid() {
  const container = document.getElementById('grid-container');

  while(container.firstchild != 'null') {
  container.removeChild(container.firstChild);
  }
}