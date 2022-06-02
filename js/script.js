/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    source: "Henry Ford",
    citation: null,
    year: null,
    tags: ["inspirational", "attitude"]
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: null,
    year: null,
    tags: ["wisdom", "impactful", "change"]
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    citation: null,
    year: null,
    tags: ["inspirational", "motivational", "ambition"] 
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump",
    citation: "Forrest Gump",
    year: 1994,
    tags: ["film", "wisdom"]
  },
  {
    quote: "Do or do not, there is no try.",
    source: "Yoda",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    tags: ["film", "motivational", "attitude"]
  },
]


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => quotes[Math.floor(Math.random() * arr.length)];
const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

/***
 * `printQuote` function
***/

const createElement = (elementName, property = null, value = null) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
};

const printQuote = () => {
  const quoteBox = document.querySelector("#quote-box");
  quoteBox.innerHTML = '';
  document.querySelector("body").style.backgroundColor = '#' + randomColor();
  const randomQuote = getRandomQuote(quotes);
  const objQuote = createElement("p", "className", "quote");
  const objSource = createElement("p", "className", "source");
  objQuote.textContent = randomQuote.quote;
  objSource.textContent = randomQuote.source;
  if (randomQuote.citation) {
    const objCite = createElement("span", "className", "citation");
    objCite.textContent = randomQuote.citation;
    objSource.appendChild(objCite);
  }
  if (randomQuote.year) {
    const objYear = createElement("span", "className", "year");
    objYear.textContent = randomQuote.year;
    objSource.appendChild(objYear);
  }
  quoteBox.appendChild(objQuote);
  quoteBox.appendChild(objSource);
  if (randomQuote.tags) {
    const objTags = createElement("p", "className", "tags")
    objTags.textContent = `Tags: ${randomQuote.tags.join(", ")}`;
    quoteBox.appendChild(objTags);
  }
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

setInterval(printQuote, 10000)

document.getElementById('load-quote').addEventListener("click", printQuote, false);



// Unused Function (My Notes)
//
// const printQuote = () => {
//   const randomQuote = getRandomQuote(quotes);
//   for (key in randomQuote) {
//     document.querySelector(`.${key}`).textContent = randomQuote[key];
//   }
// };