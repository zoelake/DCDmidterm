function PointsUI(width ="332", height="269", benefits="benefits", pointImg="./images/onion.png", point1="1", point2="2", point3="3") {
    return `
      <div style="
        width: ${width}px;
        height: ${height}px;
        background-color: #E5E5E5;
        text-align: center;
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
        <p>
        ${benefits}</p>
        <div style="
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <div style="
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            ">
              <img src="${pointImg}" alt="point" width="50px">
              <p>${point1}</p>
          </div>
          <div style="
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          ">
            <img src="${pointImg}" alt="point" width="50px">
            <p>${point2}</p>
          </div>
          <div style="
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          ">
            <img src="${pointImg}" alt="point" width="50px">
            <p>${point3}</p>
      </div>
        </div>
      </div>
    `
  }
  
  PointsUI.HandleClick = (el) => {
  
    
  
  }