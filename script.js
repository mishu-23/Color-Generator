const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    //  genereaza numar random de forma #abcdef
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);
    //  creeaza casute
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
    <div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>
    `;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert("failed to copy the code!"));
};

refreshBtn.addEventListener("click", generatePalette);
