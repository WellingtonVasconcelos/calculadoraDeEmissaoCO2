// particles.js - VERSÃO CORRIGIDA
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que o CSS foi carregado
    setTimeout(function() {
        function createParticles() {
            // Verificar se já existe o container
            let particlesContainer = document.querySelector('.particles-container');
            
            if (!particlesContainer) {
                particlesContainer = document.createElement('div');
                particlesContainer.className = 'particles-container';
                particlesContainer.style.position = 'fixed';
                particlesContainer.style.top = '0';
                particlesContainer.style.left = '0';
                particlesContainer.style.width = '100%';
                particlesContainer.style.height = '100%';
                particlesContainer.style.pointerEvents = 'none';
                particlesContainer.style.zIndex = '-1';
                document.body.appendChild(particlesContainer);
            }
            
            const colors = ['#00b894', '#0984e3', '#fd79a8', '#ffeaa7', '#a29bfe'];
            
            // Limpar partículas existentes (se houver)
            particlesContainer.innerHTML = '';
            
            // Criar menos partículas para melhor performance
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 15 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.background = `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`;
                
                particle.style.opacity = Math.random() * 0.2 + 0.1;
                
                // Garantir que a animação existe no CSS
                particle.style.animation = `float ${Math.random() * 15 + 8}s infinite linear`;
                particle.style.animationDelay = `${Math.random() * 3}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Tentar criar partículas
        try {
            createParticles();
            console.log('✅ Partículas criadas com sucesso!');
        } catch (error) {
            console.warn('⚠️ Não foi possível criar partículas:', error);
            // Não bloquear a aplicação se as partículas falharem
        }
    }, 500); // Aguardar 500ms para o CSS carregar
});