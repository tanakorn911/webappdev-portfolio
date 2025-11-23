// ===== API CONFIGURATION =====
const API_URL = 'http://localhost:3000/api';

// ===== DATA =====
const skills = [
    { name: 'Python & Flask', level: 'Intermediate', icon: '🐍' },
    { name: 'HTML/CSS/JS', level: 'Advanced', icon: '🌐' },
    { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
    { name: 'Tailwind CSS', level: 'Beginner', icon: '🎨' },
    { name: 'SQLite3', level: 'Intermediate', icon: '💾' },
    { name: 'MySQL', level: 'Intermediate', icon: '🗄️' },
    { name: 'Git & GitHub', level: 'Expert', icon: '📚' },
    { name: 'UI/UX Design', level: 'Intermediate', icon: '✨' }
];

const projects = [
    {
        title: 'Booking - Resource ICT ',
        icon: '📅',
        desc: 'ออกแบบ UI/UX สำหรับเว็บแอป Booking - Resource ICT ระบบจองห้องและยืม-คืนทรัพยากร คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา ',
        tech: 'Figma skills',
        Figma: 'https://www.figma.com/proto/GSDR55FMeJ0hhw0ZznAtXg/Project--Prototype-?node-id=1419-1943&p=f&t=v7kLYHmWJILTHNCy-0&scaling=min-zoom&content-scaling=fixed&page-id=1105%3A103&starting-point-node-id=1419%3A1943'
    },
    {
        title: 'On-Street / Fashion',
        icon: '👗',
        desc: 'ออกแบบ UI/UX สำหรับแอปพลิเคชันแฟชั่นชื่อ On-Street ที่เน้นการนำเสนอเสื้อผ้าและเครื่องประดับสไตล์สตรีทแฟชั่น',
        tech: 'Figma skills',
        Figma: 'https://www.figma.com/proto/cNHeXx3mVboL014akLbVmC/On-Street---Fashion?node-id=0-1&p=f&t=R6bAV7CHXbIy7FfO-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
    },
];

// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX - 200}px`;
    cursorGlow.style.top = `${e.clientY - 200}px`;
});

// ===== MATRIX RAIN PARTICLES =====
const matrixRain = document.getElementById('matrixRain');

function createParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${i * 5}%`;
        particle.style.animationDelay = `${i * 0.5}s`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        matrixRain.appendChild(particle);
    }
}

createParticles();

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== PARALLAX HERO EFFECT =====
const heroContent = document.getElementById('heroContent');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ===== GENERATE SKILLS =====
const skillsGrid = document.getElementById('skillsGrid');
// Set grid layout
skillsGrid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.2rem;
    padding: 1.2rem;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    align-items: start;
`;

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.cssText = 'width: 100%; display: flex; justify-content: center;';
    
    skillCard.innerHTML = `
        <div class="skill-card-inner" style="min-height: 200px; width: 100%; max-width: 220px;">
            <div class="skill-card-front" style="
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                background: rgba(25, 25, 25, 0.95);
                border: 1px solid rgba(0, 255, 255, 0.1);
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            ">
                <div class="skill-icon" style="
                    font-size: 2.2rem;
                    margin-bottom: 0.8rem;
                    color: #00ffff;
                    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
                ">${skill.icon}</div>
                <h3 class="skill-name" style="
                    font-size: 1rem;
                    margin-bottom: 0.8rem;
                    color: white;
                    font-weight: 500;
                    text-align: center;
                ">${skill.name}</h3>
                <div class="skill-proficiency" style="
                    background: rgba(0, 255, 255, 0.1);
                    padding: 0.4rem 0.8rem;
                    border-radius: 8px;
                    border: 1px solid rgba(0, 255, 255, 0.2);
                ">
                    <span class="skill-level" style="
                        font-size: 0.85rem;
                        color: #00ffff;
                    ">${skill.level}</span>
                </div>
            </div>
            <div class="skill-card-back" style="
                background: rgba(25, 25, 25, 0.95);
                border: 1px solid rgba(0, 255, 255, 0.1);
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            ">
                <div class="skill-back-content" style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding: 1.5rem;
                ">
                    <div class="skill-back-icon" style="
                        font-size: 2.2rem;
                        margin-bottom: 0.8rem;
                        color: #00ffff;
                        text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
                        animation: float 2s ease-in-out infinite;
                    ">${skill.icon}</div>
                    <div class="skill-back-level" style="
                        font-size: 0.9rem;
                        margin-bottom: 0.8rem;
                        color: #00ffff;
                        padding: 0.4rem 0.8rem;
                        background: rgba(0, 255, 255, 0.1);
                        border-radius: 8px;
                        border: 1px solid rgba(0, 255, 255, 0.2);
                    ">${skill.level}</div>
                    <div class="skill-back-text" style="
                        font-size: 0.8rem;
                        color: rgba(255, 255, 255, 0.7);
                        text-align: center;
                        line-height: 1.4;
                    ">PROFICIENCY</div>
                </div>
            </div>
        </div>
    `;

    skillCard.style.cssText = 'transform-style: preserve-3d; perspective: 1000px;';
    const inner = skillCard.querySelector('.skill-card-inner');
    inner.style.cssText = 'transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;';
    
    skillsGrid.appendChild(skillCard);
});

