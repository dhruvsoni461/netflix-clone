 const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.classList.toggle("show");

      // Change + to - when open
      const symbol = btn.querySelector("span");
      if (answer.classList.contains("show")) {
        symbol.textContent = "−";
      } else {
        symbol.textContent = "+";
      }
    });
  });


  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.toggle-btn');
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('active');
      btn.textContent = item.classList.contains('active') ? '-' : '+';
    });
  });

