const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const form = document.getElementById("messageForm");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

function sendEmail(a){
  a.preventDefault();

  const fullname = document.getElementById("name");
  const fullemail = document.getElementById("email");
  const subjectname = document.getElementById("subject");
  const area = document.getElementById("area");
  const bodyMessage = `Name:${fullname.value}<br> Email_id:${fullemail.value}<br> Message:${area.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sandyvijay2002@gmail.com",
    Password : "6C98AAC7A4FCE19D5F5FD978E1C3B029CC98",
    To : 'sandyvijay2002@gmail.com',
    From : fullemail.value,
    Subject : subjectname.value,
    Body : bodyMessage
  }).then(
  message => alert(message)
  );

  return true;

}

form.addEventListener('submit', sendEmail);