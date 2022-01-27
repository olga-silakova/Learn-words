

// document.querySelectorAll(td)
const cells = document.getElementsByTagName('td');
for (const cell of cells) {
    cell.innerHTML = '<img><br><button>?</button>'
    const img = cell.getElementsByTagName('img')[0]
    const word = cell.getAttribute('word')
    img.setAttribute('src', './' + word + '.jpg')
}

function clickHandler(e) {
    el = e.target;
    if (el.tagName === 'IMG') {
        const word = el.parentElement.getAttribute('word')
        console.log({ word });
        var msg = new SpeechSynthesisUtterance(word);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }

    if (el.tagName === 'BUTTON') {
        const word = el.parentElement.getAttribute('word')

        if (el.innerHTML === word) {
            el.innerHTML = "?"
        } else {
            el.innerHTML = word
        }
    }


}

document.addEventListener('click', clickHandler)