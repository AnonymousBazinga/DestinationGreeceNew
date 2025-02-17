document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("tour-container");

  Object.entries(packages).forEach(([id, pkg]) => {
      // Create tour card
      const card = document.createElement("div");
      card.classList.add("tour-card");

      // Tour image
      const figure = document.createElement("figure");
      figure.classList.add("tour-image");

      const link = document.createElement("a");
      link.href = `toursPages/package.html?id=${id}`; // Updated link format

      const img = document.createElement("img");
      console.log(pkg.image);
      img.src = pkg.image;
      img.alt = pkg.title;

      link.appendChild(img);
      figure.appendChild(link);

      // Tour info
      const info = document.createElement("div");
      info.classList.add("tour-info");

      const title = document.createElement("h3");
      title.classList.add("tour-title");

      const titleLink = document.createElement("a");
      titleLink.href = `toursPages/package.html?id=${id}`; // Updated link format
      titleLink.textContent = pkg.title;

      title.appendChild(titleLink);

      const duration = document.createElement("p");
      duration.classList.add("tour-duration");
      duration.textContent = pkg.duration;

      const price = document.createElement("p");
      price.classList.add("tour-price");
      price.innerHTML = `From <strong>${pkg.price}</strong>`;

      // Append elements
      info.appendChild(title);
      info.appendChild(duration);
      info.appendChild(price);

      card.appendChild(figure);
      card.appendChild(info);

      container.appendChild(card);
  });
  $(document).ready(function(){
      $("#owl-slider-nav").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,  // Enables the navigation arrows
          items: 1    // Show one item at a time
      });
  });
});
