document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.getAttribute('href') === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('hero-video');
    video.play().catch(error => {
        console.log("Auto-play was prevented");
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.card-overlay').style.animation = 'fadeIn 0.3s forwards';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-overlay').style.animation = 'fadeOut 0.3s forwards';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
const activityData = {
    'walks-hike': [
        { name: 'Manly to Spit Bridge Walk', description: 'Scenic coastal walk with stunning views.', image: 'manly-beach.jpeg' },
        { name: 'North Head Sanctuary Loop', description: 'Historic site with panoramic views of Sydney Harbour.', image: 'manly-beach1.jpg' },
        { name: 'Manly Dam Circuit', description: 'Bushland trail around Manly Dam.', image: 'manly-beach.jpeg' },
        { name: 'Cabbage Tree Bay Eco-Sculpture Walk', description: 'Short walk with underwater sculptures.', image: 'manly-beach1.jpg' },
        { name: 'Manly to Shelly Beach Walk', description: 'Easy coastal walk with beautiful views.', image: 'manly-beach.jpeg' },
        { name: 'Fairfax Walk', description: 'Easy loop walk with stunning ocean views.', image: 'manly-beach1.jpg' },
    ],
    'cycling': [
        { name: 'Manly Beach Bike Path', description: 'Scenic ride along the beachfront.', image: 'manly-beach.jpeg' },
        { name: 'North Head Circuit', description: 'Challenging ride with panoramic views.', image: 'manly-beach1.jpg' },
        { name: 'Manly Dam Mountain Bike Trail', description: 'Popular mountain biking destination.', image: 'manly-beach.jpeg' },
        { name: 'Eastern Hill Bike Track', description: 'Family-friendly bike track with ocean views.', image: 'manly-beach1.jpg' },
        { name: 'Manly Lagoon Loop', description: 'Easy ride around Manly Lagoon.', image: 'manly-beach.jpeg' },
        { name: 'Bike to Dee Why', description: 'Coastal ride to neighboring Dee Why Beach.', image: 'manly-beach1.jpg' },
    ],
    'picnic-barbecue': [
        { name: 'Shelly Beach', description: 'Popular spot with BBQ facilities and picnic tables.', image: 'manly-beach.jpeg' },
        { name: 'North Head Sanctuary', description: 'Scenic picnic spots with harbor views.', image: 'manly-beach1.jpg' },
        { name: 'Manly Dam Reserve', description: 'Picnic areas and BBQ facilities by the water.', image: 'manly-beach.jpeg' },
        { name: 'Little Manly Point Park', description: 'Quiet park with BBQs and harbor views.', image: 'manly-beach1.jpg' },
        { name: 'Forty Baskets Beach', description: 'Secluded beach with picnic facilities.', image: 'manly-beach.jpeg' },
        { name: 'Clontarf Reserve', description: 'Family-friendly park with BBQs and playground.', image: 'manly-beach1.jpg' },
    ],
    'shopping': [
        { name: 'Manly Corso', description: 'Pedestrian mall with shops and cafes.', image: 'manly-beach.jpeg' },
        { name: 'Manly Wharf', description: 'Waterfront shopping and dining precinct.', image: 'manly-beach1.jpg' },
        { name: 'Manly Market Place', description: 'Fresh produce and gourmet food market.', image: 'manly-beach.jpeg' },
        { name: 'Manly Seaside Flea Market', description: 'Weekend market with unique finds.', image: 'manly-beach1.jpg' },
        { name: 'Manly Emporium', description: 'Boutique shopping center with local designers.', image: 'manly-beach.jpeg' },
        { name: 'The Manly Bookshop', description: 'Independent bookstore with a great selection.', image: 'manly-beach1.jpg' },
    ],
};
function createCarousel(sectionId) {
    const carousel = document.querySelector(`#${sectionId} .carousel`);
    const data = activityData[sectionId];
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
      <img src="/assets/${item.image}" alt="${item.name}">
      <div class="carousel-card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;
        carousel.appendChild(card);
    });
    const prevButton = document.querySelector(`#${sectionId} .prev`);
    const nextButton = document.querySelector(`#${sectionId} .next`);
    let currentIndex = 0;
    function updateCarousel() {
        const cardWidth = carousel.querySelector('.carousel-card').offsetWidth + 20;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        updateCarousel();
    });
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % data.length;
        updateCarousel();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    createCarousel('walks-hike');
    createCarousel('cycling');
    createCarousel('picnic-barbecue');
    createCarousel('shopping');
});

