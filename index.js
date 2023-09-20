// smooth scroll anc
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// anc header (navi)
let navi = document.getElementById('navi');
let observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        entry.isIntersecting !== true ? navi.classList.add('navi-show') : navi.classList.remove('navi-show')
        // console.log(navi);
    });
});
let el = document.getElementById('navi');
observer.observe(header);


// beta message

const betaWrap = document.getElementById('betaWrap');
const btnBetaClose = document.getElementById('btnBetaClose');
btnBetaClose.addEventListener('click', () => {
    betaWrap.className === 'beta-wrapper' ? betaWrap.classList.add('remove-beta') : betaWrap.classList.remove('remove-beta')
})
