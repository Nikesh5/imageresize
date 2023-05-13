const imageInput = document.getElementById('image-input');
const imageBox = document.getElementById('original-image');
const imageSize = document.getElementById('image-size');
const resizeBtn = document.getElementById('resize-btn');
const resizedImageBox = document.getElementById('resized-image');
const downloadBtn = document.getElementById('download-btn');

imageInput.addEventListener('change', function(e) {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
		imageBox.src = reader.result;
	};
});

resizeBtn.addEventListener('click', function() {
	const width = imageSize.value;
	const height = imageSize.value;
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
	ctx.drawImage(imageBox, 0, 0, width, height);
	const dataURL = canvas.toDataURL();
	resizedImageBox.src = dataURL;
});

downloadBtn.addEventListener('click', function() {
const a = document.createElement('a');
a.href = resizedImageBox.src;
a.download = 'resized-image.png';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
});


/* nav js */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
  
    // Animate Links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  
    // Hamburger Animation
    burger.classList.toggle('toggle');
  });
  
