const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
inputBox.addEventListener("keypress", function(event) {
    // Check if the key pressed was Enter (key code 13)
    if (event.key === "Enter") {
        // Cancel the default action
        event.preventDefault();
        // Trigger the button click
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
    // alert("Data loaded successfully!");
}

showData();
// Load the saved data when the page is loaded