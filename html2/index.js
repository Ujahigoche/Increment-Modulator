let count = 0
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

function increment(){
    count+=1
    countEl.textContent = count
}
function save(){
    let countstr = count
    saveEl.textContent+= countstr + " - "
    
    
    countEl.textContent = 0
    count = 0


}