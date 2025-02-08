// Set up the number of particles and create them
const numParticles = 3; // Number of water particles
const particles = [];
const particleContainer = document.getElementById("particles");

// Create particles and append them to the particle container
for (let i = 0; i < numParticles; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particleContainer.appendChild(particle);
    particles.push(particle);
}

let mouseX = 0, mouseY = 0;
let prevMouseX = 0, prevMouseY = 0;

// Function to animate particles
function moveParticles() {
    particles.forEach((particle, i) => {
        // Make particles move with some delay to create a water-like effect
        let delay = i * 0.1;
        
        // TweenMax to animate the particles
        gsap.to(particle, 0.5, {
            x: prevMouseX + (mouseX - prevMouseX) * Math.random() * 0.5,
            y: prevMouseY + (mouseY - prevMouseY) * Math.random() * 0.5,
            opacity: Math.random() * 0.7 + 0.3, // Add some opacity variation for realism
            scale: Math.random() * 0.6 + 0.4, // Vary scale of particles
            delay: delay,
            ease: "power3.out"
        });
    });
    
    // Keep updating the previous mouse position
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    
    requestAnimationFrame(moveParticles);
}

// Update mouse position
window.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start particle movement
moveParticles();
