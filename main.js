var canvas = "";
function preload() {

}
function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getPoses);
}
function draw() {
    background("red");
}
function modelLoaded() {
    console.log("model loaded");
}
function getPoses(error, results) {
    if (error) {
        console.log(error);
    }

    else (results) 
        console.log(results);
    


}