var __openStatus__ = false;

function results(){
  var foodName = document.getElementById('food-name').value;
  var foodGroup = document.getElementById('group-name');
  var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;

          if ( selectedGroup == "" || foodName == "") {
          console.log("EMPTY");
          alert("Fill All Fields!");
           return false;
         }
         else{
             display2.innerHTML += "<li> Name: " + foodName + "</br> Food Group: " + selectedGroup + "</li></br> ";
             closeForm();
           }
           document.getElementById("add-form1").reset();

}

function __init__() {

  console.log("in init");
    document.getElementById('add-form1').style.display = "none";
    if((localStorage.getItem("flag"))==2){
      console.log("in loop");
      console.log(localStorage.setItem("flag",1));
      display2.innerHTML += "<li>" + localStorage.getItem("name")+ "</br>" + localStorage.getItem("group") + "</li></br> ";
    }
    return false;
}

function openForm() {
    if (__openStatus__ == false) {
        document.getElementById('add-form1').style.display = "block";
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
        document.getElementById('add-form1').style.display = "none";
        console.log("Form closed");
        __openStatus__ = false;
    }
    return false;
}

__init__();
