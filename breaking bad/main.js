let refreshButton = document.getElementById("refreshButton");
let quoteHolder = document.getElementById('quote-place')
let authorHolder = document.getElementById('author')
let quotes;

//fetch the api 
async function getQuotes(){
    let response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/10");
    quotes = await response.json()
    /** saleh code */
    // Create an object
    const quote = {
        content: quotes[0].quote,
        author:  quotes[0].author
    }

    console.log(quote.content)
    console.log(quote.author)
    quoteHolder.innerHTML = quote.content
    authorHolder.innerHTML = quote.author

} 

getQuotes()


refreshButton.addEventListener('click', function(){
    //Generate a quote
    pickRadom = Math.floor(Math.random() * 10);
    const quote = {
        content: quotes[pickRadom].quote,
        author:  quotes[pickRadom].author
    }
        
    console.log("hello")
    quoteHolder.innerHTML = quote.content
    authorHolder.innerHTML = quote.author
})