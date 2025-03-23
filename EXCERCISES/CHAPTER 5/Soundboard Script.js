document.addEventListener("DOMContentLoaded", () => { // This line ensures that the script can only run after the html document has been fully opened. 
    const soundboard = document.getElementById("soundboard"); // This selects the element with "soundboard" from html to hold the sound buttons
    const PreviousButton = document.getElementById("Previous");
    const NextButton = document.getElementById ("Next");
    const VolumeControl = document.getElementById ("Volume");
    const audioSamples = [
        { name: "Ah-Ha", file: "ah-ha.mp3", duration: "1.4" },
        { name: "Dan", file: "dan.mp3", duration: "0.5" },
        { name: "Bang out of order", file: "bangoutoforder.mp3", duration: "0.1" },
        { name: "Email Of The Evening", file: "emailoftheevening.mp3", duration: "0.3" },  // these are the audio files expressed in an array of objects
        { name: "Hello Partridge", file: "hellopartridge.mp3", duration: "0.0" },        // some audios are missing from the respect audio file in github
        { name: "I ate a scotch egg", file: "iateascotchegg.mp3", duration: "0.1" },
        { name: "I'm confused", file: "imconfused.mp3", duration: "0.1" }, // I was only ever able to dig up one more audio file to place in the soundboard
        { name: "Jurassic Park", file:"jurassicpark.mp3", duration: "0.9"}, 

        { name: "Hahee Cat", file:"hahee.mp3", duration:"0.4"}, // I had to add more audio files on my own
        { name: "Cat Ringtone", file:"oaicatringtone.mp3", duration:"0.5"},
        { name: "GET OUT", file:"GETOUT.mp3", duration:"0.2"},
        { name: "Let me know", file:"letmeknow.mp3", duration:"0.14"},
        { name: "Peter used a Death Note", file:"petadeathnote.mp3", duration:"0.16"},
        { name: "Rizz", file:"Rizz.mp3", duration:"0.2"},
        { name: "RAAAH",file:"RAAAH.mp3", duration:"0.2"},
        { name: "Chinese Gong", file:"chinesegong.mp3", duration:"0.8"},
        { name: "I Can't Move it Move it", file:"ICANTMOVEIT.mp3", duration:"0.06"},
    ];
    
    let currentAudio = null; // It tracks the played audio and it can be stopped if the user clicks a different button

  
        audioSamples.forEach((sample, index) => { // the loop goes through each audio in the Audio Samples array
        const sampleButton = document.createElement("div");
        sampleButton.classList.add("sample");
        sampleButton.innerHTML = `<strong>${index + 1}.</strong><br>${sample.name}<br>${sample.duration}`; //Each audio has each their own button
                                                                                                 // This means that any new added audio will automatically have a button
        const audioElement = new Audio(`Audio/${sample.file}`);
        audioElement._sampleButton = sampleButton;

        sampleButton.addEventListener("click", () => {  // This is where the user can click the sound button to play the audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio._sampleButton.classList.remove("active");  // When the audio ends, the "active" class is removed which means that the audio
            }                                                               // is no longer playing

            currentAudio = audioElement;
            audioElement.volume = volumeControl.value;  // This is a volume slider code that I searched up on the internet
            audioElement.play();                      // This just allows the user to control the volume of the sound as they wish
            sampleButton.classList.add("active");

            audioElement.addEventListener("ended", () => {
                sampleButton.classList.remove("active");
            });
        });

        soundboard.appendChild(sampleButton);
    });
  
    // This is where the user can control the volume of the audio
    const volumeControl = document.createElement("input");
    volumeControl.type = "range";
    volumeControl.min = "0";
    volumeControl.max = "1";
    volumeControl.step = "0.1";
    volumeControl.value = "0.5";
    volumeControl.classList.add("volume-control");
    document.querySelector(".soundboard-container").appendChild(volumeControl); // this makes the volume slider actually visible
                                                                        // and interactable in the website itself.
});