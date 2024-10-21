function changePoem(event) {
  event.preventDefault();

  new Typewriter(".poem", {
    strings: "The Trick to Holding On",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let formSubmit = document.querySelector("#poem-form");
formSubmit.addEventListener("submit", changePoem);
