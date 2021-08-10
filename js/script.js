const navContact = document.getElementById('navContact')
const sectionContact = document.getElementById('sectionContact')
const main = document.getElementById('mainContent')
navContact.addEventListener('click', () => {
    if (sectionContact.className.indexOf('contact--hidden') == 8) {
        main.classList.remove('main_content--full');
        sectionContact.classList.remove('contact--hidden')
    } else {
        main.classList.add('main_content--full')
        sectionContact.classList.add('contact--hidden')
    }
})