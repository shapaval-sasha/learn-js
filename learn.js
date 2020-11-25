function add() {
  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.id = "lim";
  li.innerHTML =
    '<input name = "food" type="checkbox">' +
    "<span>Имя:</span>" +
    input.value +
    "<br>" +
    "<span>Моб.тел.:</span>" +
    input_2.value;
  if (input.value == "" || input_2.value == "") {
    alert("Введите значение");
    return;
  } else list.appendChild(li);
  clearInput();
}

function clearInput() {
  let inputs = document.querySelectorAll("input[type=text]");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function cleared() {
  let food = document.getElementsByName("food");
  for (i = 0; i < food.length; i++) {
    if (food[i].checked) {
      let remElm = food[i];

      food[i].nextSibling.nodeValue = "";
      remElm.parentNode.removeChild(remElm);
      div = document.getElementsByTagName("div")[0];
      li = div.getElementsByTagName("li");
      div.removeChild(li[i]);
    }
  }
}
