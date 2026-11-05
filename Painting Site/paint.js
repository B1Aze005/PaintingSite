const board  = document.getElementById("board");
const context = board.getContext("2d");

let isDrawing = false;
const colorPicker = document.getElementById("color-picker");
const brushSize = document.getElementById("brush-size");
const clearButton = document.getElementById("clear-button");
const fillButton = document.getElementById("fill-button");
const downloadButton = document.getElementById("download-button");


board.addEventListener("mousedown", () => {isDrawing = true});
board.addEventListener("mouseup", () => {
    isDrawing = false
    context.beginPath();
});
board.addEventListener("mouseout", () => {isDrawing = false});
board.addEventListener("mousemove", draw);

clearButton.addEventListener("click", clearCanvas);
fillButton.addEventListener("click", fillCanvas);
downloadButton.addEventListener("click", downloadImage);


function draw(e){
    if(!isDrawing) return;
    context.lineWidth = brushSize.value;
    context.lineCap = "round";
    context.strokeStyle = colorPicker.value; 

    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.offsetX , e.offsetY);
}

function clearCanvas(){
    context.clearRect(0, 0, board.width, board.height);
}

function fillCanvas(){
    context.fillStyle = colorPicker.value;
    context.fillRect(0, 0, board.width, board.height);
}

function downloadImage(){
    const imageLink = document.createElement("a");
    imageLink.download = `paintingSite-${Date.now()}-.png`;
    imageLink.href = board.toDataURL("image/png");
    imageLink.click();
}


//Square button
const addSquare = document.getElementById("square");






//Circle Button
const addCircle  = document.getElementById("circle");
let circleTime = false

addCircle.addEventListener("click", drawCircle);

function drawCircle(){
    if(circleTime == false){
        circleTime = true;
        isDrawing = false;
        board.style.cursor = "cell";

        board.addEventListener("mousedown", reallyDrawCircle);

    }else{
        board.style.cursor = "crosshair";
        circleTime = false;
        board.removeEventListener("mousedown", reallyDrawCircle);
    }
}

function reallyDrawCircle(){
    const rect = board.getBoundingClientRect();
    const x = e.clientX - rect.left;           
    const y = e.clientY - rect.top;

    context.beginPath();
    context.arc(x, y, brushSize.value/2, 0, Math.PI*2);
    context.fillStyle = colorPicker.value;
    context.fill();

}