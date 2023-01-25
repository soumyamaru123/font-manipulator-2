function setup() {
    video = createCapture(VIDEO);
    video.size(450,450);
    canvas= createCanvas(440,450);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
var createcapture = createCapture();



function modelLoaded() {
    console.log('PoseNet Is Initilized!');
    
}

function gotPoses(results)
 {
   if(results.length > 0)
   {
    console.log(results);
   }

}

function draw() {
    background('#89CFF0');
}