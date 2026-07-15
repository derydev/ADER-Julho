const listings = [
  {
    title: "Casa com vista para o mar",
    location: "Florianópolis, Brasil",
    category: "Praia",
    dates: "12–17 de agosto",
    price: 520,
    rating: "4,92",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cabana moderna na serra",
    location: "Gramado, Brasil",
    category: "Cabana",
    dates: "20–25 de julho",
    price: 390,
    rating: "4,88",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Loft no centro histórico",
    location: "Lisboa, Portugal",
    category: "Cidade",
    dates: "4–9 de setembro",
    price: 610,
    rating: "4,95",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Villa com piscina privativa",
    location: "Búzios, Brasil",
    category: "Piscina",
    dates: "15–20 de outubro",
    price: 870,
    rating: "4,97",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Refúgio entre montanhas",
    location: "Campos do Jordão, Brasil",
    category: "Campo",
    dates: "8–13 de agosto",
    price: 455,
    rating: "4,90",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cobertura exclusiva",
    location: "Rio de Janeiro, Brasil",
    category: "Luxo",
    dates: "1–6 de novembro",
    price: 1250,
    rating: "4,99",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  }
];

const grid = document.querySelector("#listingGrid");
const template = document.querySelector("#listingTemplate");
const resultsText = document.querySelector("#resultsText");
const emptyState = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");
let activeCategory = "Todos";
let currentQuery = "";

function formatPrice(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

function renderListings() {
  const filtered = listings.filter((item) => {
    const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
    const haystack = `${item.title} ${item.location} ${item.category}`.toLowerCase();
    const matchesQuery = haystack.includes(currentQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  grid.innerHTML = "";
  filtered.forEach((item) => {
    const node = template.content.cloneNode(true);
    const img = node.querySelector(".listing-photo");
    img.src = item.image;
    img.alt = item.title;
    node.querySelector(".listing-title").textContent = item.title;
    node.querySelector(".listing-category").textContent = `${item.location} · ${item.category}`;
    node.querySelector(".listing-dates").textContent = item.dates;
    node.querySelector(".listing-price strong").textContent = formatPrice(item.price);
    node.querySelector(".rating span").textContent = item.rating;

    const heart = node.querySelector(".heart-btn");
    heart.addEventListener("click", () => {
      heart.classList.toggle("saved");
      heart.textContent = heart.classList.contains("saved") ? "♥" : "♡";
      heart.setAttribute("aria-label", heart.classList.contains("saved") ? "Remover dos favoritos" : "Adicionar aos favoritos");
      showToast(heart.classList.contains("saved") ? "Adicionado aos favoritos" : "Removido dos favoritos");
    });

    grid.appendChild(node);
  });

  resultsText.textContent = `${filtered.length} ${filtered.length === 1 ? "acomodação encontrada" : "acomodações encontradas"}`;
  emptyState.hidden = filtered.length !== 0;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderListings();
  });
});

document.querySelectorAll(".nav-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`${button.textContent.replace("NOVO", "").trim()} selecionado`);
  });
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  currentQuery = document.querySelector("#whereInput").value.trim();
  renderListings();
  document.querySelector("#destinos").scrollIntoView({ behavior: "smooth" });
});

const menuBtn = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");
menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

document.addEventListener("click", (event) => {
  if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#showAllBtn").addEventListener("click", () => {
  activeCategory = "Todos";
  currentQuery = "";
  document.querySelector("#whereInput").value = "";
  document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item.dataset.category === "Todos"));
  renderListings();
  document.querySelector("#destinos").scrollIntoView({ behavior: "smooth" });
});

const today = new Date().toISOString().split("T")[0];
document.querySelector("#checkinInput").min = today;
document.querySelector("#checkoutInput").min = today;
document.querySelector("#checkinInput").addEventListener("change", (event) => {
  document.querySelector("#checkoutInput").min = event.target.value || today;
});

renderListings();
