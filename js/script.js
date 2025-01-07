const body =document.body
const openSiderbar = document.querySelector('#opensidebar')
const closeSiderbar = document.querySelector('#close-sidebar')
const toggleTheme = document.querySelector('.toggle-them')
const sidebar = document.querySelector('.main-sidebar')
const light = toggleTheme.children[0]
const dark = toggleTheme.children[2]
const percentage = document.querySelector(".percentage p")

openSiderbar.addEventListener("click",()=>{
  sidebar.style.left='0%'
})

closeSiderbar.addEventListener("click",()=>{
  sidebar.style.left='-100%'
})

toggleTheme.addEventListener("click", changeTheme)

function changeTheme(){
  if(body.classList.contains('dark-mode')){
    lightMode()
  }else if(!body.classList.contains('dark-mode')){
    darkMode()
  }
}

if(window.matchMedia('(perfers-color-scheme:dark)').matches){
  darkMode()
}

function lightMode(){
  body.classList.remove('dark-mode')
  light.classList.add('active')
  dark.classList.remove('active')
}

function darkMode(){
  body.classList.add('dark-mode')
  light.classList.remove('active')
  dark.classList.add('active')

}

percentage.forEach((e,i)=>{
  let percentaValue = parseInt(e.textContent)
  let circle = document.getElementById(`circle${i+1}`)
  let rayon = circle.getAttribute('r')
  let circ = Math.PI*2*rayon
  let counter = 0
  let fillvalue = (circ*(100-percentaValue))/100
  setInterval(()=>{
    if(counter===percentaValue){
      clearInterval()
    }else {
      counter += 1
      e.innerText = counter + '%'
      circle.style.strokeDashoffset=fillvalue
    }
  },1000/percentaValue)

})