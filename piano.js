// We are selecting all the elements with the class key inside the element with class 'piano-keys'.
const pianoKeys = document.querySelectorAll(".piano-keys .key"),

//we will select the volume slider input element. 
volumeSlider = document.querySelector(".volume-slider input"),

// Now we are selecting the check-box input element for showing and hiding keys.
keysCheckbox = document.querySelector(".keysCheckbox input");

// We will declare an array (a collection of everything)
let allKeys = [];

// Creating an audio object and giving it a default audio
let audio = new Audio("tunes/a.wav");

// Creating a function to play a specific tune based on the key pressed.
const playTune = (key) => {
    // We are setting the audio source dinamically based on the key pressed.
    audio.src = `tunes/${key}.wav`;

    // Playing the audio.
    audio.play();

    // Selecting the key element that was clicked using its data set value.
    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    // Adding the active class to visually highlight the key.
    clickedKey.classList.add("active");

    // Removing the active class after 150ms to create a visual press effect.
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    })
}

// Looping through each key element in the piano key's list.
pianoKeys.forEach(key=>{
    
    // storing each key's data set value in the all keys array
    allKeys.push(key.dataset.key);

    // adding a clicked event listener to each key to play the corresponding tune when clicked.
    key.addEventListener("click", ()=>playTune(key.dataset.key));


})
// function to show or hide key labels based on check box status.
const showHideKeys = ()=>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"))
}

// function to adjust the volume of the audio based on slider input.
const handleVolume = (e)=>{
    audio.volume = e.target.value;
}
// function to detect key pressers and play the corresponding sounds.
const pressedKey = (e)=>{
    // checking if the pressed key exists in the all keys array then playing the tune.
    if(allKeys.includes(e.key)) playTune(e.key);    
}
// adding an eventListener to the checkbox to toggle key labels visibilities.
keysCheckbox.addEventListener("click", showHideKeys);

// Adding an evenListener to the volume slider to adjust the audio volume in real time.
volumeSlider.addEventListener("input",handleVolume);

//Adding an evenListener to detect key presses on the keyboard and play the respective tune.
document.addEventListener("keydown",pressedKey);

