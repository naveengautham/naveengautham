
window.onload= function(){
    const takeElement = document.getElementById("main");
    takeElement.style.color='red'

    const buttons= document.querySelectorAll("button")
    buttons.forEach(eachButton=>{
        eachButton.addEventListener("click",e=>{
            console.log(e.target.innerHTML)
        })
    })
}

