function togleText() {
    const paragraph= document.getElementById('paragraph');
    const button = document.querySelector('.togle');

    if (paragraph.classList.contains('colapsed')) {
        paragraph.classList.remove('colapsed');
        button.textContent = 'Read Less'
    } else {
        paragraph.classList.add('colapsed');
        button.textContent = 'Read More'
    }
}


function togleText1() {

    const paragraph= document.getElementById('paragraph1');
    const button = document.querySelector('.togle1');

    if (paragraph.classList.contains('colapsed1')) {
        paragraph.classList.remove('colapsed1');
        button.textContent = 'Read Less'
    } else {
        paragraph.classList.add('colapsed1');
        button.textContent = 'Read More'
    }
}


function togleText2() {

    const paragraph= document.getElementById('paragraph2');
    const button = document.querySelector('.togle2');

    if (paragraph.classList.contains('colapsed2')) {
        paragraph.classList.remove('colapsed2');
        button.textContent = 'Read Less'
    } else {
        paragraph.classList.add('colapsed2');
        button.textContent = 'Read More'
    }
}



