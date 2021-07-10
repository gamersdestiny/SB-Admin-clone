// c arrow 
const cArrowRight = document.querySelector('.c-angle-right');
const components = document.querySelector('.components');
const icomponents = document.querySelector('.icomponents');
var arwCount = 0;

cArrowRight.addEventListener('click', (e)=>{
	if (arwCount%2==0){
		cArrowRight.classList.add('rotate-down');
		components.classList.add('show-comp');
		iArrowRight.classList.remove('rotate-down');
		icomponents.classList.remove('show-comp');
		arwCount++;
		iArwCount--;
	} 
	else {
		cArrowRight.classList.remove('rotate-down');
		components.classList.remove('show-comp')
		arwCount--;
	}
});

// i arrow
const iArrowRight = document.querySelector('.i-angle-right');
var iArwCount = 0;

iArrowRight.addEventListener('click', (e)=>{
	if (iArwCount%2==0){
		iArrowRight.classList.add('rotate-down');
		icomponents.classList.add('show-comp');
		cArrowRight.classList.remove('rotate-down');
		components.classList.remove('show-comp');
		arwCount--;
		iArwCount++;
	} 
	else {
		iArrowRight.classList.remove('rotate-down');
		icomponents.classList.remove('show-comp');
		iArwCount--;
	}
});

