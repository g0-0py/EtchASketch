const gridButton = document.getElementById('gridButton');
gridButton.addEventListener('mouseover', function(event) {});

function createGrid(gridSize) {
  let pixelNumber = 1;
  const container = document.getElementById('gridContainer');
  container.style.setProperty("--gridSize", gridSize);

  //This'll clear our grid if the user resets it
  if(container.innerHTML != ""){
    container.innerHTML = "";
  }
  


  
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
  
}

