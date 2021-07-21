// import { charted } from './updatechart';

// ===================graph======================

var userdata = []


function updateDefault(){
	url = 'http://localhost:8000/listchart/'
	fetch(url)
	.then((resp) => (resp.json()))
	.then(function(data){
		var list = data[0];
		iter = 0
		for (let i in list){
			
			if((i==='chartName') || (i==='id')){
				continue
			}
			userdata.push(list[i])
			iter++;
		}	
	});
};
updateDefault()
console.log(JSON.parse(JSON.stringify(userdata)), 'data')

const lineChart = document.querySelector('.line-chart');
setTimeout(()=>{

	var newChart = new Chart(lineChart, {
	
	type: 'line',
	data: {
		labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
		datasets: [{
			label: '',
			data: userdata,
			// [50, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000 ],
			backgroundColor: [
                'rgba(78, 115, 223, 1)',
			],
			borderColor: [
                'rgba(78, 115, 223, 1)',
			],
			borderWidth: 3,
			tension: .2,
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
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

}, 600)
// ====================================donught chart=========================================

const donut = document.querySelector('.donut-chart');

var donutChart = new Chart(donut, {
	type: 'doughnut',
	data: {
		labels: ['Direct', 'Social', 'Referral'],
		datasets: [{
			label: 'dont display',
			data: [55, 30, 15],
			backgroundColor: [
				'rgba(78, 115, 223, 1)',
				'rgba(28, 200, 138, 1)',
				'rgba(54, 185, 204, 1)'
			],
			hoverOffset: 3,
			cutout: 90,
		}],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'bottom',
				align: 'bottom'
			}
		}			
	}
})


