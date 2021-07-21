const submitbtn = document.querySelector('.submit-chart');


//csrf token

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}
var csrftoken = getCookie('csrftoken');

submitbtn.addEventListener('click', (e)=>{
	e.preventDefault()
	const charvalue = document.querySelectorAll('.chart-input');
	
	url = `https://localhost:8000/updatechart/1/`
	alert('sorry for the inconvenience feature is under development')
})

function updateDefault(){
	url = 'http://localhost:8000/listchart/'
	fetch(url)
	.then((resp) => (resp.json()))
	.then(function(data){
		const chartData = document.querySelectorAll('.chart-input');
		var list = data[0];
		var iter = 0;
		for (let i in list){
			
			if((i==='chartName') || (i==='id')){
				continue
			}
			chartData[iter].setAttribute('value', list[i]), 'chart attribute';
			iter++;
		}	
	});
};

updateDefault();







