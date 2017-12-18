this.onLoad(createGrid())

const gridButton = document.getElementById('gridButton');
gridButton.addEventListener('mouseover', function(event) {});

function createGrid() {
  let pixelNumber = 1;
  const container = document.getElementById('gridContainer');
  const gridSize = (document.getElementById('sizeOpt').value)
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

/* Event listener to toggle pixel border. May enable this at some point.

const borderToggle = document.getElementById('borderToggle');
borderToggle.addEventListener('click', function(event) {
  const divGrid = document.getElementsByClassName('divGrid');
  if(borderToggle.checked == false) {
    divGrid.style.setProperty("border", 'none');
    } else if (bordertoggle.checked == true) {
    divGrid.style.setProperty("border", '1px solid darkgray');
    }
});

*/
