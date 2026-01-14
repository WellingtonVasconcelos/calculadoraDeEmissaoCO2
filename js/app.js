// app.js - VERSÃO SIMPLIFICADA E FUNCIONAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Calculadora inicializada!');
    
    // Elementos principais
    const form = document.getElementById('calculator-form');
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const distanceInput = document.getElementById('distance');
    const submitButton = document.querySelector('.form-submit');
    
    // Inicializar datalist
    function initDatalist() {
        const cities = RoutesDB.getAllCities();
        const datalist = document.getElementById('cities-list');
        datalist.innerHTML = '';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        });
        console.log(`🏙️ ${cities.length} cidades carregadas`);
    }
    
    // Configurar autocomplete de distância
    function setupAutocomplete() {
        function updateDistance() {
            const origin = originInput.value.trim();
            const destination = destinationInput.value.trim();
            
            if (origin && destination) {
                const distance = RoutesDB.findDistance(origin, destination);
                if (distance !== null) {
                    distanceInput.value = distance;
                    distanceInput.readOnly = true;
                    console.log(`📏 Distância: ${distance}km`);
                } else {
                    distanceInput.value = '';
                    distanceInput.readOnly = false;
                }
            }
        }
        
        originInput.addEventListener('change', updateDistance);
        destinationInput.addEventListener('change', updateDistance);
        originInput.addEventListener('input', updateDistance);
        destinationInput.addEventListener('input', updateDistance);
        
        // Checkbox manual
        const manualCheckbox = document.getElementById('manual-distance');
        if (manualCheckbox) {
            manualCheckbox.addEventListener('change', function() {
                distanceInput.readOnly = !this.checked;
                if (this.checked) distanceInput.focus();
            });
        }
    }
    
    // Função principal de cálculo
    function calcularEmissao(event) {
        event.preventDefault();
        console.log('🧮 Iniciando cálculo...');
        
        // Obter valores
        const origin = originInput.value.trim();
        const destination = destinationInput.value.trim();
        const distance = parseFloat(distanceInput.value);
        const transport = document.querySelector('input[name="transport"]:checked').value;
        
        // Validar
        if (!origin || !destination) {
            alert('Por favor, preencha origem e destino');
            return;
        }
        
        if (!distance || distance <= 0) {
            alert('Por favor, insira uma distância válida');
            return;
        }
        
        // Mostrar loading
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> Calculando...';
        
        // Simular processamento
        setTimeout(() => {
            try {
                // Calcular
                const emission = Calculator.calculateEmission(distance, transport);
                const carEmission = Calculator.calculateEmission(distance, 'car');
                const savings = transport !== 'car' ? {
                    savedKg: carEmission - emission,
                    percentage: ((carEmission - emission) / carEmission) * 100
                } : null;
                
                const credits = Calculator.calculateCarbonCredits(emission);
                const price = Calculator.estimateCreditPrice(credits);
                
                // Mostrar resultados
                mostrarResultados({
                    origin, destination, distance, emission,
                    transport, savings, credits, price
                });
                
                // Restaurar botão
                submitButton.disabled = false;
                submitButton.innerHTML = 'Calcular Emissão';
                
                console.log('✅ Cálculo completo!');
                
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao calcular: ' + error.message);
                submitButton.disabled = false;
                submitButton.innerHTML = 'Calcular Emissão';
            }
        }, 1000);
    }
    
    // Mostrar resultados (simplificado)
    function mostrarResultados(data) {
        console.log('📊 Mostrando resultados:', data);
        
        // Resultados simples
        const resultsHTML = `
            <h2 class="section-title">Resultados</h2>
            <div class="results__grid">
                <div class="results__card">
                    <div class="results__card-icon">🗺️</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Rota</h3>
                        <p class="results__card-value">${data.origin} → ${data.destination}</p>
                    </div>
                </div>
                <div class="results__card">
                    <div class="results__card-icon">📏</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Distância</h3>
                        <p class="results__card-value">${UI.formatNumber(data.distance, 0)} km</p>
                    </div>
                </div>
                <div class="results__card results__card--highlight">
                    <div class="results__card-icon">🌿</div>
                    <div class="results__card-content">
                        <h3 class="results__card-title">Emissão de CO₂</h3>
                        <p class="results__card-value results__card-value--large">${UI.formatNumber(data.emission)} kg</p>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('results-content').innerHTML = resultsHTML;
        document.getElementById('results').classList.remove('hidden');
        
        // Scroll para resultados
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Inicializar
    initDatalist();
    setupAutocomplete();
    form.addEventListener('submit', calcularEmissao);
    
    console.log('✅ Tudo configurado!');
});