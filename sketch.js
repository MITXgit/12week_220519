// // Copyright (c) 2019 ml5
// //
// // This software is released under the MIT License.
// // https://opensource.org/licenses/MIT

// /* ===
// ml5 Example
// PoseNet example using p5.js
// === */

// let video;
// let poseNet;
// let poses = [];

// function setup() {
//   createCanvas(640, 480);
//   rectMode(CENTER);
//   video = createCapture(VIDEO);
//   video.size(width, height);

//   // Create a new poseNet method with a single detection
//   poseNet = ml5.poseNet(video, modelReady);
//   // This sets up an event that fills the global variable "poses"
//   // with an array every time new poses are detected
//   poseNet.on('pose', function (results) {
//     poses = results;
//   });
//   // Hide the video element, and just show the canvas
//   video.hide();
// }

// function modelReady() {
//   select('#status').html('Model Loaded');
// }

// function mousePressed() {
//   console.log(JSON.stringify(poses))
// }

// function draw() {
//   image(video, 0, 0, width, height);
//   strokeWeight(2);

//   // For one pose only (use a for loop for multiple poses!)
//   if (poses.length > 0) {
//     let pose = poses[0].pose;

//     fill(255, 0, 255);
//     let rightEar = pose['rightEar'];
//     rect(rightEar.x, rightEar.y, 50, 50);
//     let leftEar = pose['leftEar'];
//     rect(leftEar.x, leftEar.y, 50, 50);

//     // Create a pink ellipse for the nose
//     fill(213, 0, 143);
//     let nose = pose['nose'];
//     ellipse(nose.x, nose.y, 20, 20);

//     // Create a yellow ellipse for the right eye
//     fill(255, 215, 0);
//     let rightEye = pose['rightEye'];
//     ellipse(rightEye.x, rightEye.y, 50);

//     // Create a yellow ellipse for the right eye
//     fill(255, 215, 0);
//     let leftEye = pose['leftEye'];
//     ellipse(leftEye.x, leftEye.y, 50);

//     let leftShoulder = pose['leftShoulder'];
//     let leftElbow = pose['leftElbow'];
//     let leftWrist = pose['leftWrist'];
    
    
//     strokeWeight(15);
//     stroke(0,255,255);
//     line(leftShoulder.x, leftShoulder.y, leftElbow.x, leftElbow.y);
//     line(leftElbow.x, leftElbow.y, leftWrist.x, leftWrist.y);
    
//     strokeWeight(2);
//     stroke(0);
//     ellipse(leftShoulder.x, leftShoulder.y, 50);
//     ellipse(leftElbow.x, leftElbow.y, 50);
//     ellipse(leftWrist.x, leftWrist.y, 50);

//     let x = (rightWrist.x + leftWrist.x) /2 ;
//     let y = (rightWrist.x + leftWrist.x) /2 ;
//     let s = dis(rightWrist.x, rightWirst.y, leftWrist.x,leftWrist.y) ;
//     ellipse(x,y,s);

//     // let cropRightEye = get(rightEye.x - 25, rightEye.y - 25, 50, 50);
//     // set(rightEar.x - 25, rightEar.y - 25, cropRightEye);

//     // let cropLeftEye = get(leftEye.x - 25, leftEye.y - 25, 50, 50);
//     // set(leftEar.x - 25, leftEar.y - 25, cropLeftEye);
//   }
// }

// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* === 
ml5 Example
PoseNet example using p5.js

Available parts are:
0   nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
=== */ 

//--------------------------------구분선------------------------


let video;
let poseNet;
let poses = [];
let noseImage;
// let leftEyeImage;
// let rightEyeImage;

function preload() {
  img_1 = loadImage('1.png');
  img_2 = loadImage('2.png');
  // img_3 = loadImage('3.png');
  img_4 = loadImage('4.png');
}

function setup() {
  createCanvas(1280, 720);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
      rectMode(CENTER);
    
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses[0].pose.keypoints[0].part))
}

function draw() {
  imageMode(CORNER);
  image(video, 0, 0, width, height);

  imageMode(CENTER);

  image(img_1, width/2, height/3*2, 150,100);

  if (poses.length > 0) {
    let pose = poses[0].pose;

    let leftShoulder = pose['leftShoulder'];
    let rightShoulder = pose['rightShoulder'];
    let leftElbow = pose['leftElbow'];
    let rightElbow = pose['rightElbow'];
    let leftWrist = pose['leftWrist'];
    let rightWrist = pose['rightWrist'];


    threePoints(leftShoulder,leftElbow,leftWrist);
    threePoints(rightShoulder,rightElbow,rightWrist);

    
    // if(label == "OHYEAH"){
    //   ellipse(56, 46, 55, 55);
    //   //image(img_1,width/2,height/2);
    //    }
    // else if(label == "GOOD") {
    //   ellipse(50, 50, 55, 55);
    //   //image(img_2,width/2,height/2);
    // }
    // else{
    //   ellipse(60, 60, 55, 55);
    //   //image(img_3,width/2,height/2);
    // }


//     fill(255,0,0);
//     noStroke();
   
//     ellipse(nose.x, nose.y, 50);
   
//     ellipse(leftShoulder.x, leftShoulder.y, 50);
//     ellipse(leftElbow.x, leftElbow.y, 50);
//     ellipse(leftWrist.x, leftWrist.y, 50);
   
//     ellipse(rightShoulder.x, rightShoulder.y, 50);
//     ellipse(rightElbow.x, rightElbow.y, 50);
//     ellipse(rightWrist.x, rightWrist.y, 50);
   
  }
}

