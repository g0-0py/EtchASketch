function createGrid(gridSize) {
  let pixelNumber = 1;
  const container = document.querySelector(".container")
  
  container.style.setProperty("--gridSize", gridSize);


  
  for (let i = gridSize ** 2; i > 0; i--) {
    newPixel()
  }


  function newPixel(pixelSize) {
    const newPixel = document.createElement('div')
    newPixel.setAttribute('id', pixelNumber)
    newPixel.setAttribute('class', "divGrid")
    container.appendChild(newPixel)
    pixelNumber++

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

