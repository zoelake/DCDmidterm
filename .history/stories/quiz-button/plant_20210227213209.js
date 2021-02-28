function PlantUI(text = "Option", desc = "Description") {
    return `
    <div style="
    display: flex;
    flex-direction: column;
    line-height: -10px;
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

export const MultButton = PlantUI();