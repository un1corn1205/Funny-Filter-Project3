
noseX=0;
noseY=0;

function preload(){
mustache=loadImage('https://i.postimg.cc/QtKRv2z2/mustache.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX-25,noseY+5,50,35);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("NoseX= " + results[0].pose.nose.x);
        console.log("NoseY= " + results[0].pose.nose.y);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}