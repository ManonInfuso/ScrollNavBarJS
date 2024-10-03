// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu (créer variable avec niveau de scroll)
// Connaitre niveau de scroll (window.scrollY)
// Comparer valeur mise dans la boîte avec scrollY actuel, si < on est remonté, si > on est descendu (if & else pour sortir ou non la navbar)

// ---------------------------------------------------------------------------
const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});
