const adjectives = [
    "Amazing","Crazy","Smart","Dynamic","Epic",
    "Visionary","Rapid","Bright","Creative","Bold"
];

const businessTypes = [
    "Tech","Foods","Garments","Solutions","Labs",
    "Systems","Studios","Ventures","Works","Hub"
];

const endings = [
    "Pro","Hub","Global","World","X",
    "Group","Sphere","Network","Bros","Limited"
];

function generateName(){

    let first =
        adjectives[Math.floor(Math.random()*adjectives.length)];

    let second =
        businessTypes[Math.floor(Math.random()*businessTypes.length)];

    let third =
        endings[Math.floor(Math.random()*endings.length)];

    let businessName = `${first} ${second} ${third}`;

    document.getElementById("businessName").innerText =
        businessName;
}

function copyName(){

    let text =
        document.getElementById("businessName").innerText;

    navigator.clipboard.writeText(text);

    alert("Business Name Copied!");
}