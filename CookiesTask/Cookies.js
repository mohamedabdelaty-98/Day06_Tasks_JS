var radio_gender = document.getElementsByName("gender_m");
var slector_color = document.querySelector("select");
var val_gender = null;
btn_regs.addEventListener("click", function () {
  for (var i = 0; i < radio_gender.length; i++) {
    if (radio_gender[i].checked) val_gender = radio_gender[i].value;
  }
  console.log(val_gender);
  console.log(slector_color.value);
  console.log(Name.value);
  console.log(Age.value);
  document.cookie = `C_name=${Name.value};expires=${new Date().setDate(
    new Date().getDate() + 5
  )}`;

  document.cookie = `C_age=${Age.value};expires=${new Date().setDate(
    new Date().getDate() + 5
  )}`;

  document.cookie = `C_gender=${val_gender};expires=${new Date().setDate(
    new Date().getDate() + 5
  )}`;

  document.cookie = `C_color=${
    slector_color.value
  };expires=${new Date().setDate(new Date().getDate() + 5)}`;

  document.cookie = `C_index=${1};expires=${new Date().setDate(
    new Date().getDate() + 5
  )}`;
  my_window = window.open("./Cookies_2.html", "_self");
});


