console.log('LOOPS');
console.log(''); //break console

const colors = ['red', 'yellow', 'green', 'blue', 'pink'];

const colorLoop = () => {
  let domString = '';
  for(let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`;
  };
  console.log(domString);
};

colorLoop();
console.log(''); //break console

const instructors = [
  {first: 'zoe', last: 'ames'},
  {first: 'mary', last: 'west'},
  {first: 'luke', last: 'lancaster'},
];

const nameLoop = () => {
  let nameString = '';
  for(let i = 0; i < instructors.length; i++) {
    nameString += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`;
  }
  

};

nameLoop();

