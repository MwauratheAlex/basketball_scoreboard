let homeScore = 0
let guestScore = 0

const homeScoreEl = document.getElementById("home-score-el")
const guestScoreEl = document.getElementById("guest-score-el")


// Home scores
function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlight()
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlight()
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlight()
}

// Guest scores
function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlight()
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlight()
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlight()
}

// Highlight
function highlight() {
    if (homeScore === guestScore) {
        homeScoreEl.style.color = "#F94F6D"
        guestScoreEl.style.color = "#F94F6D"
    }
    if (homeScore > guestScore) {
        homeScoreEl.style.color = "#E11D48"
        guestScoreEl.style.color = "#F94F6D"
    }
    if (homeScore < guestScore) {
        homeScoreEl.style.color = "#F94F6D"
        guestScoreEl.style.color = "#E11D48"
    }
}