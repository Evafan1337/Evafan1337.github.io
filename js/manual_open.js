
var sliderContainer = Array.from(document.querySelectorAll('div.portfolio-inner-elem'));
var debug = Array.from(document.querySelectorAll('span.portfolio__open'));
var sliderElement = Array.from(document.querySelectorAll('span.portfolio__open'));
var sliderControler = Array.from(document.querySelectorAll('span.portfolio__close'));
console.log(sliderElement[1]);
console.log(sliderControler);
console.log(sliderContainer);

sliderElement.forEach(function(element,index){
	if(element.onclick = function(evt){
		console.log(index);
		console.log(sliderElements[index]);
		console.log(debug[index]);
		debug[index].classList.add('hidden');
		sliderControler[index].classList.remove('hidden');
		//sliderElement[index].classList.add('hidden');
		// sliderElement[index].classList.add('hidden');
	});
});