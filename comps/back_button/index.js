function ButtonUI(text="< GO BACK") {
  return `
    <a href="./page1/index.html"><div style="
      width: 100px;
      height: 35px;
      border-radius: 50px;
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Futura; 
      font-size: 16px;
      font-weight: 500;
    ">${text}</div></a>
  `
}