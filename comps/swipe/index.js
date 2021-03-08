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
  <p style="
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  margin-bottom: 0;
  "
  onclick="scrollWin(0, 100)"
  >SWIPE UP</p>
  <img style="
  width: 10%;
  height: 10%;
  "
  src="./images/arrow.svg" alt="arrow">
</div>
  `
}

SwipeUI.HandleClick = (el) => {

  el.style.opacity = "0";
  el.style.marginTop = "-100px";

}

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

// export const SwipeButton = SwipeUI();