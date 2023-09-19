// run this code in any battle section to download all the battle images
for (let i = 0; i < 1000; i++) {
  if (document.images[i].classList.contains("target-tile__image")){
    var a = document.createElement("a");
    a.href = document.images[i].src;
    console.log(document.images[i]);
    a.download = document.images[i].src;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
