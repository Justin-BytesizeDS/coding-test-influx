// Medical Aesthetics Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update button states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update content visibility
            tabContents.forEach(content => content.classList.remove('active'));
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.textContent.replace('→', '').trim();
            alert(`Learn more about ${serviceName} - Contact us to schedule your consultation!`);
        });
    });
    
    // Keyboard accessibility for tabs
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                
                let nextIndex;
                if (e.key === 'ArrowLeft') {
                    nextIndex = index > 0 ? index - 1 : tabButtons.length - 1;
                } else {
                    nextIndex = index < tabButtons.length - 1 ? index + 1 : 0;
                }
                
                tabButtons[nextIndex].focus();
            }
            
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Add image lazy loading and error handling
    const images = document.querySelectorAll('.content-image img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback if image fails to load
            this.style.backgroundColor = '#f8f9fa';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '300px';
            this.alt = 'Image not available';
        });
        
        // Add loading state
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0.8';
        img.style.transition = 'opacity 0.3s ease';
    });
});
