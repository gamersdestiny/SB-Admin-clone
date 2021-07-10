
// ===================graph======================

const lineChart = document.querySelector('.line-chart');

var newChart = new Chart(lineChart, {
	
	type: 'line',
	data: {
		labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
		datasets: [{
			label: '',
			data: [50, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000 ],
			backgroundColor: [
                'rgba(54, 162, 235, 1)'
			],
			borderColor: [
                'rgba(54, 162, 235, 1)'
			],
			borderWidth: 3,
			tension: .3,
		}]
	},
	options: {
		plugins: {
			legend: {
				display: false
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false
				},
			},
			x: {
				grid: {
					display: false
				}
			},
		},
}
});
