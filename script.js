const store = {
	'questions': [{
		'question': 'What does Ariel collect?',
		'answers': ['Sea shells', 'eels', 'human items', 'seaweed'],
		'correct': 2
	},
	{
		'question': 'How many stepsisters does cinderella have?',
		'answers': ['Two', 'Three', 'Eight', 'one'],
		'correct': 0
	},
	{
		'question': 'What is the name of the mouse Cinderella rescues?',
		'answers': ['Vinny', 'Chad', 'Gus', 'Jackie'],
		'correct': 2
	},
	{
		'question': 'What was Dory\'s first line in the movie Finding Dory?',
		'answers': ['Look Out', 'Hi, I am Dory', 'Just keep swimming', 'Hey there Mr. Grumpy Grills'],
		'correct': 2
	},
	{
		'question': 'What does Ariel collect?',
		'answers': ['Sea shells', 'eels', 'human items', 'seaweed'],
		'correct': 2
	},

	{
		'question': 'What is the name of Micky Mouse\'s dog?',
		'answers': ['Mars', 'Neptune', 'Goofy', 'Pluto'],
		'correct': 3
	}
	],
	'score': 0,
	'currentIndex': 0,
	'isStarted': false
};
function generateStartPageHTML() {
	return ` <div id = 'container'>
		<header role =banner class ='startQuiz' >
		<h1> Welcome to the  Disney movies Quiz!! </h1>
	</header>
		<div class = 'start'>
		<p > How well do you know your Disney movies?</p><hr>
		<button class='start-quiz'>START QUIZ</button>
		</div>
		</div>`;
}
function handleStartQuiz() {
	console.log("start handle clicked");
	$('.app').on('click' ,'.start-quiz', function () {
		store.isStarted = true;
		store.currentIndex = 0;
		store.score = 0;
		render();
	});
}

function handleQuestionSubmit() {
	$('.app').on('submit', ".questionForm",function (event) {

		event.preventDefault();
		console.log("nextQuestion clicked");
		store.currentIndex = store.currentIndex + 1;	
		render();

	})
}
function render() {
	console.log("Render was called")
	const isFinished = store.currentIndex >= store.questions.length;
	if(!store.isStarted){
		renderStartPage();
	}
	else if (isFinished) {
		renderResult();
	}
	else  {
		renderQuestion();

	}

	
}
function renderStartPage() {
	$(".app").html(generateStartPageHTML());

}
function renderQuestion() {

	let currentQuestion = store.questions[store.currentIndex];

	$('.app').html(generateQuestionHTML(currentQuestion));

}
function renderResult(){
	$('.app').html(generateResultHTML());
}



function generateQuestionHTML(question) {
	$('.app').html(`<div class="container">
				<header>
				<div class ="pull-left">The Disney Quiz</div>
				<div class ="pull-right">By - Meghana J.</div>
				</header>
				<form action="post" class = "questionForm" >

						<h3> ${question.question}</h3>
						<ul>
						${question.answers.map(function (answer, index) {
			return `<li> <input id="ans-${index}" type="radio" name ='answers'  value = '${index}' required > 
							<label for="ans-${index}">${answer}</label></input></li>`;
		}).join('')}
						
						</ul>

						<button id ='submitButton' type = "submit" > Submit </button>
					</form>
			</form>
			 <p id="scoretracker">Your score is <span id = 'currentScore'> </span> ${store.score} / 6 </p>

			</div>`
	)
};

function generateResultHTML(){
	return (`<h1>Your score is  ${store.score} </h1>
	<p><button id ='restart' type = "submit" > Restart </button></p>`);
}







function loadAnswers() {
}
function displayCurrentScore() {
}
function displayResults() { }

function main() {
	handleStartQuiz();
	handleQuestionSubmit();
	render();
}
$(
	main
);

