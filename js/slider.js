//alert('haalo');

var leftClick = document.getElementById('leftClick');
var rightClick = document.getElementById('rightClick');
var sliderCounter;

var sliderElements = document.querySelectorAll('div.slider-elem');
console.log(sliderElements);

var arrayLength = sliderElements.length;
arrayLength--;
var sliderCounter=0;

rightClick.addEventListener("click",function(evt)
{
	evt.preventDefault();
	if(sliderCounter === arrayLength){
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter = 0;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
	else{
		console.log('elf')
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter++;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
});

leftClick.addEventListener("click",function(evt)
{
	evt.preventDefault();
	if(sliderCounter === 0){
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter = arrayLength;
		//console.log(sliderCounter);
		//console.log(sliderArray[sliderCounter]);
		sliderElements[sliderCounter].classList.remove('hidden');
	}
	else{
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter--;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
});
