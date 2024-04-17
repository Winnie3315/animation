let div = document.querySelector('.anim')
let inp = document.querySelector('input')

div.onmouseenter = () => {
    div.classList.add("animate");
    inp.setAttribute("value", "here")
    
};
div.onmouseleave = () => {
    div.classList.remove("animate");
    inp.setAttribute("value", "...")
};