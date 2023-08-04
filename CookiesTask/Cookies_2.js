function GetAllCookies() {
  return document.cookie;
}

var cookies = GetAllCookies();
console.log(cookies);

var items = cookies.split(";");
console.log(items);
var str_arr = [];
for (var i = 0; i < items.length; i++) {
  str_arr.push(items[i].split("=")[1]);
}
console.log(str_arr);

var p_male = document.getElementsByClassName("male");
var p_female = document.getElementsByClassName("female");
if (str_arr[2] == "male") {
  p_male[1].innerHTML =
    "Welcome " + str_arr[0] + " you are visit:  " + str_arr[4] + " Times";
  p_male[1].style.color = str_arr[3];
  p_male[0].classList.remove("DisplayNone");
  p_male[1].classList.remove("DisplayNone");
  p_female[0].classList.add("DisplayNone");
  p_female[1].classList.add("DisplayNone");
} else {
  p_female[1].innerHTML =
    "Welcome " + str_arr[0] + " you are visit:  " + str_arr[4] + " Times";
  p_female[1].style.color = str_arr[3];
  p_male[0].classList.add("DisplayNone");
  p_male[1].classList.add("DisplayNone");
  p_female[0].classList.remove("DisplayNone");
  p_female[1].classList.remove("DisplayNone");
}
document.cookie = `C_index=${
  Number(str_arr[4]) + 1
};expires=${new Date().setDate(new Date().getDate() + 5)}`;
