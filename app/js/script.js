const questions=document.querySelectorAll('.question'),
	img=document.querySelector('.card__img > img');

Array.from(questions).forEach(question=>{
	question.addEventListener('click',()=>{
		let parent = question.parentElement;
		if(parent.classList.contains('open')) {
			parent.classList.remove('open');
			img.style.right="78%";
		}
		else {
			Array.from(questions).forEach(question=>{
				question.parentElement.classList.remove('open');
			});
			parent.classList.add('open');
			img.style.right="85%";
		}
	});
});