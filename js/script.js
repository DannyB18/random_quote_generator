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
    citation: "",
    year: null
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "",
    year: null
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    citation: "",
    year: null
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump",
    citation: "Forrest Gump",
    year: 1994
  },
  {
    quote: "Do or do not, there is no try.",
    source: "Yoda",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
]


/***
 * `getRandomQuote` function
***/

const randomArrayIndex = (arrLength) => Math.floor(Math.random() * arrLength);
const getRandomQuote = (arr) => quotes[randomArrayIndex(arr.length)];

/***
 * `printQuote` function
***/

// const quoteArea = document.querySelector('.quote');
// const sourceArea = document.querySelector('.source');
// const citationArea = document.querySelector('.citation');
// const yearArea = document.querySelector('.year');

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  for (key in randomQuote) {
    document.querySelector(`.${key}`).textContent = randomQuote[key];
    console.log(randomQuote);
  }
  sourceArea
  // quoteArea.textContent = randomQuote.quote;
  // sourceArea.textContent = randomQuote.source;
  // citationArea.textContent = randomQuote.citation;
  // yearArea.textContent = randomQuote.year;
  // console.log(quote);
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);