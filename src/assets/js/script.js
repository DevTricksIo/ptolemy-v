const languageSelect = document.getElementById('language-select');
const quoteText = document.querySelector('.quote-text');
const quoteReference = document.querySelector('.quote-reference');

function setLanguage(language) {
    quoteText.textContent = quotes[language].quote;
    quoteReference.textContent = quotes[language].reference;
}

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    setLanguage(selectedLanguage);
});

// function randomLanguage() {
//     const languages = Object.keys(quotes);
//     const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
//     setLanguage(randomLanguage);
// }

//setInterval(randomLanguage, 60000);


/** original acima */


document.addEventListener('DOMContentLoaded', function () {

    const language = navigator.language || navigator.userLanguage;


    language_attributes

    console.log(`O idioma do navegador é: ${language}`);

    alert(language);


});

function setQuoteReference(text){
    const quoteReference = document.querySelector('.quote-reference');
    quoteReference.textContent = text;
}

function setQuote(text){
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = text;
}

function setTitlePage(title){
    document.documentElement.title = title;
}

function setLanguageAttributes(language){
    document.documentElement.lang = language;
}