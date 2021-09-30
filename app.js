// import functions and grab DOM elements
const aragonImg = document.getElementById('aragon');
const legolasImg = document.getElementById('legolas');
const gimliImg = document.getElementById('gimli');
const fellowImg = document.getElementById('fellowship');
const swordSound = document.getElementById('aragonSound');
const bowSound = document.getElementById('legolasSound');
const axeSound = document.getElementById('gimliSound');
const ringSound = document.getElementById('frodoSound');
const fellowSound = document.getElementById('fellowshipAudio');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

aragonImg.addEventListener('click', ()=>{
    swordSound.play();
});
legolasImg.addEventListener('click', ()=>{
    bowSound.play();
});
gimliImg.addEventListener('click', ()=>{
    axeSound.play();
});
fellowImg.addEventListener('click', ()=>{
    fellowSound.play();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        swordSound.play();}
    if (event.key === 'a') {
        swordSound.play();}
    if (event.key === 'l') {
        bowSound.play();}
    if (event.key === 'g') {
        axeSound.play();}
    if (event.key === 'f') {
        ringSound.play();}
});