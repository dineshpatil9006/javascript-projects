const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const donwloadBtn = document.getElementById("donwloadBtn");
const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmpty();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmpty();
});

donwloadBtn.addEventListener("click", () => {
  let img = document.querySelector('.qr-body img');

  if (img !== null) {
    let imgAtr = img.getAttribute("src");
    donwloadBtn.setAttribute("href", imgAtr);
  } else {
    donwloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmpty() {
  if (qrText.value.length > 0) {
    qrText.style.border = "2px solid #7fb7c9";
    generateQRCode();
  } else {
    qrText.style.border = "3px solid red";
    qrText.placeholder = "Please Enter The Text or URL";

    // input box error animation
    qrText.classList.add("errorAnimation");
    setTimeout(() => {
      qrText.classList.remove("errorAnimation");
    }, 1000);
  }
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
