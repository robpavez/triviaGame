let rightAns,
rightNumber = 0,
falseNumber = 0;

document.addEventListener('DOMContentLoaded', function(){
    addQuestion();

    eventListeners();
});
    eventListeners = () =>{

    }

addQuestion = () =>{
    const url ='https://opentdb.com/api.php?amount=10&category=25';
    fetch(url)
    .then(data=>data.json())
    .then(result=> showQuestion(result.results));
}

showQuestion = questions => {
    const questionHTML = document.createElement('div');
    questionHTML.classList.add('col-12');

    questions.forEach(question => {
        rightAns = question.correct_answer;

        let possibleAnswers = question.incorrect_answers;
        possibleAnswers.splice(Math.floor(Math.random() * 3), 0, rightAns);
    // })
        questionHTML.innerHTML=`<div class="row justify-content-between heading">
        <p class="category">Category:${questions.category}</p>
        <div class="scores">
        <span class="badge badge-primary">${rigthNumber}</span>
        <span class="badge badge-warning">${falseNumber}</span>
        </div>
        <div>
        <h2 class="text-center">${question.question};`
    

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('questions', 'row', 'justify-content-around', 'mt-5');

    possibleAnswers.forEach(answer => {
        const answerHTML = document.createElement('li');
        answerHTML.classList.add('col-12', 'col-md-5');
        answerHTML.textContent = answer;


        answerDiv.appendChild(answerHTML);
    })        
    questionHTML.appendChild(answerDiv);

    document.querySelector('#app').appendChild(questionHTML);

    }
selectorAnswer = (e) => {

    e.target.classList.add('active')

}
    })
}