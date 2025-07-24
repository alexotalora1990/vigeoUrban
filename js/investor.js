document.addEventListener('DOMContentLoaded', () => {
    // Datos hardcodeados para gráfico
    const ctx = document.getElementById('investmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
            datasets: [{
                label: 'Valor de la inversión (€)',
                data: [25000, 29000, 32000, 37000, 42000],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: document.body.classList.contains('night-mode') 
                               ? '#ECEFF1' : '#333333'
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: document.body.classList.contains('night-mode') 
                               ? '#ECEFF1' : '#333333'
                    },
                    grid: {
                        color: document.body.classList.contains('night-mode') 
                               ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: document.body.classList.contains('night-mode') 
                               ? '#ECEFF1' : '#333333'
                    },
                    grid: {
                        color: document.body.classList.contains('night-mode') 
                               ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });
});