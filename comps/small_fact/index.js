function smallFactUI(im="./images/eaten_apple.png", text="text") {
  return `
    <div style="
      display: flex;
      flex-direction: column;
      width: 40%;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 20px;
      margin: 20px;
      object-fit: contain;
      font-family: Futura; 
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
    ">
      <div style="height: 50px">
        <img src="${im}" alt="eaten apple" width="50px">
      </div>
      <div style="height: 50px">
        <p>${text}</p>
      </div>
    </div>
  `
}