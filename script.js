// typing animation

const text = "Hello I'm Sachit Singh Rekwal";
let i = 0;

function typeEffect(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeEffect,80);

}

}

typeEffect();


// cursor glow

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{
glow.style.left = e.clientX+"px";
glow.style.top = e.clientY+"px";
});


// terminal animation

const terminalText = `
> Initializing portfolio...
> Loading projects...
> Access granted.
> Welcome developer.
`;

let index = 0;

function hackerTyping(){

if(index < terminalText.length){

document.getElementById("terminal-text").innerHTML += terminalText.charAt(index);

index++;

setTimeout(hackerTyping,40);

}

}

hackerTyping();


// particles

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});


// github calendar

GitHubCalendar(".calendar","yourgithubusername");


// 3D globe

const globe = new ThreeGlobe();

const scene = new THREE.Scene();
scene.add(globe);

const camera = new THREE.PerspectiveCamera();
camera.position.z = 300;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,400);

document.getElementById("globe").appendChild(renderer.domElement);

function animate(){

requestAnimationFrame(animate);

globe.rotation.y += 0.002;

renderer.render(scene,camera);

}

animate();


// chat bot

function openChat(){

let msg = prompt("Ask me something:");

if(msg){

alert("AI response coming soon.");

}

}