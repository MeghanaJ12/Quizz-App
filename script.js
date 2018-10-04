// initialize the correct answers using session storage API


	let score = 0;// set the score to 0
	let total  = 0 ; // total number of questions

	// function init(){
	// 	sessionStorage.setItem('a1','A');
	// 	sessionStorage.setItem('a2','C');
	// 	sessionStorage.setItem('a3','A');
	// 	sessionStorage.setItem('a4','D');
	// 	sessionStorage.setItem('a5','B');
	// 	sessionStorage.setItem('a6','D');

	// }

	function init(){
	//set correct answers
	sessionStorage.setItem('a1','A');
	sessionStorage.setItem('a2','C');
	sessionStorage.setItem('a3','A');
	sessionStorage.setItem('a4','D');
	sessionStorage.setItem('a5','B');
	sessionStorage.setItem('a6','D');
}






$(
	function(){
		//hide all the questions
		$('.questionForm').hide();
		//show the start page
		$('#startPage').show();
		//on submit show the second page

		$('#startPage').on('click','#submit',function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();


			$('#Q1').fadeIn(300);


		});



		$('#Q1 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor('Q1');
			$("#scoreKeeper").text(score);

			$('#Q2').fadeIn(300);

		});

		$('#Q2 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor('Q2');
			$("#scoreKeeper").text(score);
			$('#Q3').fadeIn(300);

		});

		$('#Q3 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor('Q3');
			$("#scoreKeeper").text(score);
			$('#Q4').fadeIn(300);

		});

		$('#Q4 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor('Q4');
			$("#scoreKeeper").text(score);
			$('#Q5').fadeIn(300);

		});
		$('#Q5 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor('Q5');
			$("#scoreKeeper").text(score);
			$('#Q6').fadeIn(300);

		});
		$('#Q6 #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			processor("Q6");
			$("#scoreKeeper").text(score);

		$('#resultPage').fadeIn(300);


		});
		$('#resultPage #submit').click(function(event)
		{
			event.preventDefault();
			$('.questionForm').hide();
			score =0;

			$('#Q1').fadeIn(300);
			return false;


		});



	});
//process the answers
function processor(q){
	if (q === 'Q1'){
		let submitted = $('input[name =Q1]:checked').val();
		if (submitted === sessionStorage.a1){
			score++;

		}

	}
		if (q === 'Q2'){
		let submitted = $('input[name =Q2]:checked').val();
		if (submitted === sessionStorage.a2){
			score++;

		}

	}


	if (q === 'Q3'){
		let submitted = $('input[name =Q3]:checked').val();
		if (submitted === sessionStorage.a3){
			score++;

		}

	}

	if (q === 'Q4'){
		let submitted = $('input[name =Q4]:checked').val();
		if (submitted === sessionStorage.a4){
			score++;

		}

	}

	if (q === 'Q5'){
		let submitted = $('input[name =Q5]:checked').val();
		if (submitted === sessionStorage.a5){
			score++;

		}

	}


	if (q === 'Q6'){
		let submitted = $('input[name =Q6]:checked').val();
		if (submitted === sessionStorage.a6){
			score++;


		}





	}


}
window.addEventListener('load',init,false);




















