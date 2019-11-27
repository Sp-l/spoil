// var itemList = document.getElementById('food-list');
// // var listCounter = 1;
var __openStatus__ = false;
// // var checkedOkay = false;

function results(){
  var foodName = document.getElementById('food-name').value;
  var expData = document.getElementById('expiration-date').value;
  var foodGroup = document.getElementById('group-name');
  var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;

          if (expData == "" || selectedGroup == "" || foodName == "") {
          console.log(expData);
          console.log(selectedGroup);
          console.log(foodName);
          console.log("EMPTY");
          alert("Fill All Fields!");
           return false;
         }
         else{

           display1.innerHTML += "<li> Name: " + foodName + "</br> Date: "
           + expData + "</br> Food Group: " + selectedGroup + "</li></br> ";
           closeForm();
           document.getElementById("add-form").reset();

         }

}

function __init__() {
    document.getElementById('add-form').style.display = "none";
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

// function checkEmpty() {
//     console.log(expData);
//     console.log(selectedGroup);
//     if (expData == null || selectedGroup == null || foodName == null) {
//         console.log("EMPTY");
//         alert("Fill All Fields!");
//         return false;
//
//     }
//     else {
//         console.log("Submitted");
//         document.getElementById('add-form').style.display = "none";
//     }
// }



// function addListItem() {
//     if (checkedOkay == true) {
//         document.getElementById('food-list').style.display = "block";
//         document.getElementById('list-item-'+listCounter).style.display="block";
//         document.getElementById('list-name-'+listCounter).innerHTML = foodName;
//         document.getElementById('list-expiration-'+listCounter).innerHTML = expData;
//         document.getElementById('list-group-'+listCounter).innerHTML = selectedGroup;
//         ++listCounter;
//     }
//     else {
//         console.log("Didn't pass check");
//     }
//     return false;
// //    document.getElementById('group-img-'+listCounter).src =
// }

__init__();
