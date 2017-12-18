function createGrid(gridSize) {
  let divNumber = 1;
  const container = document.querySelector(".container")
  container.style.setProperty("grid-template-rows", 'repeat(${gridSize}, 1fr)');
  container.style.setProperty("grid-template-columns", 'repeat(${gridSize}, 1fr)');


  
  for (let i = gridSize ** 2; i > 0; i--) {
    newPixel()
  }


  function newPixel(pixelSize) {
    const newPixel = document.createElement('div')
    newPixel.setAttribute('id', divNumber)
    newPixel.setAttribute('class', "divGrid")
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
