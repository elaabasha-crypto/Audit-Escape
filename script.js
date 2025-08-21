function startEscapeRoom() {
    const name = document.getElementById('studentName').value;
    if (name) {
        localStorage.setItem('studentName', name);
        window.location.href = 'room1.html';
    } else {
        alert('Please enter your name.');
    }
}

function revealQuestion(id) {
    document.getElementById(id).style.display = 'block';
}

function nextRoom(room) {
    window.location.href = room;
}

window.onload = function() {
    if (document.getElementById('leaderboard')) {
        const name = localStorage.getItem('studentName');
        if (name) {
            document.getElementById('leaderboard').innerHTML = `<p>Congratulations, ${name}! You completed the escape room.</p>`;
        }
    }
}
