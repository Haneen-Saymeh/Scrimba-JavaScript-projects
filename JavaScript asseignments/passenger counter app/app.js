
let countEl = document.getElementById("counter")
let entries = document.getElementById("saveTxt")
let count =0
function increment(){
    console.log("clicked")
    count= count+1
    countEl.innerText=count
    console.log(count)
}

function save(){
    allEntries= count + " - "
    entries.textContent+=allEntries
    countEl.innerText=0
    count=0
}