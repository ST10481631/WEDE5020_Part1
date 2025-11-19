document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------
  1. Accordion
  ----------------------------- */
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      acc.classList.toggle('active');
      const panel = acc.nextElementSibling;
      if(panel.style.maxHeight && panel.style.maxHeight !== '0px'){
        panel.style.maxHeight = '0';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* -----------------------------
  2. Show More / Show Less
  ----------------------------- */
  const toggleButton = document.getElementById('toggleSections');
  const hiddenSections = document.querySelector('.hidden-sections');

  if(toggleButton && hiddenSections){
    // Initialize hidden section for smooth max-height transition
    hiddenSections.style.maxHeight = '0';
    hiddenSections.style.overflow = 'hidden';
    hiddenSections.style.transition = 'max-height 0.5s ease';

    toggleButton.addEventListener('click', () => {
      if(hiddenSections.style.maxHeight === '0px' || hiddenSections.style.maxHeight === ''){
        hiddenSections.style.maxHeight = hiddenSections.scrollHeight + 'px';
        toggleButton.textContent = 'Show Less';
      } else {
        hiddenSections.style.maxHeight = '0';
        toggleButton.textContent = 'Show More';
      }
    });
  }

  /* -----------------------------
  3. Lightbox Gallery
  ----------------------------- */
  const galleryImages = document.querySelectorAll('.lightbox-img, .lightbox');
  if(galleryImages.length > 0){
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        while(lightbox.firstChild){
          lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(imgEl);
      });
    });

    lightbox.addEventListener('click', e => {
      if(e.target !== e.currentTarget) return;
      lightbox.classList.remove('active');
    });
  }

  /* -----------------------------
  4. Form Validation
  ----------------------------- */
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      const email = form.querySelector('input[type="email"]');
      if(email && !email.value.includes('@')){
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  });

  /* -----------------------------
  5. Fade-in Animations
  ----------------------------- */
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    el.style.opacity = 0;
    window.addEventListener('scroll', () => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        el.style.transition = 'opacity 1s ease-in';
        el.style.opacity = 1;
      }
    });
  });

  /* -----------------------------
  6. Interactive Map (Leaflet)
  ----------------------------- */
  const mapContainer = document.getElementById('map');
  if(mapContainer){
    const map = L.map('map').setView([-26.18, 28.08], 13); // Nkosi's Haven coords
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-26.18, 28.08]).addTo(map)
      .bindPopup('<b>Nkosi’s Haven</b><br>34 Vereeniging Service Road, Alan Manor, Johannesburg')
      .openPopup();
  }

});


