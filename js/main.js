

// document.querySelectorAll(td)
const cells = document.getElementsByTagName('td');
for (const cell of cells) {
    // cell.innerHTML = '<div class="card-wrapper"><img><img class="sound" src="https://cdn2.iconfinder.com/data/icons/mutuline-ui-essential/48/sound_on-1024.png"></div><br><button>?</button>'
    cell.innerHTML = '<div class="card-wrapper"><img><img class="sound" src="../sound.png"></div><button>?</button>'
    
    const img = cell.getElementsByTagName('img')[0]
    const word = cell.getAttribute('word')
    img.setAttribute('src', './' + word + '.jpg')
}

function clickHandler(e) {
    el = e.target;
    if (el.tagName === 'IMG') {
        const word = el.parentElement.parentElement.getAttribute('word')
        console.log({ word });
        var msg = new SpeechSynthesisUtterance(word);
        msg.lang = 'en-US';
        msg.rate=0.4;
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