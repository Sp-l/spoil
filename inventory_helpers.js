
var __openStatus__ = false;

function results(){
  var foodName = document.getElementById('food-name').value;
  var expData = document.getElementById('expiration-date').value;
  var foodGroup = document.getElementById('group-name');
  var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

          if (expData == "" || selectedGroup == "" || foodName == "") {
          console.log("EMPTY");
          alert("Fill All Fields!");
           return false;
         }
         else{

           if(today>expData)
           {
             console.log("EXPIRED");
             alert("Item has expired will be added to Grocery List");
             localStorage.setItem("flag", 2)
             localStorage.setItem("name","Name: " + foodName);
             localStorage.setItem("group","Food Group: " + selectedGroup);
             console.log(localStorage.getItem("flag"))
             window.open("grocerylist.html", '_self',false);

           }
           else {
             console.log("still good");
             localStorage.setItem("flag",1);
             display1.innerHTML += "<li> Name: " + foodName + "</br> Date: "
             + expData + "</br> Food Group: " + selectedGroup + "</li></br> ";
           }


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


__init__();
