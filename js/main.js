let mianLinks = document.querySelectorAll(".link")
let otherLinks = document.querySelector(".other-links")
let megaMnue = document.querySelector(".mega-mnue")

mianLinks.forEach(el => {
    el.addEventListener("click" , function() {
        mianLinks.forEach(el => {
            el.classList.remove("active")
        })
        el.classList.add("active")
    })
})

otherLinks.onclick = () =>{
    megaMnue.classList.toggle("clicked")
}

console.log(megaMnue)
