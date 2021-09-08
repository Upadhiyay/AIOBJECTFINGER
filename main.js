function setup() {
    canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoded);
}

function modelLoded()
{
console.log("ModelLoded IS LODED")
}

function draw()
{
  image(video, 0, 0, 480, 380)  
}