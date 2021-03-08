function AlternativesUI(width ="332", height="269") {
    return `
      <div style="
        width: ${width}px;
        height: ${height}px;
        background-color: #E5E5E5;
        text-align: center;
        padding: 30px;
        border: 2px solid white;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        font-weight: bold;
        transition: font-size 1s;
      "
      onmouseover='AlternativesUI.HandleMouseIn(this)'
      onmouseout='AlernativesUI.HandleMouseOut(this)'
      >
        <p>
        Insert Alternative Here</p>
      </div>
    `
  }
  
  AlternativesUI.HandleMouseIn = (el) => {
    el.style.color = "purple"
    el.style.fontSize = "25px"
  }
  
  AlternativesUI.HandleMouseOut = (el) => {
    el.style.color = "black"
    el.style.fontSize = "20px"
  }
  
  // export const AlternativesInfo = AlternativesUI();