// Create moving pixels
for (let i = 0; i < 100; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.top = Math.random() * window.innerHeight + 'px';
    pixel.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(pixel);
}
