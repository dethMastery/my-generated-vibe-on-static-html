let head = document.querySelector('head')
let body = document.querySelector('body')
let main = document.querySelector('#main')

// ==================================================
// Setting Part

let subHeader = document.querySelector('span#classSubTitle')
let copyYear = document.querySelector('span#classCopyYear')
let copyName = document.querySelector('span#classCopyName')
let copyLink = document.querySelector('span#classCopyLink')

subHeader.style.display = 'none'
copyYear.style.display = 'none'
copyName.style.display = 'none'
copyLink.style.display = 'none'


document.title = `${location.hostname} | dethz Engine :D`

// ==================================================

let font1 = 'https://fonts.googleapis.com'
let font2 = 'https://fonts.gstatic.com'
let font3 = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200&display=swap'

let cF1 = document.createElement('link')
let cF2 = document.createElement('link')
let cF3 = document.createElement('link')

cF1.rel = font1
cF1.type = 'preconnect'

cF2.rel = font2
cF2.type = 'preconnect'

cF3.rel = font3
cF3.type = 'stylesheet'

head.appendChild(cF1)
head.appendChild(cF2)
head.appendChild(cF3)

// ==================================================

body.style.margin = '0'
body.style.padding = '0'

// ==================================================

let bg = document.createElement('div')
bg.setAttribute("id", "bg")

let overlay = document.createElement('div')
overlay.setAttribute("id", "overlay")

let text = document.createElement('div')
text.setAttribute("id", "text")

let footer = document.createElement('div')
footer.setAttribute("id", "footer")

// ==================================================

main.appendChild(bg)
main.appendChild(overlay)
main.appendChild(text)
main.appendChild(footer)

// ==================================================

bg.style.width = '100%'
bg.style.height = '100vh'

function bgCall() {
  let axx = axios.get('https://frame.kitzu.me/rdm')

  let axCall = axx.then((rsp) => rsp.data) 

  return axCall
}

bgCall().then(data=> {
  bg.style.backgroundImage = `url(${data.url})`
  bg.style.backgroundPosition = 'center'
  bg.style.backgroundRepeat = 'no-repeat'
  bg.style.backgroundSize = 'cover'
  bg.style.filter = 'blur(.3rem)'
})

// ==================================================

overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'

overlay.style.width = '100%'
overlay.style.height = '100vh'
overlay.style.position = 'fixed'
overlay.style.top = '0'

// ==================================================

text.style.width = '100%'
text.style.height = '100vh'
text.style.position = 'fixed'
text.style.top = '0'
text.style.display = 'flex'
text.style.verticalAlign = 'middle'
text.style.justifyContent = 'center'
text.style.textAlign = 'center'
text.style.flexDirection = 'column'
text.style.fontFamily = "'IBM Plex Sans Thai', sans-serif"
text.style.color = 'whitesmoke'

let sHeader = document.createElement('h1')
sHeader.innerText = location.hostname
sHeader.style.fontFamily = "'IBM Plex Sans Thai', sans-serif"

let sSubHeader = document.createElement('h3')
sSubHeader.innerText = subHeader.innerHTML
sSubHeader.style.fontFamily = "'IBM Plex Sans Thai', sans-serif"

text.appendChild(sHeader)
text.appendChild(sSubHeader)

// ==================================================
// Footer

footer.innerHTML = `&copy ${copyYear.innerHTML} <a href="${copyLink.innerHTML}" id="idCopyLink">${copyName.innerHTML}</a> All Right Reserved`

  footer.style.width = '100%'
  footer.style.paddingTop = '1rem'
  footer.style.paddingBottom = '1rem'
  footer.style.position = 'fixed'
  footer.style.bottom = '0'
  footer.style.textAlign = 'center'
  footer.style.backgroundColor = 'whitesmoke'
  footer.style.color = '#2e2f2f'

  let footerLink = document.querySelector('a#idCopyLink')
  
  footerLink.style.color = '#2e2f2f'
  footerLink.style.textDecoration = 'none'