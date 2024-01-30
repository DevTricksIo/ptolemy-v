function goToRandomLanguagePage(){
    const select = document.querySelector('#language-select' );

    var options = [...select.options];
    let keys = options.map(e => e.value);
    var randIndex = Math.floor(Math.random() * keys.length);
    var randKey = keys[randIndex];

    redirectToLangTagSite(randKey);
}

function redirectToLangTagSite(langTag) {
    if (langTag) {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.replace(/\/[a-zA-Z-]+\/$/, '/');
        window.location.href = currentUrl + langTag + '/';
    }
}