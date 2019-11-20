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
    return false;
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
    return false;
}

function closeForm() {
    if (__openStatus__ == true) {
        document.getElementById('add-form').style.display = "none";
        console.log("Form closed");
        __openStatus__ = false;
    }
    return false;
}

function checkEmpty() {
    if (expData == null || selectedGroup == null || foodName == null) {
        alert("Fill All Fields!");
        checkedOkay = false;
    }
    else {
        console.log("Submitted");
        document.getElementById('add-form').style.display = "none";
        checkedOkay = true;
    }
    return false;
}

function openForm() {
    document.getElementById('add-form').style.display = "block";
    console.log("Submitted!");
    return false;
}

function addListItem() {
    if (checkedOkay == true) {
        document.getElementById('food-list').style.display = "block";
        document.getElementById('list-item-'+listCounter).style.display="block";
        document.getElementById('list-name-'+listCounter).innerHTML = foodName;
        document.getElementById('list-expiration-'+listCounter).innerHTML = expData;
        document.getElementById('list-group-'+listCounter).innerHTML = selectedGroup;
        ++listCounter;
    }
    else {
        console.log("Didn't pass check");
    }
    return false;
//    document.getElementById('group-img-'+listCounter).src = 
}

__init__();