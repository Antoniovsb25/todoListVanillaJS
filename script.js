//getting all required elements
const inputBox1 = document.getElementById("campo1")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const deleteAllBtn = document.querySelector(".footer button")

showTasks() //calling showTasks function

 // if user clicks the add button
addBtn.onclick = () => {

    let userData = inputBox1.value //getting user entered value
    let getLocalStorage = localStorage.getItem("New todo") //getting localStorage

    if(getLocalStorage == null) { //if localStorage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getLocalStorage) //transforming JSON string into a JS object
    } 

    listArr.push(userData) //pushing or adding user data
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transforming JS object into a JSON string
    showTasks() //calling showTasks function
}

// function to add task list inside ul TAG
function showTasks() {

    let getLocalStorage = localStorage.getItem("New todo") //getting localStorage

    if(getLocalStorage == null) { //if localStorage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getLocalStorage) //transforming JSON string into a JS object
    }
    
    const pendingNumb = document.querySelector(".pendingNumb")
    pendingNumb.textContent = listArr.length //Passing the length value in pendingNumb
    let newLiTag = ''
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})";>X</span></li>`
    })

    todoList.innerHTML = newLiTag //adding new li TAG inside ul TAG
    inputBox1.value = "" //once task added, leave the input field blank
}

//Delete task function
function deleteTask(index) {

    let getLocalStorage = localStorage.getItem("New todo")
    listArr = JSON.parse(getLocalStorage) //transforming JSON string into a JS object
    listArr.splice(index, 1) //delete or remove the particular indexed li
    //After remove the li update the local storage
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transforming JS object into a JSON string
    showTasks() //calling showTasks function
}

//delete all tasks function
deleteAllBtn.onclick = () => {

    listArr = [] //empty an array
    //After delete all tasks update the local storage
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transforming JS object into a JSON string
    showTasks() //calling showTasks function

}

