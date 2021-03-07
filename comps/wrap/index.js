function WrapUI() {
  return `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <img style="
        width: 90%;
        height: 90%;
        "
        onclick='WrapUI.HandleClick(this)'
        ondblclick='WrapUI.HandleDblClick(this)'
        src="./images/wrap_closed.png" alt="wrap closed">
    </div>
  `
}

WrapUI.HandleClick = (el) => {

  el.src="./images/wrap_open.png"

}

WrapUI.HandleDblClick = (el) => {

  el.src="./images/wrap_closed.png"

}

// export const WrapInfo = WrapUI();