// c arrow 
const cArrowRight = document.querySelector('.c-angle-right');
const components = document.querySelector('.components');
const icomponents = document.querySelector('.icomponents');
const cContainer = document.querySelector('.cc-container');
const uContainer = document.querySelector('.uc-container');
const iArrowRight = document.querySelector('.i-angle-right');

const hamburger = document.querySelector('.hamburger');
const hamCont = document.querySelector('.ham-items');
var searchClicked = 0;

hamburger.addEventListener('click', (e)=>{
	if(searchClicked%2==0){
		hamCont.classList.add('show');
		searchClicked++;
	} else {
		hamCont.classList.remove('show');
		searchClicked--
	}
});

const searchBtn = document.querySelector('.search-icon');
const searchBar = document.querySelector('.mob-search');
var searchClicked = 0;

searchBtn.addEventListener('click', (e)=>{
	if(searchClicked%2==0){
		searchBar.classList.add('show');
		searchClicked++
	} else {
		searchBar.classList.remove('show');
		searchClicked--
	}
})



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

// toggle 

const toggle = document.querySelector('.fa-angle-left');
const tgleContainer = document.querySelector('.round-toggle');
const logo = document.querySelector('.logo');
const logoCont = document.querySelector('.logo-cont');
const navbarSection = document.querySelector('.navbar-section');
const cmpContainer = document.querySelectorAll('.components-cont');
var tgleCount = 0;

tgleContainer.addEventListener('click', (e)=>{
	if(tgleCount%2==0) {
		toggle.classList.add('rotate-180');
		cArrowRight.style.display = 'none';
		iArrowRight.style.display = 'none';
		logoCont.style.marginLeft = '0';
		navbarSection.style.minWidth = 'auto';
		logo.style.display = 'none';
		cmpContainer.forEach((cmp)=>{
			cmp.classList.add('center')
		});
		tgleCount++;

	} else {
		toggle.classList.remove('rotate-180');
		cArrowRight.style.display = 'block';
		iArrowRight.style.display = 'block';
		navbarSection.style.minWidth = '12rem';
		logoCont.style.marginLeft = '1rem';
		logo.style.display = 'block';
		cmpContainer.forEach((cmp)=>{
			cmp.classList.remove('center')
		});
		tgleCount--;
	}
});
// resize 

window.onresize = ()=>{
	if (window.innerWidth < 1000){
		toggle.classList.add('rotate-180');
		cArrowRight.style.display = 'none';
		iArrowRight.style.display = 'none';
		logoCont.style.marginLeft = '0';
		navbarSection.style.minWidth = 'auto';
		logo.style.display = 'none';
		cmpContainer.forEach((cmp)=>{
			cmp.classList.add('center')
		});
		tgleCount++;
	} else {
		toggle.classList.remove('rotate-180');
		cArrowRight.style.display = 'block';
		iArrowRight.style.display = 'block';
		navbarSection.style.minWidth = '12rem';
		logoCont.style.marginLeft = '1rem';
		logo.style.display = 'block';
		cmpContainer.forEach((cmp)=>{
			cmp.classList.remove('center')
		});
		tgleCount--;
	}
}

if (window.innerWidth < 1000){
	toggle.classList.add('rotate-180');
	cArrowRight.style.display = 'none';
	iArrowRight.style.display = 'none';
	logoCont.style.marginLeft = '0';
	navbarSection.style.minWidth = 'auto';
	logo.style.display = 'none';
	cmpContainer.forEach((cmp)=>{
		cmp.classList.add('center')
	});
	tgleCount++;
} else {
	toggle.classList.remove('rotate-180');
	cArrowRight.style.display = 'block';
	iArrowRight.style.display = 'block';
	navbarSection.style.minWidth = '12rem';
	logoCont.style.marginLeft = '1rem';
	logo.style.display = 'block';
	cmpContainer.forEach((cmp)=>{
		cmp.classList.remove('center')
	});
	tgleCount--;
}


// overview options
const dots = document.querySelector('.dots3');
const eOverview = document.querySelector('.e-overview');
const dots1 = document.querySelector('.dots4');
const rOverview = document.querySelector('.r-overview');

var dotClicks1 = 0;
var dotClicks = 0;

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

