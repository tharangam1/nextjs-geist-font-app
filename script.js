document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Email form validation
    const emailForms = document.querySelectorAll('.email-form');
    
    emailForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const input = form.querySelector('input[type="email"]');
            const email = input.value.trim();
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                // Show error state
                input.classList.add('error');
                
                // Create error message if it doesn't exist
                let errorMsg = form.querySelector('.error-message');
                if (!errorMsg) {
                    errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    form.appendChild(errorMsg);
                }
                errorMsg.textContent = 'Please enter a valid email address.';
            } else {
                // Remove error state
                input.classList.remove('error');
                const errorMsg = form.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
                
                // In a real application, this would submit to a server
                console.log('Email submitted:', email);
                
                // Clear the input
                input.value = '';
            }
        });
        
        // Remove error state when user starts typing
        const input = form.querySelector('input[type="email"]');
        input.addEventListener('input', () => {
            input.classList.remove('error');
            const errorMsg = form.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });

    // Add error styles to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .email-form input.error {
            border-color: #e87c03;
        }
        
        .error-message {
            color: #e87c03;
            font-size: 0.9rem;
            margin-top: 6px;
            text-align: left;
        }
    `;
    document.head.appendChild(style);
});
