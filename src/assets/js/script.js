const translationsArray = Object.values(translations);

const languageSelect = document.getElementById('language-select');

const quoteContainer = document.getElementById('quote-container');

const img = document.querySelector("quote-container img");

const quoteText = document.querySelector('.quote-text');
const quoteReference = document.querySelector('#quote-container footer');

document.addEventListener('DOMContentLoaded', function () {

    // if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    //     window.location.replace('/?lang=en');
    // }

    let langtag = detectLanguageFromURL();

    document.title = translations[langtag].title;
    document.documentElement.setAttribute("lang", langtag);

    quoteText.textContent = translations[langtag].quote;
    quoteReference.textContent = translations[langtag].reference;

    populateOptions();
    languageSelect.value = langtag;


    if (translations[langtag].direction.includes('vertical')) {
        document.body.classList.add('vertical-layout');
    }

    document.body.classList.add(translations[langtag].direction);


    changeFont(langtag);
});

function populateOptions() {

    var selectElement = document.getElementById('language-select');

    translationsArray.forEach(function (language) {
        var optionElement = document.createElement("option");
        optionElement.value = language.langtag;
        optionElement.textContent = `${language.langEnglish} - ${language.lang}`;
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

    const langtags = translationsArray.map(i => i.langtag);

    if (langtags.includes(selectedLanguage)) {

        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        url.searchParams.set('lang', selectedLanguage);
        const newUrl = url.toString();

        window.location.href = newUrl;
    }
});

function changeFont(langtag) {

    if (translations[langtag].font && translations[langtag].font.sourceType === 'url') {

        var link = document.createElement("link");

        // Atribuir os atributos
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = translations[langtag].font.url;

        // Inserir o elemento no cabeçalho
        document.head.appendChild(link);

        if (translations[langtag].fontFamily) {
            quoteContainer.style.fontFamily = translations[langtag].fontFamily;
        }


    }
}

function getRandLanguageKey() {
    // Obter todas as chaves (códigos de língua) do objeto translations
    var keys = Object.keys(translations);

    // Gerar um número aleatório entre 0 e o número de chaves - 1
    var randIndex = Math.floor(Math.random() * keys.length);

    // Usar o número aleatório para obter uma chave aleatória
    var randKey = keys[randIndex];

    // Retornar a chave aleatória
    alert(randKey)
    return randKey;

}