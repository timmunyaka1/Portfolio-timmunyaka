(function() {
    // Functions
    function buildQuiz() {

        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {


                const answers = [];


                for (letter in currentQuestion.answers) {


                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }


                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );


        quizContainer.innerHTML = output.join('');
    }

    function showResults() {


        const answerContainers = quizContainer.querySelectorAll('.answers');


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {


            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {

                answerContainers[questionNumber].style.color = 'red';
            }
        });


        resultsContainer.innerHTML = `<h1> You got ${numCorrect} out of ${myQuestions.length}</h1>`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: " <b>Question 1 of 20</b> <br/> Where was David born? ",
            answers: {
                a: "Beersheba",
                b: "Jerusalem",
                c: "Bethlehem",
                d: "Bethany",
            },
            correctAnswer: "c"
        },
        {
            question: " <b>Question 2 of 20</b> <br/>How old was jesus when He finished his mission?  ",
            answers: {
                a: "33",
                b: "30",
                c: "31",
                d: "32"
            },
            correctAnswer: "a"
        },
        {
            question: "<b>Question 3 of 20</b> <br/> What was Noah’s ark made out of?",
            answers: {
                a: "Cedar",
                b: "Raff wood",
                c: "Mahogany",
                d: "Gopher wood"
            },
            correctAnswer: "d"
        },
        {
            question: " <b>Question 4 of 20</b> <br/>Which book of the Bible records many of the hymns David wrote?",
            answers: {
                a: "Songs of Solomon",
                b: "Psalms",
                c: "1 Kings",
                d: "2 Kings"
            },
            correctAnswer: "b"
        },
        {
            question: " <b>Question 5 of 20</b> <br/>Who was David’s father? ",
            answers: {
                a: "Torah",
                b: "Saul",
                c: "Jesse",
                d: "Eli"
            },
            correctAnswer: "c"
        },
        {
            question: "<b>Question 6 of 20</b> <br/> On what island was John when he was given the vision of Revelation?  ",
            answers: {
                a: "Tarshish",
                b: "Cyprus",
                c: "Patmos",
                d: "Layes"
            },
            correctAnswer: "c"
        },
        {
            question: "<b>Question 7 of 20</b> <br/> What did the Queen of Sheba give to Solomon? ",
            answers: {
                a: "120 talents of gold, spices and precious stones",
                b: "240 grams of rose and fine linen",
                c: "30 changes of fine linen and silver",
                d: "spices and fine perfumes"
            },
            correctAnswer: "a"
        },
        {
            question: "<b>Question 8 of 20</b> <br/> where was jesus born?  ",
            answers: {
                a: "egypt",
                b: "canaan",
                c: "israel",
                d: "Bethlehem"
            },
            correctAnswer: "d"
        },
        {
            question: " <b>Question 9 of 20</b> <br/>Who were the first two disciples to be called?  ",
            answers: {
                a: "James and John",
                b: "Simon Peter and Andrew",
                c: "Thomas and Andrew",
                d: "Judas and James"
            },
            correctAnswer: "b"
        },
        {
            question: "<b>Question 10 of 20</b> <br/> How many sons did Gideon have?  ",
            answers: {
                a: "Twenty-five",
                b: "Thirty-five",
                c: "Seventy-five",
                d: "Seventy"
            },
            correctAnswer: "d"
        },
        {
            question: " <b>Question 11 of 20</b> <br/>Who came into Galilee preaching the Kingdom of God?  ",
            answers: {
                a: "Jesus",
                b: "Paul",
                c: "Philip",
                d: "Peter"
            },
            correctAnswer: "a"
        },
        {
            question: "<b>Question 12 of 20</b> <br/> What was the name of Hagar’s son? ",
            answers: {
                a: "Isaac",
                b: "Esau",
                c: "Seth",
                d: "Ishmael"
            },
            correctAnswer: "d"
        },
        {
            question: "<b>Question 13 of 20</b> <br/> What animal spoke to Balaam?  ",
            answers: {
                a: "cow",
                b: "Lion",
                c: "Donkey",
                d: "Horse"
            },
            correctAnswer: "c"
        },
        {
            question: "<b>Question 14 of 20</b> <br/> Which prophet anointed David as king?  ",
            answers: {
                a: "Nathan",
                b: "Samuel",
                c: "Micah",
                d: "Hosea"
            },
            correctAnswer: "b"
        },
        {
            question: "<b>Question 15 of 20</b> <br/> Who was Paul with when he wrote the letter to Philemon?   ",
            answers: {
                a: "Titus",
                b: "James",
                c: "John Mark",
                d: "Timothy"
            },
            correctAnswer: "d"
        },
        {
            question: "<b>Question 16 of 20</b> <br/> Which is the shortest Psalm?   ",
            answers: {
                a: "Psalm 150",
                b: "Psalm 100",
                c: "Psalm 117",
                d: "Psalm 87"
            },
            correctAnswer: "c"
        },
        {
            question: " <b>Question 17 of 20</b> <br/>One of the ten plagues of Egypt was the plague of boils, but which number was it? ",
            answers: {
                a: "Third",
                b: "Seventh",
                c: "Fifth",
                d: "Sixth"
            },
            correctAnswer: "d"
        },
        {
            question: "<b>Question 18 of 20</b> <br/> What relationship was Ruth to Naomi?  ",
            answers: {
                a: "Daughter",
                b: "Niece",
                c: "Daughter-in-law",
                d: "Sister-in-law"
            },
            correctAnswer: "c"
        },
        {
            question: "<b>Question 19 of 20</b> <br/> What was Jesus’ first miracle?  ",
            answers: {
                a: "Changing water into wine",
                b: "Curing the nobleman's son",
                c: "The great haul of fishes",
                d: "Curing Peter's mother-in-law"
            },
            correctAnswer: "a"
        },
        {
            question: "<b>Question 20 of 20</b> <br/> Which of David’s sons rebelled against him?  ",
            answers: {
                a: "Adonijah",
                b: "Amnon",
                c: "Absalom",
                d: "Solomon"
            },
            correctAnswer: "c"
        },
    ];



    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();