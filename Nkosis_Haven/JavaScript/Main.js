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
4b. Enhanced Enquiry Form Validation
----------------------------- */
const enquiryForm = document.getElementById('enquiryForm');
const formMessage = document.createElement('div');
formMessage.id = 'formMessage';
enquiryForm.appendChild(formMessage);

enquiryForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = enquiryForm.querySelector('#name').value.trim();
  const email = enquiryForm.querySelector('#email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(name === '' || email === ''){
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.className = 'error';
    return;
  }

  if(!emailPattern.test(email)){
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'error';
    return;
  }

  // If valid, show success message
  formMessage.textContent = 'Thank you! Your enquiry has been sent.';
  formMessage.className = 'success';

  // Optionally submit via mailto:
  enquiryForm.submit();
});

// Form validation and feedback
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enquiryForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent default mailto submission

      let nameValid = nameInput.value.trim() !== '';
      let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

      if(!nameValid || !emailValid){
        messageDiv.textContent = 'Please enter a valid name and email.';
        messageDiv.className = 'error';
        return;
      }

      messageDiv.textContent = 'Thank you! Your enquiry has been submitted.';
      messageDiv.className = 'success';

      // Optional: still open default mail client
      form.submit();
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

// -----------------------------
// 7.Project Search Functionality
// -----------------------------
 document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('projectSearch');
  const projectList = document.getElementById('projectsList');
  const projectItems = projectList.querySelectorAll('li');

  // Create "No results found" element
  let noResultItem = document.createElement('li');
  noResultItem.textContent = "No projects found.";
  noResultItem.style.color = "red";
  noResultItem.style.fontStyle = "italic";
  noResultItem.style.display = "none";
  projectList.appendChild(noResultItem);

  if(searchInput && projectItems.length > 0){
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      let anyVisible = false;

      projectItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if(text.includes(filter)){
          item.style.display = '';
          anyVisible = true;
        } else {
          item.style.display = 'none';
        }
      });

      // Show or hide "No results found"
      noResultItem.style.display = anyVisible ? 'none' : '';
    });
  }
});
