# 🌿 Calculadora de Emissão de CO₂

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=github)](https://wellingtonvasconcelos.github.io/calculadoraDeEmissaoCO2/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<div align="center">
  
  <h3>🌍 Conscientize-se. Calcule. Compense.</h3>
  
  [🐛 **Reportar Bug**](https://github.com/WellingtonVasconcelos/calculadoraDeEmissaoCO2/issues) | [💡 **Sugerir Melhoria**](https://github.com/WellingtonVasconcelos/calculadoraDeEmissaoCO2/issues)
</div>

## 🎯 Sobre o Projeto

A **Calculadora de Emissão de CO₂** é uma aplicação web moderna e interativa desenvolvida para conscientização ambiental. Com uma interface intuitiva e visual atraente, ela permite calcular e comparar as emissões de carbono de diferentes meios de transporte entre cidades brasileiras.

### ✨ Destaques

- 🚗 **4 Modos de Transporte**: Bicicleta, Carro, Ônibus e Caminhão
- 📊 **Comparação Visual**: Gráficos interativos e progress bars
- 💰 **Créditos de Carbono**: Cálculo automático com preços de mercado
- 📱 **Design Responsivo**: Funciona perfeitamente em mobile e desktop
- 🎨 **Interface Moderna**: Tema de cores renováveis com animações
- ⚡ **Performance Otimizada**: Carregamento rápido e suave

## 🚀 Começando Rápido

### Pré-requisitos

- Node.js 14+ (opcional, apenas para desenvolvimento)
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Git (para contribuição)

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/WellingtonVasconcelos/calculadoraDeEmissaoCO2.git

# Entre na pasta do projeto
cd calculadoraDeEmissaoCO2

# Instale as dependências (opcional)
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Ou use o servidor simples
npm start

# A aplicação estará disponível em: http://localhost:3000
Instalação Instantânea (Sem Node.js)
Download: Clique em "Code" → "Download ZIP"

Extraia: Descompacte o arquivo em qualquer pasta

Execute: Clique duplo em index.html

Pronto: A calculadora está funcionando localmente!

Comandos Disponíveis
bash
# Servidor de desenvolvimento com live reload
npm run dev

# Servidor de produção estático
npm start

# Servidor Python alternativo (se tiver Python instalado)
python -m http.server 8000

# Servidor PHP alternativo (se tiver PHP instalado)
php -S localhost:8080
📊 Como Usar
Passo a Passo
Selecione a Origem

Digite ou selecione a cidade de partida

Sistema de autocomplete com 40+ cidades

Escolha o Destino

Selecione para onde está indo

Distância calculada automaticamente

Escolha o Transporte

🚲 Bicicleta (0 g CO₂/km)

🚗 Carro (120 g CO₂/km)

🚌 Ônibus (89 g CO₂/km)

🚚 Caminhão (960 g CO₂/km)

Veja os Resultados

Emissão total em kg de CO₂

Comparação com outros transportes

Créditos de carbono necessários

Custo estimado para compensação

Exemplos Práticos:

Rota	Distância	Melhor Opção	Economia de CO₂
São Paulo → Rio	430 km	Ônibus	13.3 kg
Brasília → Goiânia	209 km	Bicicleta	25.1 kg
Porto Alegre → Florianópolis	476 km	Ônibus	14.8 kg
🛠️ Tecnologias Utilizadas

📁 Estrutura do Código
text
calculadoraDeEmissaoCO2/
├── index.html                    # Página principal
├── package.json                  # Configurações do projeto e scripts
├── css/
│   └── style.css                # Estilos principais com tema moderno
├── js/
│   ├── app.js                   # Lógica principal e inicialização
│   ├── calculator.js            # Funções matemáticas de cálculo
│   ├── config.js                # Configurações e constantes globais
│   ├── ui.js                    # Renderização e manipulação da interface
│   ├── routes-data.js           # Banco de dados de rotas brasileiras
│   └── particles.js             # Efeitos visuais de partículas
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline de deploy para GitHub Pages
└── README.md                    # Esta documentação


🚀 Deployment
GitHub Pages (Automático)
O projeto está configurado para deploy automático no GitHub Pages:

Push para branch main

GitHub Actions executa o workflow

Site publicado em: https://wellingtonvasconcelos.github.io/calculadoraDeEmissaoCO2/

Deploy Manual
bash
# 1. Build (se necessário)
# 2. Copie arquivos para servidor
# 3. Configure servidor web (Apache, Nginx, etc.)
# 4. Acesse via domínio configurado
Variáveis de Ambiente
bash
# Para deploy em outros ambientes
PORT=3000                   # Porta do servidor
NODE_ENV=production         # Ambiente de produção
BASE_URL=/calculadora       # URL base da aplicação
🧪 Testes e Qualidade
Testes Manuais
Teste de Funcionalidade

bash
# Verificar todos os inputs
# Testar todas as combinações de transporte
# Validar cálculos com exemplos conhecidos
Teste de Responsividade

Chrome DevTools → Toggle Device Toolbar

Testar em diferentes resoluções

Verificar touch events em mobile

Teste de Performance

Lighthouse no Chrome DevTools

WebPageTest para métricas detalhadas

Google PageSpeed Insights

Checklist de Qualidade
Cálculos precisos

Interface responsiva

Acessibilidade (alt tags, ARIA)

Performance otimizada

Código limpo e comentado

Sem erros no console

Compatibilidade entre navegadores

🤝 Contribuindo
Contribuições são bem-vindas! Siga estes passos:

Fork o projeto

Clone seu fork:

bash
git clone https://github.com/seu-usuario/calculadoraDeEmissaoCO2.git
Crie uma branch:

bash
git checkout -b feature/nova-funcionalidade
Commit suas mudanças:

bash
git commit -m 'Adiciona nova funcionalidade incrível'
Push para a branch:

bash
git push origin feature/nova-funcionalidade
Abra um Pull Request

Diretrizes de Código
Use ESLint ou Prettier para formatação

Siga o padrão de nomenclatura existente

Adicione comentários para código complexo

Mantenha a coesão do design system

Teste suas mudanças em múltiplos navegadores

Areas para Contribuição
🌐 Adicionar mais cidades ao banco de dados

📱 Melhorar responsividade para tablets

🎨 Criar novos temas de cores

🔧 Otimizar performance

📖 Melhorar documentação

🐛 Corrigir bugs existentes

📄 Licença
Este projeto está licenciado sob a MIT License

🙏 Agradecimentos
DIO (Digital Innovation One) pela iniciativa educacional

GitHub Copilot pela assistência no desenvolvimento

Comunidade Open Source pelas tecnologias utilizadas

Contribuidores que ajudam a melhorar o projeto

Usuários por ajudarem a conscientizar sobre emissões de CO₂

🌍 Impacto Ambiental
Estatísticas do Projeto
✅ 40+ cidades brasileiras mapeadas

✅ 4 modos de transporte comparados

✅ 100% gratuito e de código aberto

✅ Zero dependências externas pesadas

✅ Educação ambiental acessível a todos

Como Você Pode Ajudar
Use transportes sustentáveis

Compartilhe esta calculadora

Conscientize amigos e familiares

Contribua com o projeto

Compense suas emissões quando possível

📞 Suporte e Contato
Issues: GitHub Issues

Email: wltvasc@hotmail.com

🔮 Roadmap e Futuro
Próximas Features Planejadas
Adicionar mais modos de transporte (trem, avião)

Gráficos mais detalhados e exportáveis

Modo escuro/claro

Internacionalização (inglês, espanhol)

API pública para integração

App mobile nativo

Dashboard de estatísticas

Sistema de salvamento de cálculos
