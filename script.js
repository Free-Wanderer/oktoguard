document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    "section:not(#hero), article, h2, h3, form, footer"
  );

  animatedItems.forEach((item) => {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});
