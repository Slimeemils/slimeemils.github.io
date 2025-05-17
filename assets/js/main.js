fetch('portfolio.json')
  .then(res => res.json())
  .then(images => {
    const container = document.getElementById('portfolio');

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const el = document.createElement('img');
        el.src = src;
        el.alt = 'Portfolio Image';
        el.addEventListener('click', () => showModal(src));
        container.appendChild(el);
      };
      img.onerror = () => {
        console.warn(`⚠️ Image not found: ${src}`);
      };
    });
  });

// Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

function showModal(src) {
  modal.style.display = 'block';
  modalImg.src = src;
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Contact toggle
document.getElementById('contactToggle').onclick = () => {
  const dropdown = document.getElementById('contactDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert(`Copied to clipboard: ${text}`);
}



