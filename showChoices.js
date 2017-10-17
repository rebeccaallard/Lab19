 <script type = "text/javascript">
  //from multi-select.html
  function showChoices(){
  //retrieve data
  var selItem = document.getElementById("selItem");
  //set up output string
  var result = "<h2>Your Items</h2>";
  result += "<ul> n";
  //step through options
  for (i = 0; i < selItem.length; i++){
   //examine current option
   currentOption = selItem[i];
   //print it if it has been selected
   if (currentOption.selected == true){
   result += " <li>" + currentOption.value + "</li> n";
   } // end if
  } // end for loop
  //finish off the list and print it out
  result += "</ul> n";
  output = document.getElementById("output");
  output.innerHTML = result;
  } // end showChoices
 </script>