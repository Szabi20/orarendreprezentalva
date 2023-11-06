let i;
let key;
let tartalom;



const ido = {8:"8:00", 9:"9:00", 10:"10:00", 11:"11:00", 12:"12:00", 13:"13:00", 14:"14:00", 15:"15:00"};
i = 1;
for (key in ido) {
    document.getElementById("demo" + i).innerHTML = "" + ido[key];
    i++;
}


const napok={h:"Hétfö",k:"Kedd",sz:"Szerda",cs:"Csütörtök",p:"Péntek",szo:"Szombat",v:"Vasárnap"}
i = 1;
for (key in napok) {
    document.getElementById("reggel" + i).innerHTML = "" + napok[key];
    i++;
}


const hetf = {1: "Minecraft", 2: "Minecraft", 3: "Minecraft", 4: "----", 5: "----", 6: "Minecraft", 7: "----", 8: "----"}
const kedd = {1: "GTA V", 2: "GTA V", 3: "----", 4: "GTA V", 5: "----", 6: "GTA V", 7: "GTA V", 8: "GTA V"}
const szer = {1: "LOL", 2: "LOL", 3: "----", 4: "LOL", 5: "LOL", 6: "LOL", 7: "----", 8: "LOL"}
const csut = {1: "----", 2: "----", 3: "----", 4: "----", 5: "PUBG", 6: "PUBG", 7: "PUBG", 8: "PUBG"}
const pent = {1: "----", 2: "----", 3: "----", 4: "----", 5: "----", 6: "Fortnite", 7: "Fortnite", 8: "Fortnite"}
const szom = {1: "----", 2: "----", 3: "----", 4: "----", 5: "----", 6: "----", 7: "----", 8: "----"}
const vasa = {1: "----", 2: "----", 3: "----", 4: "----", 5: "----", 6: "----", 7: "----", 8: "----"}


tartalom = ``
for (key in hetf) {
    tartalom += `
    <td class="orak">${hetf[key]}</td>
    `
}
document.getElementById("hetf").innerHTML = tartalom;

tartalom = ``
for (key in kedd) {
    tartalom += `
    <td class="orak">${kedd[key]}</td>
    `
}
document.getElementById("kedd").innerHTML = tartalom;


tartalom = ``
for (key in szer) {
    tartalom += `
    <td class="orak">${szer[key]}</td>
    `
}
document.getElementById("szer").innerHTML = tartalom;



tartalom = ``
for (key in csut) {
    tartalom += `
    <td class="orak">${csut[key]}</td>
    `
}
document.getElementById("csut").innerHTML = tartalom;


tartalom = ``
for (key in pent) {
    tartalom += `
    <td class="orak">${pent[key]}</td>
    `
}
document.getElementById("pent").innerHTML = tartalom;


tartalom = ``
for (key in szom) {
    tartalom += `
    <td class="orak">${szom[key]}</td>
    `
}
document.getElementById("szom").innerHTML = tartalom;

tartalom = ``
for (key in vasa) {
    tartalom += `
    <td class="orak">${vasa[key]}</td>
    `
}
document.getElementById("vasa").innerHTML = tartalom;





// Világos és sötét mód váltása
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}