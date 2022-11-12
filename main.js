song="";

leftwristx=0;

leftwristy=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}

function play(){
    song.play();
song.setVolume(1);
song.rate(1);
}

function modelloaded(){
    console.log("modelo cargado");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
}
}