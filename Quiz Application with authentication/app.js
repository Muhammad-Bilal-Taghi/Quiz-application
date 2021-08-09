
var obj = [
    { 
        question: 'What is the full form of IMF?',
        a: 'International Monetry Fund?',
        b: 'Internal monetry fund',
        c: "Internal money fund ",
        d: 'International money fund',
        ans: 'ans1'
    },
    {
        question: 'what is Accounting?',
        a: 'transaction',
        b: 'Mathematics',
        c: "Art",
        d: 'None of above',
        ans: 'ans3'
    },
    {
        question: 'What is FATF',
        a: 'Financial Auction Task Force',
        b: 'Financial Action Task Force',
        c: "Financial Arthematic Term Force",
        d: 'None of these',
        ans: 'ans2'
    },
    {
        question: 'What is the first president of America?',
        a: 'Donald Trump',
        b: 'Jobaiden',
        c: "Burack Obama",
        d: 'Abraham Lincolin',
        ans: 'ans4'
    },
]



var question = document.querySelector('#question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var submit = document.querySelector('#submit');
var answer = document.querySelectorAll('.ans');
var showScore = document.querySelector('.scores')
var again = document.querySelector('.again')
var questions_div = document.querySelector('.questions-div')
// console.log(answer)
let questionCount = 0;
let score = 0;

function loadWindow() {
    var questionList = obj[questionCount];
    // console.log(questionList)
    question.innerText = questionList.question
    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}



loadWindow()

function getcheckAnswer() {
    var answers;
    answer.forEach(function (currElement) {
        if (currElement.checked) {
            answers = currElement.id
            
        }
    });
    return answers
}
function deselect() {
    answer.forEach(function (disabled) {
        disabled.checked = false;
    });
}


submit.addEventListener('click', function () {
    let checkAnswer = getcheckAnswer();
    // console.log(checkAnswer)

    if (checkAnswer === obj[questionCount].ans) {
        score++
    }
    deselect()
    questionCount++
    if (questionCount < obj.length) {
        loadWindow()
    } else {
        showScore.innerHTML = 'your score is' + ' ' + score + ' / ' + obj.length;
        var again = document.querySelector('.again')
        again.innerHTML = "<button onclick='location.reload()'>AGAIN</button>"
        questions_div.innerHTML = ''
    }
});





