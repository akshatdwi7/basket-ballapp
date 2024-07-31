

let homeScoreBtn = document.getElementById("home-score-1")
let homeScoreEl= document.getElementById("score-num")
let homescore = 0 

function increaseHomeone(){
    homescore +=1 
    homeScoreEl.textContent = homescore
}
function increaseHometwo(){
    homescore +=2
    homeScoreEl.textContent = homescore
}
function increaseHomethree(){
    homescore +=3
    homeScoreEl.textContent = homescore
}


let guestscorebtn = document.getElementById("guest-btn1")
let guestScoreEl= document.getElementById("guestscorenum")
let guestScore = 0 

function increaseguestscoreone(){
    guestScore +=1 
    guestScoreEl.textContent = guestScore
}
function increaseguestscoretwo(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
}
function increaseguestscorethree(){
    guestScore +=3
    guestScoreEl.textContent = guestScore
}