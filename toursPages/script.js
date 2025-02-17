document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const packageId = urlParams.get('id');

  if (!packageId || !packages[packageId]) {
      document.querySelector('.container').innerHTML = "<p style='text-align:center;'>Package not found.</p>";
      return;
  }

  const packageData = packages[packageId];

  // Populate page
  document.getElementById("package-title").textContent = packageData.title;
  document.getElementById("package-duration").textContent = packageData.duration;
  document.getElementById("package-price").textContent = "Price: " + packageData.price;
  document.getElementById("package-image").src = "../" + packageData.image;
  document.getElementById("package-services").textContent = packageData.services;

  // Populate itinerary
  const itineraryDiv = document.getElementById("itenary-list");
  itineraryDiv.innerHTML = "";
  Object.entries(packageData.itenary).forEach(([day, description]) => {
      const dayDiv = document.createElement("div");
      dayDiv.innerHTML = `<strong>${day}:</strong> ${description}`;
      itineraryDiv.appendChild(dayDiv);
  });
});