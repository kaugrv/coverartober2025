let titles = [
  ".*･｡ﾟ",
  "1 - digital playground",
  "2 - Câlin",
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

function initAlbums() {
  
  day = 14;

  for (let i = 0; i < 32; i++) {
    var div = document.createElement("div");
    div.classList.add("grid-item");

    var a = document.createElement("a");
    if (i<=day) a.href = `view.html?cover=${i}`;


    var img = document.createElement("img");
    if (i <= day) {
      if (i!=3 && i!=14) img.src = `covers/${i}.jpg`; 
      else img.src = `covers/${i}.gif`;
    } 
    else img.src = "covers/blank.jpg";
    img.id = "album-" + i;
    img.title = titles[i];

    a.appendChild(img);

    div.appendChild(a);

    document.getElementById("albums-grid").appendChild(div);
  }
}

initAlbums();
