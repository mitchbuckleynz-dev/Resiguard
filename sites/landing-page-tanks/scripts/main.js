// ============================================
// RESIGUARD LANDING PAGE - JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===== 1. SMOOTH SCROLL TO ANCHOR LINKS =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== 2. STICKY CTA SHOW/HIDE ON SCROLL =====
    const stickyCta = document.getElementById('stickyCta');
    const heroSection = document.getElementById('hero');
    const formSection = document.getElementById('estimate-form');

    if (stickyCta && heroSection && formSection) {
        window.addEventListener('scroll', function () {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const formTop = formSection.offsetTop;
            const scrollPosition = window.pageYOffset + window.innerHeight;

            // Show sticky CTA after hero section, hide when form is visible
            if (window.pageYOffset > heroBottom && scrollPosition < formTop + 100) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }

    // ===== 3. FAQ ACCORDION TOGGLE =====
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const content = item.querySelector('.accordion__content');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    const otherContent = otherHeader.parentElement.querySelector('.accordion__content');
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // ===== 4. FORM VALIDATION & SUBMISSION =====
    const estimateForm = document.getElementById('estimateForm');
    const formSuccess = document.getElementById('formSuccess');

    if (estimateForm) {
        estimateForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                location: document.getElementById('location').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                timestamp: new Date().toISOString(),
                source: getUTMParameters()
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.location) {
                alert('Please fill in all required fields.');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show loading state on button
            const submitButton = estimateForm.querySelector('.btn--submit');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            // Log submission locally (Phase 1)
            console.log('Form Submission:', formData);

            // Store in localStorage for now
            const submissions = JSON.parse(localStorage.getItem('resiguard_submissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('resiguard_submissions', JSON.stringify(submissions));

            // Simulate submission delay
            setTimeout(() => {
                // Hide form, show success message
                estimateForm.style.display = 'none';
                formSuccess.style.display = 'block';

                // Reset button state (in case form is shown again)
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Reset form
                estimateForm.reset();

                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Log success
                console.log('✅ Form submitted successfully!');
                console.log('📊 Total submissions stored locally:', submissions.length);

            }, 1000);
        });
    }

    // ===== 5. GET UTM PARAMETERS FROM URL =====
    function getUTMParameters() {
        const params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || 'direct',
            utm_medium: params.get('utm_medium') || 'none',
            utm_campaign: params.get('utm_campaign') || 'none',
            utm_content: params.get('utm_content') || 'none'
        };
    }

    // ===== 6. LAZY LOAD IMAGES =====
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }

    // ===== 7. SCROLL ANIMATIONS =====
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animationObserver.observe(el));
    } else {
        // Fallback
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    // ===== 7. CONSOLE LOG FOR DEBUGGING =====
    console.log('🚀 Resiguard Landing Page Loaded');
    console.log('📱 Viewport Size:', window.innerWidth, 'x', window.innerHeight);
    console.log('🔗 UTM Parameters:', getUTMParameters());

    // Log stored submissions count
    const storedSubmissions = JSON.parse(localStorage.getItem('resiguard_submissions') || '[]');
    console.log('📊 Stored submissions:', storedSubmissions.length);

    if (storedSubmissions.length > 0) {
        console.log('💾 Latest submission:', storedSubmissions[storedSubmissions.length - 1]);
    }
});

// ===== 8. HELPER FUNCTION TO VIEW ALL SUBMISSIONS (FOR TESTING) =====
// Call in browser console: viewSubmissions()
function viewSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('resiguard_submissions') || '[]');
    console.table(submissions);
    return submissions;
}

// ===== 9. HELPER FUNCTION TO CLEAR SUBMISSIONS (FOR TESTING) =====
// Call in browser console: clearSubmissions()
function clearSubmissions() {
    localStorage.removeItem('resiguard_submissions');
    console.log('✅ All submissions cleared');
}

// Make functions available globally for console access
window.viewSubmissions = viewSubmissions;
window.clearSubmissions = clearSubmissions;
