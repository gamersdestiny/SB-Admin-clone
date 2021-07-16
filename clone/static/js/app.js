// c arrow 
const cArrowRight = document.querySelector('.c-angle-right');
const components = document.querySelector('.components');
const icomponents = document.querySelector('.icomponents');
const cContainer = document.querySelector('.cc-container');
const uContainer = document.querySelector('.uc-container');
const iArrowRight = document.querySelector('.i-angle-right');
const dots = document.querySelector('.dots3');
const eOverview = document.querySelector('.e-overview');
const dots1 = document.querySelector('.dots4');
const rOverview = document.querySelector('.r-overview');

var dotClicks1 = 0;
var dotClicks = 0;
var iArwCount = 0;
var arwCount = 0;

cContainer.addEventListener('click', (e)=>{
	if (arwCount%2==0){
		cArrowRight.classList.add('rotate-down');
		components.classList.add('show-comp');
		arwCount++;
		if(iArwCount>0){
			iArrowRight.classList.remove('rotate-down');
			icomponents.classList.remove('show-comp');
			iArwCount--;
		}
	} 
	else {
		cArrowRight.classList.remove('rotate-down');
		components.classList.remove('show-comp')
		arwCount--;
	}
});

// u arrow
uContainer.addEventListener('click', (e)=>{
	if (iArwCount%2==0){
		iArrowRight.classList.add('rotate-down');
		icomponents.classList.add('show-comp');
		if(arwCount>0){
			cArrowRight.classList.remove('rotate-down');
			components.classList.remove('show-comp');
			arwCount--;
		}
		iArwCount++;
	} 
	else {
		iArrowRight.classList.remove('rotate-down');
		icomponents.classList.remove('show-comp');
		iArwCount--;
	}
});

// overview options

dots.addEventListener('click', (e)=>{
	if (dotClicks %2==0){
		eOverview.classList.add('show');
		if (dotClicks1>0){
			rOverview.classList.remove('show');
			dotClicks1--;
		}
		dotClicks++;
	} else {
		eOverview.classList.remove('show');
		dotClicks--;
	}
});

dots1.addEventListener('click', (e)=>{
	if (dotClicks1 %2==0){
		rOverview.classList.add('show');
		if (dotClicks>0){
			eOverview.classList.remove('show');
			dotClicks--;
		}
		dotClicks1++;
	} else {
		rOverview.classList.remove('show');
		dotClicks1--;
	}
});








