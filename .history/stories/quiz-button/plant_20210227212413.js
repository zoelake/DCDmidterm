function PlantUI(text = "Option") {
    return `
    <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 60px;
    border: 2px solid #367A17;
    border-radius: 15px;
    background-color: #D0DDC9;
    ">
        <p style="
        font-size: 24px;
        
        ">${text}</p>
    </div>
    `
}

export const Button = PlantUI();