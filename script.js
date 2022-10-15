let apiTab = [];

function newQuote() {
    let quote = apiTab[Math.floor(Math.random() * apiTab.length)];
    console.log(quote);
}

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiTab = await response.json();
        newQuote();
    } catch(error) {
        // handling error
    }
}

getQuotes();