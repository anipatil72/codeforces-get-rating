const github = document.querySelector(".ri-github-fill");
const linkedin = document.querySelector(".ri-linkedin-box-fill");
const mail = document.querySelector(".ri-mail-fill");

github.addEventListener("click", () => {
  window.open("https://github.com/anipatil72", "_blank").focus();
});

linkedin.addEventListener("click", () => {
  window
    .open("https://www.linkedin.com/in/aniruddha-patil-a04529200/", "_blank")
    .focus();
});

mail.addEventListener("click", () => {
  window.open("mailto:anipatil920@gmail.com", "_blank").focus();
});
