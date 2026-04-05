document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SETUP YOUR SCALEV CHECKOUT LINKS HERE
    // Replace these placeholder URLs with the actual checkout links generated in your Scalev dashboard.
    const scalevLinks = {
        essential: "https://yourdomain.scalev.id/checkout/rt-rw-net-essential",
        elite: "https://yourdomain.scalev.id/checkout/rt-rw-net-elite",
        prestige: "https://yourdomain.scalev.id/checkout/rt-rw-net-prestige"
    };

    // 2. Attach click events to the buttons
    const checkoutButtons = document.querySelectorAll(".scalev-checkout");

    checkoutButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the product ID from the HTML data-product attribute
            const productType = this.getAttribute("data-product");
            
            // Look up the URL in our dictionary above
            const checkoutUrl = scalevLinks[productType];

            if (checkoutUrl) {
                // Visual feedback (optional)
                this.innerHTML = "Redirecting...";
                
                // Redirect to Scalev Checkout
                window.location.href = checkoutUrl;
            } else {
                alert("Checkout link not configured for this package yet.");
            }
        });
    });

    // 3. Navbar scroll effect (Adds background blur when scrolling down)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 16, 20, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(15, 16, 20, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});