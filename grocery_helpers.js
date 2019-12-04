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
             display1.style.display = "block";
             display2.style.display = "block";
             display2.innerHTML += "<li> Name: " + foodName + "</br> Food Group: " + selectedGroup + "</li></br> ";
           }
           document.getElementById("add-form1").reset();

}

function __init__() {

  console.log("in init");
    //document.getElementById('add-form1').style.display = "none";
    if((localStorage.getItem("flag"))==2){
      console.log("in loop");
      console.log(localStorage.setItem("flag",1));
      display2.innerHTML += "<li>" + localStorage.getItem("name")+ "</br>" + localStorage.getItem("group") + "</li></br> ";
    }
    display1.style.display = "none";
    display2.style.display = "none";
    return false;
}

__init__();
