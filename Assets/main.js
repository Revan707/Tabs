const myMale=document.querySelector(".myMale")
const male=document.querySelector(".male")
const myFemale=document.querySelector(".myFemale")
const female=document.querySelector(".female")
const myBoth=document.querySelector(".myBoth")
const both=document.querySelector(".both")

state="block"
myMale.addEventListener("click",()=>{
    male.style.display=state
    state=state=="block"?"none":"block"
    female.style.display="none"
    both.style.display="none"
})

myFemale.addEventListener("click",()=>{
    female.style.display=state
    state=state=="block"?"none":"block"
    male.style.display="none"
    both.style.display="none"
})

myBoth.addEventListener("click",()=>{
    both.style.display=state
    state=state=="block"?"none":"block"
    male.style.display="none"
    female.style.display="none"
})