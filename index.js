function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`div#nested div.target`)
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let a = 0; a < rankedLists.length; a++) {
    let children = rankedLists[a].children

    for (let b = 0; b < children.length; b++) {
      children[b].innerHTML = parseInt(children[b].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
}