// ===== ANIMATE SKILL CARDS ON SCROLL =====
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    skillObserver.observe(card);
});

// ===== GENERATE PROJECTS =====
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card neon-border';
    
    projectCard.innerHTML = `
        <div class="project-glow project-glow-top"></div>
        <div class="project-glow project-glow-bottom"></div>
        <div class="project-content">
            <div class="project-icon">${project.icon}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <p class="project-tech">${project.tech}</p>
            <button class="project-btn" onclick="window.open('${project.github}', '_blank')">
                VIEW ON GITHUB
            </button>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// ===== PROJECT BUTTON CLICK =====
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-btn')) {
        // Button already has onclick handler
    }
});

// ===== GITHUB BADGE CLICK =====
document.querySelector('.github-badge')?.addEventListener('click', () => {
    window.open('https://github.com/tanakorn911/Bakery-Website', '_blank');
});

// ===== CONTACT FORM SUBMISSION WITH API =====
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: contactForm.querySelector('input[name="name"]').value,
        email: contactForm.querySelector('input[name="email"]').value,
        message: contactForm.querySelector('textarea[name="message"]').value
    };

    try {
        // Send to API
        const response = await fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Show success modal
            successModal.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Hide modal after 3 seconds
            setTimeout(() => {
                successModal.classList.remove('show');
            }, 3000);
        } else {
            const error = await response.json();
            alert('เกิดข้อผิดพลาด: ' + (error.message || 'ไม่สามารถส่งข้อความได้'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบว่าเซิร์ฟเวอร์กำลังทำงานอยู่');
    }
});

// Close modal on click
successModal.addEventListener('click', () => {
    successModal.classList.remove('show');
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// ===== FLOATING ANIMATIONS =====
const floatingElements = document.querySelectorAll('.floating-emoji');

floatingElements.forEach((element, index) => {
    element.style.animation = `float ${6 + index}s ease-in-out infinite`;
    element.style.animationDelay = `${index}s`;
});

// ===== ADD GLITCH EFFECT ON HOVER =====
const glitchTitle = document.querySelector('.glitch');

if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', () => {
        glitchTitle.style.animation = 'none';
        setTimeout(() => {
            glitchTitle.style.animation = '';
        }, 10);
    });
}

// ===== CONSOLE MESSAGE =====
console.log('%c🔥 BRUTAL.DEV 🔥', 'font-size: 40px; font-weight: bold; color: #ff0000; text-shadow: 0 0 10px #ff0000;');
console.log('%cWelcome to the darkest portfolio on the web!', 'font-size: 16px; color: #00ffff;');
console.log('%cBuilt with HTML, CSS, JavaScript & SQLite3', 'font-size: 14px; color: #ff00ff;');
console.log('%c⚡ Backend powered by Express & SQLite ⚡', 'font-size: 14px; color: #ffff00;');

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'distortion 2s ease-in-out infinite';
        alert('🎮 KONAMI CODE ACTIVATED! 🔥');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }
});

// ===== PARTICLE CURSOR TRAIL =====
const trail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (trail.length > trailLength) {
        trail.shift();
    }
});

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply reveal animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(section);
});

// ===== TYPING EFFECT RESTART =====
const typingText = document.querySelector('.typing-text');

if (typingText) {
    setInterval(() => {
        typingText.style.animation = 'none';
        setTimeout(() => {
            typingText.style.animation = 'typing 3s steps(40) 1s 1 normal both, blink 0.75s step-end infinite';
        }, 100);
    }, 15000); // Restart every 15 seconds
}

// ===== RANDOM GLITCH EFFECT =====
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        if (Math.random() > 0.7) {
            element.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0000,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff
            `;
            
            setTimeout(() => {
                element.style.textShadow = '';
            }, 50);
        }
    });
}, 3000);

