function createGrid(gridSize) {
  let divNumber = 0;
  const container = document.getElementById('grid-container');
  
  //logic to set grid element size
  pixelSize = (600/gridSize-3).toString() + "px"

  for(let i = gridSize**2; i > 0; i--) {
    newPixel(pixelSize)
  }

  function newPixel(pixelSize) {
    var newPixel = document.createElement('div')
    newPixel.setAttribute('id', divNumber)
    newPixel.setAttribute('class', "divGrid")
    newPixel.style.height = pixelSize
    newPixel.style.width = pixelSize
    container.appendChild(newPixel)
    divNumber++

    newPixel.addEventListener('mouseover', function(event) {
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
