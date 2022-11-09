var counter = 1
var people = [];

// This handles both conditions either it is first time entry of person 
// or data update   

function input() {
  if (document.getElementById("display").innerText == "Submit") {
    submit();
    console.log("submit works")
  }
  else {
    id = document.getElementById("person_id").innerText;
    update(id);
    console.log("Update works")
  }
}

//This populates the input fields with the respective row data

function edit(id) {

  for (let i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      console.log("working")
      document.getElementById('exampleFormControlInput1').value = people[i].id;
      document.getElementById('exampleFormControlInput1').value = people[i].firstName;
      document.getElementById('exampleFormControlInput2').value = people[i].lastName;
      document.getElementById('exampleFormControlInput3').value = people[i].email;
      document.getElementById('exampleFormControlInput4').value = people[i].contact;
      document.getElementById('exampleFormControlInput5').value = people[i].age;
      document.getElementById("display").innerText = "Update";
      document.getElementById("person_id").innerText = id;
    }
  }

  //arrow function
  // var SingleRow = people.find((e) => {
  //   return e.id == id;
  // });

}

function delete_record(id) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      people.splice(i, 1);
    }
  }
  onLoadData(people);
}

//This deals with the first time entry of data

function submit() {
  var firstNamei = document.getElementById('exampleFormControlInput1').value;
  var lastNamei = document.getElementById('exampleFormControlInput2').value;
  var emaili = document.getElementById('exampleFormControlInput3').value;
  var contacti = document.getElementById('exampleFormControlInput4').value;
  var agei = document.getElementById('exampleFormControlInput5').value;

  if (firstNamei == "" || lastNamei == "" || emaili == "" || contacti == "" || agei == "") {
    alert("All fields name must be filled out");
    return false;
  }
  if ((firstNamei.length < 5 || firstNamei.length > 20) || (lastNamei.length < 5 || lastNamei.length > 20)) {
    alert("First and last name length should be between 5 and 20 characters");
    return false;
  }
  
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaili)))
  {
    alert("Email is invalid");
    return false;
  }

  if ((contacti.length != 13)) {
    alert("Contact format is invalid");
    return false;
  }
  let person = {
    id: counter,
    firstName: firstNamei,
    lastName: lastNamei,
    email: emaili,
    contact: contacti,
    age: agei
  }
  people.push(person)
  counter += 1;
  console.log("PEOPLE ARE:", people);
  onLoadData(people);

  document.getElementById('exampleFormControlInput1').value = "";
  document.getElementById('exampleFormControlInput2').value = "";
  document.getElementById('exampleFormControlInput3').value = "";
  document.getElementById('exampleFormControlInput4').value = "";
  document.getElementById('exampleFormControlInput5').value = "";

  // var html="";
  // for(let i=0;i<people.length;i++)
  // {

  //    // html="<tr><td>"+person.id+"</td><td>"+person.firstName+"</td><td>"+person.lastName+"</td><td>"+person.email+"</td><td>"+person.contact+"</td><td>"+person.age+"</td><td>"+ <button type="button"  id="display" value="display" onclick="input()" class="btn btn-outline-primary">display</button>+"</td></tr>";
  //    // document.getElementById('result').innerHTML+=html;
  //    // html=""
  //   } 

}

//This deals with the update of the data

function update(id) {
  var firstNamei = document.getElementById('exampleFormControlInput1').value;
  var lastNamei = document.getElementById('exampleFormControlInput2').value;
  var emaili = document.getElementById('exampleFormControlInput3').value;
  var contacti = document.getElementById('exampleFormControlInput4').value;
  var agei = document.getElementById('exampleFormControlInput5').value;

  if (firstNamei == "" || lastNamei == "" || emaili == "" || contacti == "" || agei == "") {
    alert("All fields name must be filled out");
    return false;
  }
  if ((firstNamei.length < 5 || firstNamei.length > 20) || (lastNamei.length < 5 || lastNamei.length > 20)) {
    alert("First and last name length should be between 5 and 20 characters");
    return false;
  }
  
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaili)))
  {
    alert("Email is invalid");
    return false;
  }

  if ((contacti.length != 13)) {
    alert("Contact format is invalid");
    return false;
  }
  
  for (let i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      people[i].id = id;
      people[i].firstName = firstNamei;
      people[i].lastName = lastNamei;
      people[i].email = emaili;
      people[i].contact = contacti;
      people[i].age = agei;
    }
  }
  console.log("PEOPLE ARE:", people);
  onLoadData(people);


  document.getElementById('exampleFormControlInput1').value = "";
  document.getElementById('exampleFormControlInput2').value = "";
  document.getElementById('exampleFormControlInput3').value = "";
  document.getElementById('exampleFormControlInput4').value = "";
  document.getElementById('exampleFormControlInput5').value = "";
  document.getElementById("display").innerText = "Submit";

}

//This loads the data from the array of objects to table 

function onLoadData(people) {

  document.getElementById("tableBody").innerHTML = createTable(people);

  // var tableBody = document.getElementById("body");
  // var res = createTable(people);
  // tableBody.innerHTML = res;
}

//This creates the table in html

function createTable(people) {
  console.log("Table Data")
  console.log(people)

  var row = "<tr>";
  people.forEach((value) => {
    row += `<td>${value.id}</td>`;
    row += `<td>${value.firstName}</td>`;
    row += `<td>${value.lastName}</td>`;
    row += `<td>${value.email}</td>`;
    row += `<td>${value.contact}</td>`;
    row += `<td>${value.age}</td>`;
    row += `<td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button"  id="edit" onclick="edit(${value.id})" class="btn btn-warning">Edit</button>
    <button type="button"  id="delete" onclick="delete_record(${value.id})" class="btn btn-danger">Delete</button>
    </div></td></tr>`;
  });
  return row;
}

