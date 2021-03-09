function garbageUI() {
  return `
    <img src="./images/garbage.png" width="300px" onclick='garbageUI.HandleClick(this)' style="margin-bottom: 60px">
  `
}

garbageUI.HandleClick = (el) => {
  var url = "./workflow_page3.html";
  location.replace(url);
}

