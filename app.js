var itemList = [];
var __openStatus__ = false;

function __init__() {
    document.getElementById('foodForm').style.display = "none";
};

function openForm() {
    if (__openStatus__ == false) {
        document.getElementById('foodForm').style.display = "block";
    }
    else {
        console.log("Already open");
    }
};

function closeForm() {
    if (__openStatus__ == true) {
        document.getElementById('foodForm').style.display = "none"
    }
};

function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('date').value == "") {
        alert("Fill All Fields !");
    } 
    else {
        document.getElementById('foodForm').submit();
        alert("Form Submitted Successfully");
    }
};