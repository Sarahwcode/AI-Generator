function poemDisplay(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

function changePoem(event) {
  event.preventDefault();
  let instructionsForPoem = document.querySelector("#instructions-poem");
  let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
  let prompt = `user instructions are to Generate a poem from ${instructionsForPoem.value}`;
  let context =
    "you are thinking of taylor swift poems and try and relate the context to taylor swift poem/music, keep this small and simple and only small lines. sign at the end of the poem the artist who wrote it and make the word <strong> and each line is seperated by <p>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector(".generating");
  poemElement.innerHTML = `<div class="blink">Generating Poem about ${instructionsForPoem.value}....</div>`;

  axios.get(apiUrl).then(poemDisplay);
}

let formSubmit = document.querySelector("#poem-form");
formSubmit.addEventListener("submit", changePoem);
