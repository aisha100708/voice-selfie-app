var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function startListening() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var msg = event.results[0][0].transcript;
    console.log(msg);
    document.getElementById("textbox").innerHTML = msg;
    startSpeaking();
}
function startSpeaking() {
    var synthesis = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterance = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterance);
    utterance.volume = 0.5;
    utterance.rate = 2.5;
    utterance.lang = "en-GB";
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach("camera");