// ===== SKILL CARD HOVER TO FLIP =====
document.querySelectorAll('.skill-card').forEach(card => {
    const inner = card.querySelector('.skill-card-inner');
    
    // Add smooth hover effects
    card.addEventListener('mouseenter', () => {
        inner.style.transform = 'rotateY(180deg)';
        
        // Subtle icon animation
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'scale(1.1)';
        
        // Subtle glow effect
        const front = card.querySelector('.skill-card-front');
        const back = card.querySelector('.skill-card-back');
        front.style.borderColor = 'rgba(0, 255, 255, 0.3)';
        back.style.borderColor = 'rgba(0, 255, 255, 0.3)';
        front.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.1)';
        back.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.1)';
    });
    
    // Smooth transition out
    card.addEventListener('mouseleave', () => {
        inner.style.transform = 'rotateY(0deg)';
        
        // Reset icon
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'scale(1)';
        
        // Reset card
        const front = card.querySelector('.skill-card-front');
        const back = card.querySelector('.skill-card-back');
        front.style.borderColor = 'rgba(0, 255, 255, 0.1)';
        back.style.borderColor = 'rgba(0, 255, 255, 0.1)';
        front.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        back.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
    
    // Add floating animation to back icon
    const backIcon = card.querySelector('.skill-back-icon');
    backIcon.style.cssText = `
        animation: float 3s ease-in-out infinite;
        transition: all 0.3s ease;
    `;
});

// ===== PROJECT CARD HOVER SOUND EFFECT (Optional) =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // You can add sound effect here if needed
        card.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.5s ease';
    });
});

// ===== DYNAMIC YEAR UPDATE IN FOOTER =====
const footerCopy = document.querySelector('.footer-copy');
if (footerCopy) {
    const currentYear = new Date().getFullYear();
    footerCopy.textContent = `© ${currentYear} BRUTAL.DEV`;
}

// ===== SCROLL PROGRESS INDICATOR =====
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff0000, #ff00ff, #00ffff);
        z-index: 10001;
        transition: width 0.1s;
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        indicator.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// ===== PREVENT ANIMATION ON PAGE LOAD =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'ESC' to close mobile menu
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        successModal.classList.remove('show');
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll handling code here
            ticking = false;
        });
        ticking = true;
    }
});

// ===== LAZY LOAD ANIMATIONS =====
const lazyAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            lazyAnimationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Apply lazy animation to cards
document.querySelectorAll('.skill-card, .project-card, .stat-card').forEach(element => {
    lazyAnimationObserver.observe(element);
});

// ===== TOUCH SUPPORT FOR MOBILE =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left
        console.log('Swiped left');
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right
        console.log('Swiped right');
    }
}

// ===== FORM VALIDATION =====
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#ff0000';
            input.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        } else {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }
    });
    
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.style.borderColor = '#00ff00';
            input.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
        }
    });
});

// ===== EMAIL VALIDATION =====
const emailInput = document.querySelector('input[type="email"]');

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value) && emailInput.value !== '') {
            emailInput.style.borderColor = '#ff0000';
            emailInput.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        }
    });
}

// ===== DYNAMIC CURSOR STYLE =====
document.querySelectorAll('a, button, .project-card, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '600px';
        cursorGlow.style.height = '600px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 0, 0.25) 0%, transparent 70%)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '400px';
        cursorGlow.style.height = '400px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 70%)';
    });
});

// ===== ACCESSIBILITY: FOCUS VISIBLE =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===== SECTION ACTIVE STATE IN NAV =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== PRELOAD IMAGES =====
const preloadImages = () => {
    // Add your image URLs here if you have any
    const imageUrls = [];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

preloadImages();

// ===== BROWSER DETECTION =====
const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    let browserName;
    
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Unknown";
    }
    
    console.log(`%cBrowser: ${browserName}`, 'color: #00ffff; font-size: 14px;');
};

detectBrowser();

// ===== FPS COUNTER (Optional for debugging) =====
let fps = 0;
let lastTime = performance.now();

const measureFPS = () => {
    const currentTime = performance.now();
    fps = Math.round(1000 / (currentTime - lastTime));
    lastTime = currentTime;
    
    // Uncomment to display FPS in console
    // console.log(`FPS: ${fps}`);
    
    requestAnimationFrame(measureFPS);
};

// measureFPS(); // Uncomment to enable FPS counter

// ===== FINAL INITIALIZATION =====
console.log('%c✓ Portfolio Initialized Successfully!', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('%cAll systems operational 🚀', 'color: #ffff00; font-size: 14px;');

// ===== CLEANUP ON PAGE UNLOAD =====
window.addEventListener('beforeunload', () => {
    // Cleanup code here if needed
    console.log('Page unloading...');
});