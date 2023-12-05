document.addEventListener("DOMContentLoaded", (event) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillLevel = entry.target;
          skillLevel.style.width = skillLevel.getAttribute("data-level");
          observer.unobserve(skillLevel); // Stop observing the skill level once it's animated
        }
      });
    },
    {
      threshold: 0.5, // Trigger when half of the skill level bar is visible
    }
  );

  // Observe all skill level elements
  document.querySelectorAll(".skill__level").forEach((skillLevel) => {
    observer.observe(skillLevel);
  });
});
