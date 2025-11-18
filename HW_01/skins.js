const skins = [
    "SKINS/basic.css",
    "SKINS/dark.css",
    "SKINS/modern.css"
];

let currentSkinIndex = 0;

function changeSkin() {
    const link = document.getElementById("skinStylesheet");
    currentSkinIndex = (currentSkinIndex + 1) % skins.length;
    link.href = skins[currentSkinIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("changeSkinBtn");
    btn.addEventListener("click", changeSkin);
});
