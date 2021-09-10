function setup() {
    canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoded()
{
console.log("ModelLoded IS LODED")
}

function gotResult(error, results)
{
if (error){
console.log(error);
}
else
{
document.getElementById("bta").innerHTML = results[0].label;
document.getElementById("tta").innerHTML = results[0].confidence.toFixed(3);
}
}


