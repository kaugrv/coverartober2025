function initAlbums() {
  // const date = new Date();
  // let day = date.getDate();

  day = 0;

  for (let i = 0; i < 32; i++) {
    var div = document.createElement("div");
    div.classList.add("grid-item");

    var a = document.createElement("a");
    if (i <= day) a.href = `covers/${i}.jpg`;
    else a.href = "covers/blank.jpg";
    a.target = "_blank";

    var img = document.createElement("img");
    if (i <= day) img.src = `covers/${i}.jpg`;
    else img.src = "covers/blank.jpg";
    img.id = "album-" + i;

    a.appendChild(img);

    div.appendChild(a);

    document.getElementById("albums-grid").appendChild(div);
  }
}

initAlbums();
