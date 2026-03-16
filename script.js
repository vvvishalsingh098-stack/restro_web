document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Order Form Submission
    const orderForm = document.getElementById('orderForm');
    const orderSuccessMessage = document.getElementById('orderSuccessMessage');

    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // In a real-world scenario, you would send this data to a server
            // using fetch() or XMLHttpRequest to process the order.
            // For this example, we'll just show a success message.

            console.log('Order Submitted:');
            console.log('Name:', document.getElementById('name').value);
            console.log('Phone:', document.getElementById('phone').value);
            console.log('Address:', document.getElementById('address').value);
            console.log('Order Items:', document.getElementById('orderItems').value);

            // Show the success message
            if (orderSuccessMessage) {
                orderSuccessMessage.classList.remove('d-none');
            }

            // Optionally, clear the form after submission
            orderForm.reset();

            // Hide the success message after a few seconds
            setTimeout(() => {
                if (orderSuccessMessage) {
                    orderSuccessMessage.classList.add('d-none');
                }
            }, 5000); // Hide after 5 seconds
        });
    }

    // Optional: Change navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Change background after scrolling 100px
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent dark background
        } else {
            navbar.style.backgroundColor = 'transparent'; // Transparent background when at the top
        }
    });

});
