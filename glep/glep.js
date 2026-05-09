
    document.addEventListener('DOMContentLoaded', () => {
        const details = document.querySelectorAll('nav details');

        details.forEach((targetDetail) => {
            // 1. EXCLUSIVE ACCORDION LOGIC
            // Closes other categories when you open a new one
            targetDetail.addEventListener('toggle', () => {
                if (targetDetail.open) {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute('open');
                        }
                    });
                }
            });

            // 2. BACK BUTTON LOGIC
            // Finds the button inside the current category and makes it close the menu
            const backBtn = targetDetail.querySelector('.back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', (e) => {
                    // Stop the click from bubbling up (prevents weird double-toggles)
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close the menu
                    targetDetail.removeAttribute('open');
                    
                    // Smoothly scroll the user back to the category header
                    // Very helpful on mobile so they don't lose their place
                    targetDetail.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                });
            }
        });
    });