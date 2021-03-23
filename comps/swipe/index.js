function SwipeUI() {
  return `
  <div style="
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  transition: opacity 1s, margin-top 1s;
  " 
  onclick='SwipeUI.HandleClick(this)'
  >
  
</div>
  `
}

SwipeUI.HandleClick = (el) => {

  el.style.opacity = "0";
  el.style.marginTop = "-250px";

}

// function scrollWin(x, y) {
//   window.scrollBy(x, y);
// }

// export const SwipeButton = SwipeUI();