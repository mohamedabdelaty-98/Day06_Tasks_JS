var tbody = document.getElementById("tbody");
var btn = document.getElementById("btn_get");
function execute() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/");
  xhr.send("");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var response = xhr.response;
        var data = JSON.parse(response);
        for (var i = 0; i < data.length; i++) {
          var tr = document.createElement("tr");
          tr.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`;
          tbody.append(tr);
        }
        console.log(data.length);
      } else {
        console.log("error");
      }
    }
  };
}
btn.addEventListener("click", execute);
