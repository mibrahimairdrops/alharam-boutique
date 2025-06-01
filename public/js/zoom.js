document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable');
    
    zoomableImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'zoom-overlay';
            
            // Create zoomed image
            const zoomedImg = document.createElement('img');
            zoomedImg.className = 'zoom-image';
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            
            // Add to overlay
            overlay.appendChild(zoomedImg);
            
            // Add to body
            document.body.appendChild(overlay);
            
            // Close on click
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });
});