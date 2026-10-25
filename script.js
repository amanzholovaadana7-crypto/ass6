let count = 0;
const countText = document.getElementById("count");
function updateCount() {
  countText.textContent = count;
}
document.getElementById("increase").addEventListener("click", function () {
  count++;
  updateCount();
});
document.getElementById("decrease").addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  updateCount();
});
document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  updateCount();
});

const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");
const clearText = document.getElementById("clearText");
textInput.addEventListener("input", function () {
    const text = textInput.value;
    if (text.length === 0) {
        preview.textContent = "Your text will appear here";
    } else {
        preview.textContent = text;
    }
    charCount.textContent = text.length;
});
clearText.addEventListener("click", function () {
    textInput.value = "";
    preview.textContent = "Your text will appear here";
    charCount.textContent = 0;
    textInput.focus();
});
const chipmunkSelect = document.getElementById("chipmunkSelect");
const chipmunkImage = document.getElementById("chipmunkImage");
const imageCaption = document.getElementById("imageCaption");
chipmunkSelect.addEventListener("change", function () {
    const animal = chipmunkSelect.value;

    if (animal === "alvin") {
        chipmunkImage.src = "images/alvin.jpg";
        chipmunkImage.alt = "Alvin";
        imageCaption.textContent = "This is Alvin.";

    } else if (animal === "simon") {
        chipmunkImage.src = "images/simon.png";
        chipmunkImage.alt = "Simon";
        imageCaption.textContent = "This is Simon.";

    } else if (animal === "teodor") {
        chipmunkImage.src = "images/teodor.png";
        chipmunkImage.alt = "Teodor";
        imageCaption.textContent = "This is Teodor.";
    }
});
const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function (event) {
    keyStatus.textContent = "Pressed key: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyResult.textContent = "";
        keyStatus.textContent = "Input cleared";
    }
});
const myCard = document.getElementById("myCard");
const instruction = document.getElementById("instruction");

function highlightCard() {
    myCard.classList.add("highlight");
    instruction.textContent = "The card is highlighted!";
}

function removeHighlight() {
    myCard.classList.remove("highlight");
    instruction.textContent = "Hover over or focus on the card.";
}

myCard.addEventListener("mouseenter", highlightCard);
myCard.addEventListener("mouseleave", removeHighlight);

myCard.addEventListener("focus", highlightCard);
myCard.addEventListener("blur", removeHighlight);