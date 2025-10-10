const urlParams = new URLSearchParams(window.location.search);
nb = urlParams.get("cover");

if (!(nb >= 0 && nb <= 31)) {
  window.location.replace("../");
}

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
      </a>
      .*･｡ﾟ"`,
  "# DVi - Telecompo, Health + Human System Division",
  "# pepite - monte-carlo",
  "# Deep Purple - Highway Star",
  "# Pokemon Mystery Dungeon, Explorers of Sky OST - On the Beach at Dusk",
  "# evanescence - bring me to life",
  "# Babymorocco - i wish you would make it easy ",
  "# Vitalic - My Friend Dario",
  "# Steven Universe OST - What's the Use of Feeling (Blue)?",
  "# Crash Bandicoot 3 OST - Orient Express/Midnight Run",
  "# Dire Straits - Fade to Black",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ",
  ".*･｡ﾟ"
];


document.querySelector("h1").innerHTML = titles[nb];
if (nb != 3)
  document.querySelector(".album-frame-cover").src = `covers/${nb}.jpg`;
else if (nb == 3)
  document.querySelector(".album-frame-cover").src = `covers/${nb}.gif`;
else {
  document.querySelector(".album-frame-cover").src = "covers/blank.jpg";
}
  document.querySelector(".description").innerHTML = descriptions[nb];


var musicPlayer = document.createElement("audio");
musicPlayer.setAttribute("src", `music/${nb}.mp3`);
musicPlayer.setAttribute("controls", "controls");
if (nb>0) document.querySelector(".album-infos").appendChild(musicPlayer);

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