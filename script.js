document.addEventListener("DOMContentLoaded", function() {
    const products = [
      { image: "images/psn.jpg", description: "Online gaming, entertainment, friends, shopping and more - PSN is where your online journey begins." },
      { image: "images/gamesPS5.png", description: "We have a variety of games including 'God Of War' 'FIFA24' 'Need for Speed'. Games are available for all consoles" },
      { image: "images/psrepair2.png", description: "In case your machine runs into a little trouble, we got you covered. We provide professional gaming console repair services in Kenya. We have trained technicians who can handle all kinds of repairs for different game consoles including playstation (PS2, PS3, PS4) and xbox. Our services are available in Nairobi, Mombasa, Nakuru, Eldoret, Kisumu, and other towns. All playstation maintenace and repair services" }
    ];

    let currentIndex = 0;
    const productImage = document.querySelector(".product-image img");
    const productDescription = document.querySelector(".product-description p");

    function changeProduct() {
      productImage.src = products[currentIndex].image;
      productDescription.textContent = products[currentIndex].description;
      currentIndex = (currentIndex + 1) % products.length;
    }

    setInterval(changeProduct, 5000);
  });