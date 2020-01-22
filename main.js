console.log('DOM loops');
console.log(''); //break 

const dinosaurs = [
  {type: 'T-rex', name: 'Wrex'},
  {type: 'Stegosaurus', name: 'Steve'},
  {type: 'Velociraptor', name: 'Ted'},
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurCards = () => {
  let domString = '';
  for (let i = 0; i < dinosaurs.length; i++) {
    domString += '<div class="dinosaur">';
    domString +=    `<h3>${dinosaurs[i].type}</h3>`;
    domString +=    `<p>Name: ${dinosaurs[i].name}</p>`;
    domString += '</div>';
  }
  printToDom('dino-barn', domString);
  // make a change
};

buildDinosaurCards();