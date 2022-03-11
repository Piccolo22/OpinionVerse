let joinButton = document.querySelector("#join");
joinButton.addEventListener("mouseenter", () => {
    On(joinButton);
})
let arrow = document.querySelector(".arrowCircle");
arrow.addEventListener("mouseenter", () => {
    On(arrow);
})
let submit = document.querySelector("#submit");
submit.addEventListener("mouseenter", () => {
    On(submit);
})
let download = document.querySelector("#downloadAppButton");
download.addEventListener("mouseenter", () => {
    On(download);
})
function On(tag){
    tag.style.transitionProperty = "color, border";
    tag.style.transitionDuration = "2s";
}


let playerData = [
    {
        name : "Carry Minati",
        score : 08
    },
    {
        name : "Sikh Warrior",
        score : 08
    },
    {
        name : "Mackle",
        score : 08
    },
    {
        name : "Scout OP",
        score : 08
    }
];

function insertPlayers(){
    // playerData = JSON.parse(playerData);
    let mainDiv = document.querySelector("#seasonPlayers");
    playerData.forEach((ele) => {
        let div = document.createElement('div');
        let pName = document.createElement('p');
        let pScore =  document.createElement('p');
        pName.innerText = ele.name;
        pScore.innerText = ele.score;
        div.classList(seasonInfo, seasonPara);
        div.append(pName, pScore);
        mainDiv.appendChild(div);
    });
}

// let imageData = [
//     k
// ]

// insertPlayers();