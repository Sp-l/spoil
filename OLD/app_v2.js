var itemList = [];
var __openStatus__ = false;

function __init__() {
    document.getElementById('add-form').style.display = "none";
    document.getElementById('food-list').style.display = "none";
}

function openForm() {
    if (__openStatus__ == false) {
        document.getElementById('add-form').style.display = "block";
        console.log("Form opened");
    }
    else {
        console.log("Already open");
    }
}

function closeForm() {
    if (__openStatus__ == true) {
        document.getElementById('add-form').style.display = "none";
        console.log("Form closed");
    }
}

function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('date').value == "") {
        alert("Fill All Fields !");
    } 
    else {
        document.getElementById('add-form').submit();
        alert("Form Submitted Successfully");
    }
}

function getInput() {

}

__init__();