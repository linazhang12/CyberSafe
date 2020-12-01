var young = document.getElementById("young");
var old = document.getElementById("old");

var story1 =    ["Hey, are you ready for school? I can’t wait!", 
                "I’m just going to open zoom and find the class link… what was the link again?", 
                "I guess I’ll have to open the emails and search for it.", 
                "Oh look I got an email for a free phone!", 
                "Wow that sounds like a great deal! Let me read through this email before class."];
var story2 =    ["Class is finally over!", 
                "Let me check what she assigned for homework.", 
                "Looks like I have to make an account to read the textbook.",
                "Alright I’m going to create the account now! I've entered my email and username"];
var story3 =    ["Good thing I made a strong password to keep my work safe.", 
                "Maybe I should find out if there’s anything else I can do to protect myself online"];
var story4 =    ["Wow what a long day. School is finally over!",
                "Time to log out of zoom and grab a snack.",
                "Oh wait what’s this?", 
                "It says that an update is available for my computer."];
var story5 =    ["Finally done with homework!", 
                "I think I’m going to play some video games online.", 
                "I like chatting with the teammates from games."];
var storyCounter = 0;

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

function storyLoad(number){
    var storyNum = number;
    if ( storyCounter == storyNum.length ){
        storyCounter = 0;
        storyBlock.style.display = 'none';
        userChoice.style.display = 'block';
    }
    console.log(storyNum[storyCounter]);
    document.getElementById("storyText").innerHTML = storyNum[storyCounter];
    storyCounter++;
}

function storyChoice(correct, message){
    document.getElementById('result').innerHTML = message;
    if (correct == true){
        document.getElementById('next').disabled = false;
    }
}

function setVisibility() {
    var age = localStorage.getItem('Age');
    if(age == 'older'){
        older.style.display = 'block';
        younger.style.display = 'none';
    }
    else{
        younger.style.display = 'block';
        older.style.display = 'none';
    }
}

function checkForUpdates(correct) {
    var txt;
    if (confirm("You currently have 1 update available!\nThis update:\n• Does not reset any security settings\n• Contains minor bug fixes\n\n Press OK to Update or Cancel to cancel.")) {
        txt = "You completed the update! Since you read about what the update did and it was a minor update with bug fixes, it was okay to update now.";
    } else {
        txt = "Good job for being cautious! However, since you read that it was a minor update with bug fixes, it would be okay to update now.";
    }
    document.getElementById("updateAnswer").innerHTML = txt;
    document.getElementById("afterAnswer").style.display = "block";
    
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