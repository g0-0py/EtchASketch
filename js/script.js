function createGrid(gridSize) {
  const container = document.createElement('div')
  container.setAttribute('class', "container");
  container.setAttribute('id', "grid-container");
  document.body.appendChild(container)

  let divNumber = 0;

  for (let i = 0; i < gridSize; i++) {
    
    newDiv();
  }
  

  function newDiv(){
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id', divNumber)
    newDiv.setAttribute('class', "divGrid")
    container.appendChild(newDiv)
    divNumber++
  }
}