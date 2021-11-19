var names_of_people = [];
var GuestName;
var lenght_of_name;
var i;
var s;
var found;
var j;
    
function submit() {
  GuestName = document.getElementById("name1").value;
  names_of_people.push(GuestName);
  console.log(GuestName);    
  console.log(names_of_people);
  lenght_of_name = names_of_people.length;
  console.log(lenght_of_name);
  document.getElementById("display_name").innerHTML = names_of_people.toString();
}

function show() {
  i = names_of_people.join("<br>");
  console.log(names_of_people);
  document.getElementById("p1").innerHTML=i.toString();
  document.getElementById("sort_button").style.display="block";
}


function sorting() {
  names_of_people.sort();
  i = names_of_people.join("<br>");
  console.log(names_of_people);		
  document.getElementById("sorted").innerHTML=i.toString();
}


function searching() {
  s= document.getElementById("s1").value;
  found=0;
  for(j=0; j<names_of_people.length; j++) {
	if(s==names_of_people[j]){
	  found=found+1;
    }	
  }
  document.getElementById("p2").innerHTML="name found "+found+" time/s";
  console.log("found name "+found+" time/s");
}
