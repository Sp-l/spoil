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
             display2.innerHTML += "<li id='delete'> Name: " + foodName + "</br> Food Group: " + selectedGroup + "</li></br> ";
           }
           document.getElementById("add-form1").reset();

}

function deleteItem(){
  var list = document.getElementById("display2");
  list.removeChild(list.childNodes[0]);
}

function __init__() {

  console.log("in init");
    //document.getElementById('add-form1').style.display = "none";
    if((localStorage.getItem("flag"))==2){
      console.log("in loop");
      console.log(localStorage.setItem("flag",1));
      display2.innerHTML += "<li>" + localStorage.getItem("name")+ "</br>" + localStorage.getItem("group") + "</li></br> ";
    }
    return false;
}

__init__();
