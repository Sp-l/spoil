var itemList = [];
var listCounter = 1;
var __openStatus__ = false;

function __init__() {
    document.getElementById('add-form').style.display = "none";
    document.getElementById('food-list').style.display = "none";
}

function openForm() {
    if (__openStatus__ == false) {
        document.getElementById('add-form').style.display = "block";
        console.log("Form opened");
        __openStatus__ = true;
    }
    else {
        console.log("Already open");
    }
}

function closeForm() {
    if (__openStatus__ == true) {
        document.getElementById('add-form').style.display = "none";
        console.log("Form closed");
        __openStatus__ = false;
    }
}

function checkEmpty() {
    if (document.getElementById('name').value == "" || document.getElementById('date').value == "") {
        alert("Fill All Fields !");
    } 
    else {
        document.getElementById('add-form').submit();
        alert("Form Submitted Successfully");
    }
}

function getInput() {
    var foodName = document.getElementById('food-name').value;
    var expData = document.getElementById('expiration-date').value;
    var foodGroup = document.getElementById('food-group').value;
//    document.getElementById('food-list').style.display = "block";
    console.log("Submitted!");
}

function addListItem() {
    document.getElementById('list-name-'+listCounter).innerHTML = foodName;
    document.getElementById('list-expiration-'+listCounter).innerHTML = expData;
//    document.getElementById('group-img-'+listCounter).src = 
}

function findGroup() {

}

__init__();