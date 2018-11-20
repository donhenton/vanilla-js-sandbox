document.addEventListener("DOMContentLoaded", function(event) {

  let newLi = document.createElement('li');
  newLi.classList.add('list-item');
  newLi.innerText= "text from code block 1";
    document.getElementById('itemList').appendChild(newLi);
  });