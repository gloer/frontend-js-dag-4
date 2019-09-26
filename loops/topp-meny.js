const topMenu = document.querySelector("#topMenu");

const bloggere = [
    { navn: "Annijor", url: "annijor.html" },
    { navn: "Pappahjerte", url: "pappahjerte.html" },
    { navn: "Funky Gine", url: "funkygine.html" },
    { navn: "Pilotfrue", url: "pilotfrue.html" },
    { navn: "Sophie Elise", url: "sophie-elise.html" }
];

for(const blogger of bloggere) {
    const valgtSide = document.location.href;
    const sjekk = valgtSide.search(blogger.url);

    let klasse = "";
    if(sjekk > 0) {
        klasse = "valgt";
    }

    topMenu.innerHTML += `
        <a class="${klasse}" href="${blogger.url}">${blogger.navn}</a>
    `;
}