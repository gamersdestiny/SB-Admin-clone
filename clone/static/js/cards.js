const csContainer = document.querySelector('.cs-container');
const csIcone = document.querySelector('.cs-icon');
const csContent = document.querySelector('.cs-content');

var counter = 0;

csContainer.addEventListener('click', (e)=>{
	if (counter%2==0){
		csContent.classList.add('extend');
		csContent.classList.remove('cs-content');
		csIcone.classList.add('rotate-down')
		counter++;
	} else {
		csContent.classList.remove('extend');
		csContent.classList.add('cs-content');
		csIcone.classList.remove('rotate-down')
		counter--;
	}
	
})