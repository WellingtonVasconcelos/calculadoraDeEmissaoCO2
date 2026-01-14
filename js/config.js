// config.js - VERSÃO CORRIGIDA
/**
 * CONFIG - Global configuration object
 * Contains emission factors, transport mode metadata, and utility functions
 */

const CONFIG = {
    /**
     * CO2 emission factors in kg per kilometer for each transport mode
     */
    EMISSION_FACTORS: {
        bicycle: 0,
        car: 0.12,
        bus: 0.089,
        truck: 0.96
    },

    /**
     * Transport mode metadata for UI rendering
     */
    TRANSPORT_MODES: {
        bicycle: {
            label: "Bicicleta",
            icon: "🚲",
            color: "#10b981"
        },
        car: {
            label: "Carro",
            icon: "🚗",
            color: "#3b82f6"
        },
        bus: {
            label: "Ônibus",
            icon: "🚌",
            color: "#f59e0b"
        },
        truck: {
            label: "Caminhão",
            icon: "🚚",
            color: "#ef4444"
        }
    },

    /**
     * Carbon credit configuration
     */
    CARBON_CREDIT: {
        KG_PER_CREDIT: 1000,
        PRICE_MIN_BRL: 50,
        PRICE_MAX_BRL: 150
    },

    /**
     * Populate the datalist with all available cities
     * Fetches cities from RoutesDB and creates option elements
     */
    populateDatalist: function() {
        try {
            // Get all cities from the routes database
            const cities = RoutesDB.getAllCities();
            
            // Get the datalist element
            const datalist = document.getElementById('cities-list');
            
            if (!datalist) {
                console.error('❌ Datalist não encontrado!');
                return false;
            }
            
            // Clear existing options (if any)
            datalist.innerHTML = '';
            
            // Create and append option elements for each city
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                datalist.appendChild(option);
            });
            
            console.log(`✅ Datalist populado com ${cities.length} cidades!`);
            return true;
        } catch (error) {
            console.error('❌ Erro ao popular datalist:', error);
            return false;
        }
    },

    /**
     * Setup automatic distance calculation when origin and destination are selected
     * Handles route lookup and manual distance override
     */
    setupDistanceAutofill: function() {
        try {
            // Get form elements
            const originInput = document.getElementById('origin');
            const destinationInput = document.getElementById('destination');
            const distanceInput = document.getElementById('distance');
            const manualCheckbox = document.getElementById('manual-distance');
            const helperText = document.querySelector('.form-group__helper-text');
            
            if (!originInput || !destinationInput || !distanceInput) {
                console.error('❌ Elementos do formulário não encontrados!');
                return false;
            }
            
            /**
             * Try to find and fill the distance between selected cities
             */
            const tryFindDistance = () => {
                // Get trimmed values from inputs
                const origin = originInput.value.trim();
                const destination = destinationInput.value.trim();
                
                // Only search if both fields are filled
                if (origin && destination) {
                    // Try to find the route distance
                    const distance = RoutesDB.findDistance(origin, destination);
                    
                    if (distance !== null) {
                        // Route found - fill the distance
                        distanceInput.value = distance;
                        distanceInput.readOnly = true;
                        
                        // Show success message
                        if (helperText) {
                            helperText.textContent = `✓ Distância encontrada: ${distance} km`;
                            helperText.style.color = '#10b981';
                        }
                        
                        console.log(`✅ Distância encontrada: ${origin} → ${destination} = ${distance}km`);
                    } else {
                        // Route not found
                        distanceInput.value = '';
                        distanceInput.readOnly = false;
                        
                        // Suggest manual input
                        if (helperText) {
                            helperText.textContent = 'Rota não encontrada. Por favor, insira a distância manualmente.';
                            helperText.style.color = '#f59e0b';
                        }
                        
                        console.log(`⚠️ Rota não encontrada: ${origin} → ${destination}`);
                    }
                }
            };
            
            // Add change event listeners to origin and destination inputs
            originInput.addEventListener('change', tryFindDistance);
            destinationInput.addEventListener('change', tryFindDistance);
            
            // Adicionar também evento de input para resposta mais rápida
            originInput.addEventListener('input', tryFindDistance);
            destinationInput.addEventListener('input', tryFindDistance);
            
            // Handle manual distance checkbox
            if (manualCheckbox) {
                manualCheckbox.addEventListener('change', function() {
                    if (this.checked) {
                        // Enable manual distance entry
                        distanceInput.readOnly = false;
                        distanceInput.focus();
                        
                        if (helperText) {
                            helperText.textContent = 'Digite a distância manualmente';
                            helperText.style.color = '#6b7280';
                        }
                    } else {
                        // Try to find route again when unchecking
                        tryFindDistance();
                    }
                });
            }
            
            console.log('✅ Autocomplete configurado!');
            return true;
        } catch (error) {
            console.error('❌ Erro ao configurar autocomplete:', error);
            return false;
        }
    }
};