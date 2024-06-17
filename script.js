const faqs = document.querySelectorAll(".faqs");

faqs.forEach((faq) => {
  const answer = faq.querySelector(".answer");
  const iconPlus = faq.querySelector(".icon-plus");
  const iconMinus = faq.querySelector(".icon-minus");
  faq.addEventListener("click", () => {
    answer.classList.toggle("active");

    if (answer.classList.contains("active")) {
      setTimeout(() => {
        iconPlus.style.display = "none";
        iconMinus.style.display = "block";
      }, 400);
    } else {
      setTimeout(() => {
        iconPlus.style.display = "block";
        iconMinus.style.display = "none";
      }, 400);
    }
  });
});
