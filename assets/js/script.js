"use strict";

// !declare variables
const button = document.querySelector("[data-js-btn]"),
  adviceId = document.querySelector("[data-js-id]"),
  quote = document.querySelector("[data-js-quote]");

const getNewAdvice = () => {
  fetch("https://api.adviceslip.com/advice", {
    cache: "reload", // !Firefox caching
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch advice.");
      }
      return response.json();
    })
    .then((data) => {
      const {id, advice} = data.slip;
      adviceId.textContent = id;
      quote.textContent = advice;
    })
    .catch((error) => {
      console.error(error);
    });
};

// !click button to get new advice
button.addEventListener("click", getNewAdvice);
