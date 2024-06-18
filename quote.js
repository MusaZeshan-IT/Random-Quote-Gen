const quotes = [
    {
        quote: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
        bgColor: ['bg-gradient-to-r', 'from-violet-800', 'to-stone-800']
    },
    {
        quote: 'Life is what happens when you are busy making other plans.',
        author: 'John Lenon',
        bgColor: ['bg-gradient-to-r', 'from-blue-600', 'to-violet-600'],
    },
    {
        quote: 'Get busy living or get busy dying.',
        author: 'Stephen King',
        bgColor: ['bg-gradient-to-r', 'from-fuchsia-500', 'to-cyan-500'],
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
        bgColor: ['bg-gradient-to-r', 'from-purple-500', 'to-purple-900'],
    },
    {
        quote: 'Many of life failures are people who did not realize how close they were to success when they gave up.',
        author: 'Thomas A. Edison',
        bgColor: ['bg-gradient-to-r', 'from-indigo-600', 'to-slate-800'],
    },
    {
        quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author: 'Albert Einstein',
        bgColor: ['bg-gradient-to-r', 'from-slate-500', 'to-slate-800'],
    },
    {
        quote: 'Never let the fear of striking out keep you from playing the game.',
        author: 'Babe Ruth',
        bgColor: ['bg-gradient-to-r', 'from-red-500', 'to-orange-500'],
    },
    {
        quote: 'Money and success do not change people; they merely amplify what is already there.',
        author: 'Will Smith',
        bgColor: ['bg-gradient-to-r', 'from-slate-900', 'to-slate-700'],
    },
]

// Generating a random index number and getting a specific quote object.
const randomIndex = Math.floor(Math.random() * quotes.length);
const quoteObj = quotes[randomIndex];

// Setting the author and the quote to that quote and author which got selected.
document.querySelector('.quote').innerHTML = quoteObj.quote;
document.querySelector('.author').innerHTML = quoteObj.author;

// Setting the bgColorElement to the div that has full screen size height and width and adding a class.
const bgColorElement = document.querySelector('.js-main');

// Removing all the previous classes from the element.
while (bgColorElement.classList.length > 0) {
    bgColorElement.classList.remove(bgColorElement.classList.item(0));
}

// Adding new classes
bgColorElement.classList.add('h-screen', 'w-screen', 'js-main');
const colorClasses = quoteObj.bgColor
for (let i = 0; i < colorClasses.length; i++) {
    const currentClass = colorClasses[i];
    bgColorElement.classList.add(currentClass)
    console.log(currentClass);
}

const getQuote = function () {
    // Generating a random index number and getting a specific quote object.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObj = quotes[randomIndex];

    // Setting the author and the quote to that quote and author which got selected.
    document.querySelector('.quote').innerHTML = quoteObj.quote;
    document.querySelector('.author').innerHTML = quoteObj.author;

    // Setting the bgColorElement to the div that has full screen size height and width and adding a class.
    const bgColorElement = document.querySelector('.js-main');

    // Removing all the previous classes from the element.
    while (bgColorElement.classList.length > 0) {
        bgColorElement.classList.remove(bgColorElement.classList.item(0));
    }

    // Adding new classes
    bgColorElement.classList.add('h-screen', 'w-screen', 'js-main');
    const colorClasses = quoteObj.bgColor
    for (let i = 0; i < colorClasses.length; i++) {
        const currentClass = colorClasses[i];
        bgColorElement.classList.add(currentClass)
    }
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(`\"${quoteObj.quote}\" \n-${quoteObj.author}`),
        "Tweet Window", "width=600, height=300")
}
