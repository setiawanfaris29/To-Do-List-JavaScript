// Add

// function metu() {
//     var item = document.getElementById("masuk").value;
//     var ul = document.getElementById("myUl");
//     var li = document.createElement("li");
//     if (item == "") {
//         window.alert("Masukkan Dulu Aktivitas Anda!");
//     } else {
//         li.appendChild(document.createTextNode(item.innerHTML = "<button>Delete</button>"));
//         ul.appendChild(li);
//         document.getElementById("masuk").value = " ";
//         li.onclick = removeItem;
//     }
// }

// document.body.onkeyup = function(e) {
//     if (e.keyCode == 13){
//         item();
//     }
// };

// function removeItem(e){
//     e.target.parentElement.removeChild(e.target);
// }

var name;
var names = [];
var names2;
var userTR = document.getElementById("namesTR");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  Create();
  Read();
  document.getElementById("form").reset();
});

function Create() {
  let storage = JSON.parse(localStorage.getItem("names"));
  name = document.getElementById("name").value;

  if (name == '') {
    alert("Masukkan kegiatan kamu dahulu");
  } else {
    if (storage == null) {
      names.push(name);
      localStorage.setItem("names", JSON.stringify(names));
    } else {

      names = JSON.parse(localStorage.getItem("names"));
      names.push(name);
      localStorage.setItem("names", JSON.stringify(names));
    }
  }
}

function Read() {
  userTR.innerHTML = ``;
  names2 = JSON.parse(localStorage.getItem("names"));

  if (names2 != null) {
    for (var i = 0; i < names2.length; i++) {
      userTR.innerHTML += `
      <div class="container mb-3">
      <li>${names2[i]}</li>
      <a disabled onclick="Update(${i})"><li class="fa fa-edit ml-3 text-warning"></li></a>       
      <a onclick="Delete(${i})"><li class="fa fa-trash ml-3 text-danger"></li></a>
      </div>
      `
    }
  }
}

function Update(i3) {
  let names4 = JSON.parse(localStorage.getItem("names"));
  userTR.innerHTML = ``;
  for (var i = 0; i < names4.length; i++) {
    if (i == i3) {
      userTR.innerHTML += `
      <div class="container mb-3">
       <input type="text" class="inp2 mr-3" id="newName" placeholder="${names4[i]}">
       <a  onclick="Update2(${i})"><li class="fa fa-history text-success"></li></a>
       <a  onclick="Read()"><li class="fa fa-times ml-3 text-danger"></li></a>
      </div>
      `
    }
    else {
      userTR.innerHTML += `
      <div class="container mb-3">
        <li class="mr-3">${names2[i]}</li>
       <a disabled onclick="Update(${i})"><li class="fa fa-edit mr-3 text-warning"></li></a>
       <a disabled onclick="Delete(${i})"><li class="fa fa-trash text-danger"></li></a>
        </div>`
    }
  }
}

function Update2(i) {
  let names5=JSON.parse(localStorage.getItem("names"));
  names5[i]=document.getElementById("newName").value;
  if (names5=='') {
    alert("Harus Diisi Dulu!");
  } else{
    localStorage.setItem("names",JSON.stringify(names5));
    Read();
  }
}

function Delete(i2) {
  let names3 = JSON.parse(localStorage.getItem("names"));
  names3.splice(i2,1);
  localStorage.setItem("names",JSON.stringify(names3));
  Read();
}