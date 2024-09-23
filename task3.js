function deleteData(e){
   var row = e.parentNode.style.display = 'none'
}

function changedImage(img, event){
    var img = img
    if(event.type === 'mouseover') {img.src = 'https://cdn-icons-png.flaticon.com/512/10726/10726024.png'}
    else{img.src = 'https://png.pngtree.com/png-vector/20221119/ourmid/pngtree-closed-wooden-door-design-vector-png-image_6471174.png'}
}

// question 2
function submitSignupForm(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if(name && email && password){
        document.write("<h1>Signup Successful!</h1>");
        document.write("<p>Name: " + name + "</p>");
        document.write("<p>Name: " + email + "</p>");
        document.write("<p>Name: " + password + "</p>");    
    }
}


// question 4


var isCheck = false

function expandText(){
    var para = document.getElementById('para')
    var readBtn = document.getElementById('readMore')

    if(isCheck == true){
        para.style.height = '40px'
        readBtn.innerHTML = 'Read More'
        isCheck = false
    }
    
    else{
        para.style.height = 'auto'
        readBtn.innerHTML = 'Read Less'
        isCheck = true
    }
}

// question 5

function dataSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var form = document.getElementById("form");
  var addTask = document.getElementById('addTask')
  var dataRow = document.getElementById("dataRow");

  dataRow.innerHTML +=
    "<tr>" +
    "<td>" +
    name +
    "</td>" +
    "<td>" +
    email +
    "</td>" +
    "<td>" +
    password +
    "</td>" +
    '<td><button onclick="deleteRow(this)">Delete</button></td>' +
    '<td><button onclick="editRow(this, \''  + name + '\' , \'' + password + '\' , \''  +  email +'\')">Edit</button></td>' +
    "</tr>";

  form.style.display = "none";
  if(form.style.display = "none"){
    addTask.style.display = "block"
  }

}

function deleteRow(e) {
  e.parentNode.parentNode.style.display = "none";
}

function editRow(e, name, password, email) {
  var form = document.getElementById("form");
  form.style.display = "block";
  
  var btn = document.getElementById('saveBtn')
  if(btn){
    btn.remove()
  }

  var saveBtn = document.createElement('button')
  saveBtn.innerHTML = 'SAVE'
  saveBtn.id = 'saveBtn'
  saveBtn.onclick = function() {
    event.preventDefault();
    handleSave(e, form);
  };
  form.appendChild(saveBtn)
  
  document.getElementById("name").value = name;
  document.getElementById("email").value = password;
  document.getElementById("password").value = email;

}

function handleSave(elem, form){
    console.log(form);
    
    var existingRow = elem.parentNode.parentNode
    console.log(existingRow);


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    existingRow.innerHTML =
    "<tr>" +
    "<td>" +
    name +
    "</td>" +
    "<td>" +
    email +
    "</td>" +
    "<td>" +
    password +
    "</td>" +
    '<td><button onclick="deleteRow(this)">Delete</button></td>' +
    '<td><button onclick="editRow(this, \''  + name + '\' , \'' + password + '\' , \''  +  email +'\')">Edit</button></td>' +
    "</tr>";
    form.style.display = 'none'
}

function showForm(){
    var form = document.getElementById("form");
    form.style.display = "block";
}