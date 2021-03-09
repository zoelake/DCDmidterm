function FourBulletsUI(width ="332", height="269", bulletImg="../images/artichoke.png", bullet1="1", bullet2="2", bullet3="3", bullet4="4") {
  return `
    <div style="
      width: ${width}px;
      height: ${height}px;
      background-color: #E5E5E5;
      text-align: left;
      padding: 20px;
      border: 2px solid white;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: font-size 1s;
      font-family: Futura; 
      font-size: 18px;
      font-style: normal;
      font-weight: 500;

    "
    >
      <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
      ">
        <div style="
          display: flex;
          flex-direction: row;
          align-items: center;
          ">
            <img src="${bulletImg}" alt="bullet" width="50px">
            <p>${bullet1}</p>
        </div>
        <div style="
        display: flex;
        flex-direction: row;
        align-items: center;
        ">
          <img src="${bulletImg}" alt="bullet" width="50px">
          <p>${bullet2}</p>
        </div>
        <div style="
        display: flex;
        flex-direction: row;
        align-items: center;
        ">
          <img src="${bulletImg}" alt="bullet" width="50px">
          <p>${bullet3}</p>
        </div>
        <div style="
          display: flex;
          flex-direction: row;
          align-items: center;
        ">
          <img src="${bulletImg}" alt="bullet" width="50px">
          <p>${bullet4}</p>
        </div>
      </div>
    </div>
  `
}
