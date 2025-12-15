const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

function Ball(xPos, yPos, Radius, Color) {
    g.fillStyle = Color;
    g.beginPath();
    g.arc(xPos, yPos, Radius, 0, Math.PI * 2);
    g.closePath;
    g.fill();
    g.stroke();

}

function RandomHSL(){
    let h = Math.random() * 360;
    let s = 50;
    let l = Math.random()*100;
    let hsl= `hsl(${h}, ${s}%, ${l}%`;
    console.log(hsl);
    return hsl;
}

for(let i = 0; i <2000; i++){
    Ball(
        Math.random()* 1400,
        Math.random()* 600,
        Math.random()* 30,
        RandomHSL()
    );
}

// Ball(resultWidth, resultHeight, resultRadius, "Gray");
// Ball(resultWidth, resultHeight, resultRadius, "Red");
// Ball(resultWidth, resultHeight, resultRadius, "Orange");
// Ball(resultWidth, resultHeight, resultRadius, "Pink");
// Ball(resultWidth, resultHeight, resultRadius, "Purple");
// Ball(resultWidth, resultHeight, resultRadius, "Blue");
// Ball(resultWidth, resultHeight, resultRadius, "Yellow");
// Ball(resultWidth, resultHeight, resultRadius, "Black");
// Ball(resultWidth, resultHeight, resultRadius, "Magenta");
// Ball(resultWidth, resultHeight, resultRadius, rgb(255,200,200));



