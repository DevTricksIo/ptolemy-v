const translationsArray = Object.values(translations);

const languageSelect = document.getElementById('language-select');
const quoteText = document.querySelector('.quote-text');
const quoteReference = document.querySelector('.quote-reference');

document.addEventListener('DOMContentLoaded', function () {

    // if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    //     window.location.replace('/?lang=en');
    // }

    let lang = detectLanguageFromURL();

    document.title = translations[lang].title;
    document.documentElement.setAttribute("lang", lang);

    quoteText.textContent = translations[lang].quote;
    quoteReference.textContent = translations[lang].reference;

    populateOptions();
    languageSelect.value = lang;


    if(translations[lang].direction !== 'ltr'){
        document.body.style.writingMode = translations[lang].direction;
    } 
});

function populateOptions() {

    var selectElement = document.getElementById('language-select');

    translationsArray.forEach(function (language) {
        var optionElement = document.createElement("option");
        optionElement.value = language.code;
        optionElement.textContent = language.lang;
        selectElement.appendChild(optionElement);
    });
}

function changeLanguageParam(lang) {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    url.searchParams.set('lang', lang);
    const newUrl = url.toString();

    if (currentUrl === newUrl) {
        return;
    }
    window.location.href = newUrl;
}

function detectLanguageFromURL() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const lang = url.searchParams.get('lang');

    if (lang) {
        return lang;
    } else {
        return 'en';
    }
}

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;

    const codes = translationsArray.map(i => i.code);

    if (codes.includes(selectedLanguage)) {

        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        url.searchParams.set('lang', selectedLanguage);
        const newUrl = url.toString();

        window.location.href = newUrl;
    }
});