document.addEventListener("DOMContentLoaded", () => {
  // Год в футере
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Загрузка услуг из content/services.json
  const servicesContainer = document.getElementById("services-list");
  if (servicesContainer) {
    fetch("content/services.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Не удалось загрузить services.json");
        }
        return res.json();
      })
      .then((data) => {
        if (!data.services || !Array.isArray(data.services)) return;

        data.services.forEach((service) => {
          const card = document.createElement("article");
          card.className = "card";

          const title = document.createElement("h3");
          title.className = "card-title";
          title.textContent = service.title || "Без названия";

          const body = document.createElement("p");
          body.className = "card-body";
          body.textContent =
            service.description || "Описание услуги появится позже.";

          const meta = document.createElement("div");
          meta.className = "card-meta";
          meta.textContent = service.meta || "";

          card.appendChild(title);
          card.appendChild(body);
          if (meta.textContent.trim()) {
            card.appendChild(meta);
          }

          servicesContainer.appendChild(card);
        });
      })
      .catch((err) => {
        console.warn(err);
        const fallback = document.createElement("p");
        fallback.className = "card-body";
        fallback.textContent =
          "Пока здесь пусто. Заполни файл content/services.json своими услугами.";
        servicesContainer.appendChild(fallback);
      });
  }
});
