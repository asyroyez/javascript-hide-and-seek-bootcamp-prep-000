function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`div#nested div.target`)
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll(`ul.unranked-list li`)

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(n, 10);  
  }
}