var young = document.getElementById("young");
var old = document.getElementById("old");

function setYoung() {
    localStorage.setItem('Age', "younger");
    young.style.backgroundColor = "#F9C70C";
    old.style.backgroundColor = "#FFFFFF"
    document.getElementById('start').disabled = false;
}

function setOld() {
    localStorage.setItem('Age', "older");
    old.style.backgroundColor = "#F9C70C";
    young.style.backgroundColor = "#FFFFFF"
    document.getElementById('start').disabled = false;
}

function loadVideo(number){
    var age = localStorage.getItem('Age');
    let videoName = "videos/" + age + "-task" + number + ".mp4";
    document.getElementById("videoSrc").src = videoName;
    document.getElementById("video").load();
}

function storyChoice(correct, message){
    document.getElementById('result').innerHTML = message;
    if (correct == true){
        document.getElementById('next').disabled = false;
    }
}