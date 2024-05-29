let previusTitle = document.title

window.addEventListener('blur',()=> {
    previousTitle = document.title
    document.title = '!No Te Vayas! !Vuelve!'
})

window.addEventListener('focus', () => {
    document.title = previousTitle
}