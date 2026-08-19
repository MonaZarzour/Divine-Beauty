const parseReviews = (source) => source
  .split(/\r?\n\s*---\s*\r?\n/)
  .map((block) => {
    const review = {};
    let currentField = "";
    block.split(/\r?\n/).forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) return;
      const match = line.match(/^(Navn|Stjerner|Dato|Kommentar):\s*(.*)$/i);
      if (match) {
        currentField = match[1].toLowerCase();
        review[currentField] = match[2].trim();
      } else if (currentField) {
        review[currentField] = `${review[currentField]} ${line}`.trim();
      }
    });
    return {
      name: review.navn || "Anonym kunde",
      rating: Number(review.stjerner),
      date: review.dato || "",
      comment: (review.kommentar || "").replace(/\(H\)/gi, "❤️")
    };
  })
  .filter((review) => review.comment && Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5);

const renderReviews = (track, reviews) => {
  const fragment = document.createDocumentFragment();
  reviews.forEach((review) => {
    const article = document.createElement("article");
    article.className = "review-card";
    if (review.comment.length > 220) article.classList.add("review-card--long");
    article.dataset.reviewSlide = "";
    article.setAttribute("aria-hidden", "true");

    const stars = document.createElement("div");
    stars.className = "review-card__stars";
    stars.setAttribute("aria-label", `${review.rating} av 5 stjerner`);
    stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;

    const quote = document.createElement("blockquote");
    quote.textContent = `«${review.comment}»`;

    const footer = document.createElement("footer");
    const customer = document.createElement("div");
    const name = document.createElement("strong");
    const date = document.createElement("span");
    const source = document.createElement("span");
    name.textContent = review.name;
    date.textContent = review.date;
    source.className = "review-card__source";
    source.textContent = "Verifisert via Timma";
    customer.append(name);
    if (review.date) customer.append(date);
    footer.append(customer, source);
    article.append(stars, quote, footer);
    fragment.append(article);
  });
  track.replaceChildren(fragment);
};

export const initReviewsCarousel = async () => {
  const section = document.querySelector("[data-reviews-section]");
  const carousel = section?.querySelector("[data-reviews-carousel]");
  const track = carousel?.querySelector("[data-reviews-track]");
  const previous = carousel?.querySelector("[data-reviews-prev]");
  const next = carousel?.querySelector("[data-reviews-next]");
  const status = carousel?.querySelector("[data-reviews-status]");
  if (!section || !carousel || !track || !previous || !next || !status) return;

  let reviews = [];
  try {
    const response = await fetch("data/vurderinger.txt", { cache: "no-store" });
    if (response.ok) reviews = parseReviews(await response.text());
  } catch { return; }
  if (!reviews.length) return;

  renderReviews(track, reviews);
  const slides = [...track.querySelectorAll("[data-review-slide]")];
  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    status.textContent = `${current + 1} / ${slides.length}`;
  };
  const move = (direction) => show(current + direction);
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  carousel.addEventListener("keydown", (event) => {
    if (event.target !== carousel) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
  previous.hidden = slides.length < 2;
  next.hidden = slides.length < 2;
  status.hidden = slides.length < 2;
  section.hidden = false;
  show(0);
};
