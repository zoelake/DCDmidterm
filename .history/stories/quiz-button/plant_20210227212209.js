function PlantUI(text = "Option") {
    return `
    <div style="
    width: 350px;
    height: 60px;
    border: 2px solid #367A17;
    
    background-color: #367A17;
    ">
        <p>${text}</p>
    </div>
    `
}

export const Button = PlantUI();