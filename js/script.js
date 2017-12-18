this.onLoad(createGrid())

const gridButton = document.getElementById('gridButton');

gridButton.addEventListener('mouseover', function(event) {

});


function createGrid() {
  let pixelNumber = 1;
  const container = document.getElementById('gridContainer');
  const gridSize = (document.getElementById('sizeChoice').value)
  if(gridSize > 99) {alert("This hasn't been tested with grid sizes above 100. You're entering uncharted territory");}

  if(container.innerHTML != ""){container.innerHTML = "";}
  
  container.style.setProperty("--gridSize", gridSize);
  container.style.setProperty("--gridGap", gridSize < 41 ? "1px" : 0);

  //This'll clear our grid if the user resets it
  
  
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
