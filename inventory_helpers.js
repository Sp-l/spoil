var itemList = document.getElementById('food-list');
var listCounter = 1;
var __openStatus__ = false;
var checkedOkay = false;
var foodName = document.getElementById('food-name').value;
var expData = document.getElementById('expiration-date').value;
var foodGroup = document.getElementById('group-name');
var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;

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
    if (expData == null || foodGroup == null || foodName == null) {
        alert("Fill All Fields!");
        checkedOkay = false;
    }
    else {
        console.log("Submitted successfully");
        checkedOkay = true;
    }
}

function openForm() {
    document.getElementById('food-list').style.display = "block";
    console.log("Submitted!");
}

function addListItem() {
    if (checkedOkay == true) {
        openForm();
        document.getElementById('list-name-'+listCounter).innerHTML = foodName;
        document.getElementById('list-expiration-'+listCounter).innerHTML = expData;
        document.getElementById('list-group-'+listCounter).innerHTML = selectedGroup;
        ++listCounter;
    }
    else {
        console.log("Didn't pass check");
    }
    
//    document.getElementById('group-img-'+listCounter).src = 
}

function findGroup() {

}

__init__();