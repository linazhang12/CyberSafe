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

function loadStory(number){
    var age = localStorage.getItem('Age');
    let gifName = "images/" + age + "-task" + number + ".gif";
    document.getElementById("image").src=gifName;
    document.getElementById('taskStory').innerHTML = "Next you want to make sure you stay safe online.";
}

function storyChoice(correct, message){
    document.getElementById('result').innerHTML = message;
    if (correct == true){
        document.getElementById('next').disabled = false;
    }
}

// For live password checker, received help from stackoverflow
// https://stackoverflow.com/questions/948172/password-strength-meter
function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (score > 80)
        return "Strong!";
    if (score > 60)
        return "Good";
    if (score >= 30)
        return "Weak";
    if (score < 30)
        return "Not good"

    return "";
}

$(document).ready(function() {
    $("#password").on("keypress keyup keydown", function() {
        var pass = $(this).val();
        $("#strength_human").text(checkPassStrength(pass));

        if ($("#strength_human").text().indexOf("Strong")>-1) //if it is "Strong"
            $("#strength_human").css({"color":"Green"});
        else if
            ($("#strength_human").text().indexOf("Good")>-1) //if it is "Good"
            $("#strength_human").css({"color":"Blue"});
        else if
            ($("#strength_human").text().indexOf("Weak")>-1) //if it is "Weak"
            $("#strength_human").css({"color":"Orange"});
        else if
            ($("#strength_human").text().indexOf("Not")>-1) //if it is "Not good"
            $("#strength_human").css({"color":"Red"});
        else
            $("#strength_human").css({"color":"black"});
    });
});
// end of help from stackoverflow --------------------------