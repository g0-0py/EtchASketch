this.onLoad(createGrid())

const gridButton = document.getElementById('gridButton');

gridButton.addEventListener('mouseover', function(event) {

});


function createGrid() {
  let pixelNumber = 1;
  const container = document.getElementById('gridContainer');
  const gridSize = (document.getElementById('sizeChoice').value)

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
      const userColor = document.getElementById('colorChoice');
      event.target.style.background = userColor.value;

    });
  }
}

function destroyGrid() {
  
}

