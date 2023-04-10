const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const danger = document.getElementById("danger");



function addTask() {
    //displays an error message on the container and 
    //not a window alert.
    if(inputBox.value === '') { //window alert will be alert('fields must not be empty')
        let danger = document.getElementById("danger");
       
        danger.style.display = "block"; 
        
        setTimeout(() => { //set timeout removes the error message from displaying
            danger.style.display = "none";
        }, 500);
    }

    else{
        //create a li
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "-";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");//check and uncheck todos
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//delete todos
        saveData();
    } 
}, false);

function saveData(){//this is called to save our data even when the browser is refreshed
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
