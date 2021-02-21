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
    if (msg == "take my selfie") {
        startSpeaking();
    }
    else {
        var synthesis2 = window.speechSynthesis;
        var speak_data2 = document.getElementById("textbox").value;
        var utterance2 = new SpeechSynthesisUtterance(speak_data2);
        synthesis2.speak(utterance2);
    }
}
function startSpeaking() {
    var synthesis = window.speechSynthesis;
    var speak_data = "taking your selfie in 5 seconds";
    var utterance = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterance);
    utterance.volume = 0.5;
    utterance.rate = 1;
    utterance.lang = "en-GB";
    Webcam.attach("camera");
    setTimeout(function(){
        take_snapshot();
        download_image();
    }, 5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function(img_url){
        document.getElementById("result").innerHTML = "<img id='selfie_output' src='"+img_url+"'>";
    })
}
function download_image() {
    link = document.getElementById("download_img");
    new_img = document.getElementById("selfie_output").src;
    link.href = new_img;
    link.click();
}