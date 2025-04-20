document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.querySelector('.splash-screen');
  const container = document.querySelector('.container');
  
  // Make sure the splash screen is visible and container is hidden initially
  if (splashScreen) {
    splashScreen.style.opacity = '1';
    
    // Add click event to the splash screen
    splashScreen.addEventListener('click', () => {
      // Fade out splash screen
      splashScreen.style.opacity = '0';
      
      // Show the main content
      container.style.opacity = '1';
      
      // Remove splash screen after transition
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 500);
      
      // Add a "welcome" sound effect
      const welcomeSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU9vT18=');
      welcomeSound.volume = 0.3;
      try {
        welcomeSound.play();
      } catch (e) {
        console.log('Audio could not be played automatically');
      }
    });
  }
});


document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  const links = document.querySelectorAll('a, .skill-card, .project-card');
  links.forEach(link => {
    const rect = link.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.mixBlendMode = 'screen';
    } else {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.mixBlendMode = 'difference';
    }
  });
});


const glitchElement = document.querySelector('.glitch');
if (glitchElement) {
  glitchElement.addEventListener('mouseover', () => {
    glitchElement.style.animation = 'none';
    setTimeout(() => {
      glitchElement.style.animation = 'glitch-animation 0.5s infinite linear alternate-reverse';
    }, 50);
  });
  
  glitchElement.addEventListener('mouseout', () => {
    glitchElement.style.animation = 'glitch-animation 3s infinite linear alternate-reverse';
  });
}


function createDigitalNoise() {
  const noise = document.createElement('div');
  noise.classList.add('digital-noise');
  noise.style.position = 'fixed';
  noise.style.width = '2px';
  noise.style.height = '2px';
  noise.style.background = '#fff';
  noise.style.boxShadow = '0 0 2px #0ff';
  noise.style.opacity = Math.random() * 0.5 + 0.5;
  noise.style.left = Math.random() * window.innerWidth + 'px';
  noise.style.top = Math.random() * window.innerHeight + 'px';
  noise.style.zIndex = '0';
  noise.style.pointerEvents = 'none';
  
  document.body.appendChild(noise);
  
  setTimeout(() => {
    noise.remove();
  }, 300);
}

setInterval(createDigitalNoise, 100);


const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    
    const icon = card.querySelector('.skill-icon');
    if (icon) {
      icon.style.animation = 'pulse 1s ease-in-out infinite';
    }
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    
    const icon = card.querySelector('.skill-icon');
    if (icon) {
      icon.style.animation = 'pulse 3s ease-in-out infinite';
    }
  });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});


window.addEventListener('load', () => {
  const body = document.body;
  body.style.opacity = '0';
  body.style.transition = 'opacity 1s ease';
  
  setTimeout(() => {
    body.style.opacity = '1';
    
 
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'SYSTEM LOADED';
    loadingMessage.style.position = 'fixed';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.fontFamily = 'VT323, monospace';
    loadingMessage.style.fontSize = '2rem';
    loadingMessage.style.color = '#00ffff';
    loadingMessage.style.textShadow = '0 0 10px #00ffff';
    loadingMessage.style.zIndex = '9999';
    loadingMessage.style.pointerEvents = 'none';
    
    document.body.appendChild(loadingMessage);
    
    setTimeout(() => {
      loadingMessage.style.opacity = '0';
      loadingMessage.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        loadingMessage.remove();
      }, 500);
    }, 1500);
  }, 500);
});


const visitorCounter = document.querySelector('.counter span');
if (visitorCounter) {
  const currentCount = parseInt(visitorCounter.textContent.replace(/\D/g, ''));
  setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 3);
    if (randomIncrement > 0) {
      const newCount = currentCount + randomIncrement;
      const formattedCount = String(newCount).padStart(6, '0');
      visitorCounter.textContent = `Visitors: ${formattedCount}`;
    }
  }, 30000);
}

// Easter egg :333
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', (e) => {

  if (e.key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    
  
    if (konamiCodePosition === konamiCode.length) {
  
      konamiCodePosition = 0;
      

      activateEasterEgg();
    }
  } else {

    konamiCodePosition = 0;
  }
});

function activateEasterEgg() {
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*!?';
  const matrixContainer = document.createElement('div');
  matrixContainer.style.position = 'fixed';
  matrixContainer.style.top = '0';
  matrixContainer.style.left = '0';
  matrixContainer.style.width = '100%';
  matrixContainer.style.height = '100%';
  matrixContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  matrixContainer.style.zIndex = '9999';
  matrixContainer.style.overflow = 'hidden';
  matrixContainer.style.fontFamily = 'monospace';
  
  document.body.appendChild(matrixContainer);
  
 
  const columns = Math.floor(window.innerWidth / 20);
  
  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.left = (i * 20) + 'px';
    column.style.top = Math.random() * -1000 + 'px';
    column.style.color = '#0f0';
    column.style.fontSize = '20px';
    column.style.textShadow = '0 0 5px #0f0';
    column.style.whiteSpace = 'nowrap';
    

    const columnHeight = Math.floor(Math.random() * 20) + 10;
    for (let j = 0; j < columnHeight; j++) {
      const char = document.createElement('div');
      char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
      char.style.opacity = j === 0 ? '1' : (1 - j / columnHeight).toFixed(2);
      column.appendChild(char);
    }
    
    matrixContainer.appendChild(column);
    
  
    let position = parseInt(column.style.top);
    const speed = Math.random() * 2 + 1;
    
    function animateColumn() {
      position += speed;
      column.style.top = position + 'px';
      
  
      if (Math.random() > 0.9) {
        const firstChar = column.firstChild;
        if (firstChar) {
          firstChar.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        }
      }
      
     
      if (position > window.innerHeight) {
        position = -columnHeight * 20;
        column.style.top = position + 'px';
        column.style.left = (Math.random() * window.innerWidth) + 'px';
      }
      
      requestAnimationFrame(animateColumn);
    }
    
    animateColumn();
  }
  
  // Add a message
  setTimeout(() => {
    const message = document.createElement('div');
    message.textContent = 'b';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontFamily = 'Orbitron, sans-serif';
    message.style.fontSize = '3rem';
    message.style.color = '#fff';
    message.style.textShadow = '0 0 10px #0f0, 0 0 20px #0f0';
    message.style.zIndex = '10000';
    message.style.textAlign = 'center';
    
    matrixContainer.appendChild(message);
  }, 2000);
  

  setTimeout(() => {
    matrixContainer.style.opacity = '0';
    matrixContainer.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
      matrixContainer.remove();
    }, 1000);
  }, 8000);
}
