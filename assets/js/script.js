document.querySelectorAll(".list-faq .question").forEach(qs => {
  qs.addEventListener("click", () => {
    const li = qs.closest(".item");
    li.classList.toggle("active");
  });
});