// function linePoints(p1,p2){
//     let distance = dist(p1.x, p1.y, p2.x, p2.y);
//     strokeWeight(2);
//     stroke(255);
//     line(p1.x, p1.y, p2.x, p2.y);
//     noStroke();

//     fill(0);
//     rect((p1.x+p2.x)/2, (p1.y+p2.y)/2-10,     textWidth(int(distance))+50,40);
//     textAlign(CENTER);
//     textSize(30);
//     fill(255);
//     text(int(distance) + " px",(p1.x+p2.x)/2, (p1.y+p2.y)/2);
//   // print(p1.x);
// }

function threePoints(p1,p2,p3){
    let distEW = dist(p1.x, p1.y, p3.x, p3.y);
    let distA = dist(p1.x, p1.y, p2.x, p2.y);
    let distB = dist(p2.x, p2.y, p3.x, p3.y);
    
    let distEWweight = map(distEW,100,400,5,1);

  
  
    let rad = (atan2(p3.y - p2.y, p3.x - p2.x) - atan2(p1.y - p2.y, p1.x - p2.x));
    let angle;
    
    let calAngle = acos((distB*distB + distA*distA - distEW*distEW)/(2*distB*distA))
    //세 변의 길이로 각 구하기
    
    let ts = 15;
    let c;
    
  strokeWeight(10);
    stroke(255,255,0);
    line(p1.x, p1.y, p2.x, p2.y);
    line(p2.x, p2.y, p3.x, p3.y);
  
    strokeWeight(distEWweight);
    stroke(255);
    line(p1.x, p1.y, p3.x, p3.y);
    noStroke();

  
    if ((distA+distB) <= distEW*1.05){
            c = color(0,0,255);

      if(p1.y > p2.y && p2.y > p3.y){
        c = color(255);
        }
    }  else {
      c = color(255,0,0);
    }
  
    if(abs(rad) % TWO_PI > PI){       //range 0 - 3.14
      angle  = abs(abs(rad)-TWO_PI);
    } else {
      angle = abs(rad);

    }
    
    if (angle > PI*0.9){
       c = color(0,0,255);
    }  else {
      c = color(255,0,0);
    }
  
  
    fill(c);
    ellipse(p1.x, p1.y, 50);
    ellipse(p2.x, p2.y, 50);
    ellipse(p3.x, p3.y, 50);
  
  
    fill(0,160);
    rect((p1.x+p3.x)/2, (p1.y+p3.y)/2-ts*0.3,textWidth(int(distEW))+ts,ts*1.2);
    rect((p1.x+p2.x)/2, (p1.y+p2.y)/2-ts*0.3,textWidth(int(distA))+ts,ts*1.2);
    rect((p2.x+p3.x)/2, (p2.y+p3.y)/2-ts*0.3,textWidth(int(distB))+ts,ts*1.2);
    textAlign(CENTER);
    textSize(ts);
    fill(255);
    text(int(distEW) + "",(p1.x+p3.x)/2, (p1.y+p3.y)/2); //어깨에서 손목까지
    text(int(distA) + "",(p1.x+p2.x)/2, (p1.y+p2.y)/2);
    text(int(distB) + "",(p2.x+p3.x)/2, (p2.y+p3.y)/2);
    
    fill(0,160);
    // rect((p1.x+p3.x)/2-textWidth(int(distEW))-70, (p1.y+p3.y)/2-ts*0.3, textWidth(int(distEW))+ts*1.8,ts*1.2);
    rect(p2.x, p2.y,textWidth(degrees(angle).toFixed(0)+"")+ts,ts*1.2);
    
  fill(255);
    // text(int(distA+distB) + " px",(p1.x+p3.x)/2-textWidth(int(distEW))-70, (p1.y+p3.y)/2); //어깨에서 손목까지
    // text(degrees(angle).toFixed(0) +" deg",p2.x+100, p2.y-20);
    text(degrees(angle).toFixed(0)+"°",p2.x, p2.y+5); //radian에 %로 각 보정하기 
    // text(degrees(calAngle).toFixed(0)+"",p2.x+40, p2.y-40); //코사인제2법칙으로 각 구하기 

}

