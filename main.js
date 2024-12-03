// TASK 1

const favouriteSongs = [
    "Tiny Dancer",
    "Running Up That Hill",
    "Don't Stop Moving",
    "Tragedy",
];

let profit = [1];
while (profit.length < 7) {
    profit.push(profit.at(-1)*2);
}

// can I do this with recursion? Gonna come back to this
//function halve(aNumber) {}

// for the friends one, I want to specify the schema!! But not sure if / where I should
let friend = {
    name: null,
    special_skill: null,
}

let friends = [
    {
        name: "Chris",
        special_skill: "changing lives",
    },
    {
        name: "Lizzie",
        special_skill: "being friendly",
    },
    {
        name: "Ben",
        special_skill: "code rapping",
    },
    {
        name: "Tao",
        special_skill: "hand raising",
    },
    {
        name: "Liz",
        special_skill: "crochet",
    },
    {
        name: "Patrick",
        special_skill: "Call of Duty",
    },
    {
        name: "Tim",
        special_skill: "analogies",
    },
    {
        name: "James",
        special_skill: "friendship",
    },
    {
        name: "Joseph",
        special_skill: "being positive",
    },
    {
        name: "Max",
        special_skill: "papier-mâché",
    },
];


// TASK 2
// (Not sure what "for each person" means; I've just done it for me)
let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(`I was born in ${options[3]}`);
  console.log(`My mother was born in ${options[6]}`);
  console.log(`My favourite month is ${options[0]}`);


// TASK 3

let englishNumbers = ["one", "two", "three", "four", "five"];

console.log("With a while loop");
let i = 0
while (i < englishNumbers.length) {
    console.log(englishNumbers[i]);
    i++;
}

// TASK 4
console.log("With a for loop");
for (i = 0; i < englishNumbers.length; i++ ) {
    console.log(englishNumbers[i]);
}

// TASK 5
let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here
for (i = 0; i < words.length; i++){
    words[i] = words[i] += 't';
}
console.log(words);

//TASK 6: I did my experimenting in the (previous) objects task!
