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
}