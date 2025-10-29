const urlParams = new URLSearchParams(window.location.search);
nb = urlParams.get("cover");

if (!(nb >= 0 && nb <= 31)) {
  window.location.replace("../coverartober2025");
}

if (nb == 0) {
  document.getElementById("previous").style.display = "none";
}

if (nb == 31) {
  document.getElementById("next").style.display = "none";
}

let previous = nb-1;
let next = Number(nb) + Number(1);

document.getElementById("previous").href = `/coverartober2025/view.html?cover=${previous}`;
document.getElementById("next").href = `/coverartober2025/view.html?cover=${next}`;

let titles = [
  ".*･｡ﾟ",
  "1 - digital playground",
  "2 - Calin",
  "3 - blue lightning",
  "4 - SUNKISSED",
  "5 - azerty vitamin ⁠◕",
  "6 - Unis0n",
  "7 - NeonBloodRace",
  "8 - ALL ★",
  "9 - Pommefreche",
  "10 - Xoxo Baby Velour",
  "11 - lunes furiosoooOO",
  "12 - Purple Ash",
  "13 - うずまき ⁠๑",
  "14 - Aurore",
  "15 - ENOCHIAN",
  "16 - 1%",
  "17 - kernel panic",
  "18 - DCIM",
  "19 - 999999kelvin",
  "20 - baby steps",
  "21 - SANG/BRULURE/SEL",
  "22 - Angel Edge",
  "23 - dress to depress",
  "24 - 2DAY IS 4ME",
  "25 - Chii Elixir",
  "26 - 666gambling²",
  "27 - RERERE",
  "28 - где Надежда",
  "29 - DSM-5 said ; ASD cues",
  "30 - CRACKH34RT",
  "31 - i.still.love.u",
];

document.querySelector('title').innerHTML = titles[nb];
document.querySelector('meta[property="og:title"]').setAttribute("content", titles[nb]);

let descriptions = [
  `.*･｡ﾟ
      <a href="https://linktr.ee/commandant.grant" target="_blank"
        >made by Wendy (cdtgrnt)</a
      >
      with *, following
      <a href="https://www.instagram.com/p/DPJdsHNjGj5/" target="_blank">
        list by Sukai/Mrzozo/Louyzeu/Miamo
      </a>`,
  "DVi - Telecompo, Health + Human System Division",
  "Pepite - Monte-Carlo",
  "Deep Purple - Highway Star",
  "Pokemon Mystery Dungeon, Explorers of Sky OST - On the Beach at Dusk",
  "Evanescence - Bring me to life",
  "Babymorocco - i wish you would make it easy",
  "Vitalic - My Friend Dario",
  "Steven Universe OST - What's the Use of Feeling (Blue)?",
  "Crash Bandicoot 3 OST - Orient Express/Midnight Run",
  "Dire Straits - Fade to Black",
  "Garfield PS2 (2004) OST - Menu",
  "Prince - When Doves Cry",
  "Kingo Hamada - Midnight Cruisin'",
  "Blues Pills - High Class Woman",
  "Magenta Club - Honda Wave",
  "Gorillaz - One Percent",
  "Ninajirachi - Fuck My Computer",
  "Feldup - Take It Slow",
  "Placebo - The Bitter End",
  "CoLD SToRAGE - Messij",
  `    proudly made w/ <a href="https://sukai.neocities.org/cat2025/" target="_blank">sukai</a> & <a href="https://emilyrose.fr/projects/coverartober-2025" target="_blank">milymew</a> *`,
  "Linkin Park - Castle Of Glass",
  "Red Hot Chili Peppers - Dark Necessities ",
  "Daughter - No Care",
  "Full Flower Moon Band - Enemy",
  "Balatro OST - Planet Pack",
  `made, remade and reremade w/<a href="https://ardakaniz.github.io/coverartober25/" target="_blank">arda</a><br>.*･｡ﾟ.*･｡ﾟ`,
  "Les Louanges - La nuit est une panthère",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ"
];


document.querySelector("h1").innerHTML = titles[nb];
if (nb != 3 && nb !=14 && nb!=27 && nb!=28)
  document.querySelector(".album-frame-cover").src = `covers/${nb}.jpg`;
else if (nb == 3 || nb == 14 || nb==27 || nb==28)
  document.querySelector(".album-frame-cover").src = `covers/${nb}.gif`;
else {
  document.querySelector(".album-frame-cover").src = "covers/blank.jpg";
}
  document.querySelector(".description").innerHTML = "# " + descriptions[nb];


var musicPlayer = document.createElement("audio");
musicPlayer.setAttribute("src", `music/${nb}.mp3`);
musicPlayer.setAttribute("controls", "controls");
if (nb>0 && nb!=21 && nb!=27) {
  document.querySelector(".album-infos").appendChild(musicPlayer);
  document.querySelector("audio").volume = 0.5; 

  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: titles[nb],
      artist: descriptions[nb],
      artwork: [{ src: (nb==3 || nb==14 || nb==27 || nb==28 ) ? `covers/${nb}.gif` : `covers/${nb}.jpg` }],
    });
  }
}
document.querySelector(".album-frame-cover").addEventListener("click", () => document.querySelector("audio").play());

if (nb==21) {
  var goo3grid = document.createElement("img");
  goo3grid.setAttribute("src",`covers/21all.jpg`);
  document.querySelector(".album-infos").appendChild(goo3grid);
}