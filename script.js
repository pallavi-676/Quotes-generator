const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "An unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        text: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Winning isn't everything, but wanting to win is.",
        author: "Vince Lombardi"
    },
    {
        text: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author: "Anne Frank"
    },
    {
        text: "I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back.",
        author: "Malala Yousafzai"
    },
    {
        text: "Women belong in all places where decisions are being made. It shouldn't be that women are the exception.",
        author: "Ruth Bader Ginsburg"
    },
    {
        text: "I am a feminist. I've been a female for a long time now. It'd be stupid not to be on my own side.",
        author: "Maya Angelou"
    },
    {
        text: "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength.",
        author: "G.D. Anderson"
    },
    {
        text: "There is no limit to what we, as women, can accomplish.",
        author: "Michelle Obama"
    },
    {
        text: "A feminist is anyone who recognizes the equality and full humanity of women and men.",
        author: "Gloria Steinem"
    },
    {
        text: "To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.",
        author: "Hillary Clinton"
    },
    {
        text: "We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead.",
        author: "Beyoncé"
    },
    {
        text: "I do not wish women to have power over men; but over themselves.",
        author: "Mary Wollstonecraft"
    },
    {
        text: "The question isn't who's going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    }
];

// Select the necessary DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

let currentQuoteIndex = 1; // Start with index 1 because index 1 matches the hardcoded HTML

function generateRandomQuote() {
    // Prevent getting the same quote twice in a row for a better user experience
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex);

    // Update the current index
    currentQuoteIndex = randomIndex;
    const randomQuote = quotes[randomIndex];

    // Add CSS class to initiate the fade-out and slide-down effect
    quoteText.classList.add('fade');
    quoteAuthor.classList.add('fade');

    // Wait for the fade-out transition to complete before replacing the text
    setTimeout(() => {
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;

        // Remove the fade class to trigger the fade-in effect organically via CSS logic
        quoteText.classList.remove('fade');
        quoteAuthor.classList.remove('fade');
    }, 400); // Wait 400ms matching the transition time in style.css
}

// Attach event listener to the generate button
generateBtn.addEventListener('click', generateRandomQuote);
