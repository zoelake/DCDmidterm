function PlantUI(text = "Option", desc = "Description") {
    return `
    <div style="
    display: flex;
    flex-direction: column;
    line-height: 0;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 60px;
    border: 2px solid #367A17;
    border-radius: 15px;
    background-color: #D0DDC9;
    ">
        <h1 style="
        font-size: 24px;
        font-weight: bold;
        font-family: helvetica;
        ">${text}</h1>

        <p style="
        font-size: 14px;
        font-family: helvetica;
        ">${desc}</p>
    </div>
    `
}

function BackButtonUI() {
    return `
    <div style="
    padding: 5px;
    background-color: #367A17;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 15px;
    ">
        <img style="
        
        "src="https://placekitten.com/100/100">
    </div>
    `
}

export const MultButton = PlantUI();
export const BackButton = BackButtonUI();