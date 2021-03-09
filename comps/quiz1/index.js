function quizUI() {
  return `
    <div style="
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 20px;
      width: 80%;
      padding: 20px;
      font-family: Futura; 
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 100px;
    ">
      <p>Canada's annual food waste is the equivalent to approximately ___ cars emissions</p>
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      ">
        <div onclick='quizUI.HandleClickIncorrect1(this)' style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 50%;
          background-color:#57A0D6;
          border-radius: 20px;
          margin: 10px;
        ">
          <div id="incorrect1" style="
          width: 100%;
          color: white;
          border-radius: 20px;
          margin: 5px;
          ">20 thousand</div>
          <img src="./images/no.png" alt="wrong answer" height="50px" style="display:none" id="icon1">
        </div>
        
        <div onclick='quizUI.HandleClickIncorrect2(this)' style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 50%;
          background-color:#57A0D6;
          border-radius: 20px;
          margin: 10px;
          ">
          <div id="incorrect2" style="
          width: 100%;
          color: white;
          border-radius: 20px;
          margin: 5px;
          ">200 thousand</div>
          <img src="./images/no.png" alt="wrong answer" height="50px" style="display:none" id="icon2">
        </div>
        
        <div onclick='quizUI.HandleClickCorrect(this)' style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 50%;
          background-color:#57A0D6;
          border-radius: 20px;
          margin: 10px;
          ">
          <div id="correct" onclick='quizUI.HandleClickCorrect(this)' style="
          width: 100%;
          background-color: #57A0D6;
          color: white;
          border-radius: 20px;
          margin: 5px;
          ">2 million</div>
          <img src="./images/yes.png" alt="correct answer" height="50px" style="display:none" id="icon3">
        </div>
        
      </div>
    </div>
  `
}

quizUI.HandleClickIncorrect1 = (el) => {

  el.style.backgroundColor = "red";
  document.querySelector("#icon1").style.display = "block";

}
quizUI.HandleClickIncorrect2 = (el) => {

  el.style.backgroundColor = "red";
  
  document.querySelector("#icon2").style.display = "block"

}

quizUI.HandleClickCorrect = (el) => {

  el.style.backgroundColor = "#6BB25A";
  document.querySelector("#icon3").style.display = "block"

}
