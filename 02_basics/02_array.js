const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

//marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];
//console.log(allNewHeros);

// const anotherArry = [1, 2, 3,[4, 5, 6], 7, [5, 7,[4, 5]]];
// const realAnotherArray = anotherArry.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Vishal Shukla"));
console.log(Array.from("Vishal Shukla"));
console.log(Array.from({name: "vishal"})); //Intresting point

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
