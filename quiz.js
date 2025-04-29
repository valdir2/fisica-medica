document.addEventListener('DOMContentLoaded', function() {
    // DOM elements - Login Screen
    const loginScreen = document.getElementById('login-screen');
    const startScreen = document.getElementById('start-screen'); // Added initialization
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    // Ensure login screen is visible on page load
    loginScreen.style.display = 'block';
    startScreen.style.display = 'none';
    
    // Add event listener for login form submission - SINGLE UNIFIED LOGIN CHECK
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
    
        if (username === '') {
            alert('Username cannot be empty.');
            return;
        }
        
        // Authentication logic with proper credential checking
        if ((username === 'user' && password === 'user1') || 
            (username === 'user1' && password === 'user1') ||
            (username === 'admin' && password === 'admin123')) {
            //alert('Login successful!');
            localStorage.setItem('isLoggedIn', 'true'); // Set login status
            loginScreen.style.display = 'none';
            startScreen.style.display = 'block';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
    
    // DOM elements - Quiz Screens
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    // DOM elements - Start screen
    const totalQuestionsStart = document.getElementById('total-questions-start');
    const startBtn = document.getElementById('start-btn');
    
    // DOM elements - Quiz screen
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackElement = document.getElementById('feedback');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const endQuizBtn = document.getElementById('end-quiz-btn');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const correctCounterElement = document.getElementById('correct-counter');
    
    // DOM elements - Results screen
    const finalScoreElement = document.getElementById('final-score');
    const totalQuestionsResult = document.getElementById('total-questions-result');
    const scorePercentageElement = document.getElementById('score-percentage');
    const viewIncorrectBtn = document.getElementById('view-incorrect-btn');
    const retryIncorrectBtn = document.getElementById('retry-incorrect-btn');
    const resetIncorrectBtn = document.getElementById('reset-incorrect-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const incorrectQuestionsList = document.getElementById('incorrect-questions-list');
    const incorrectList = document.getElementById('incorrect-list');
    
    // Quiz state
    let allQuestions = [];
    let questions = [];
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let answeredQuestions = {};
    let incorrectQuestions = [];
    let isRetryMode = false;
    let selectedAnswers = new Set(); // Track currently selected answers
    
    // Helper functions for array comparison
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.sort().toString() === arr2.sort().toString();
    }
    
    function hasCommonElements(arr1, arr2) {
        return arr1.some(item => arr2.includes(item));
    }
    
    // Function to shuffle the questions array
    function shuffleQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Load questions from external file
    function loadQuestions() {
        try {
            // Use the external quizQuestions object
            allQuestions = quizQuestions.questions;

            // Set the initial questions array
            questions = [...allQuestions];

            // Update the total questions count on start screen
            totalQuestionsStart.textContent = questions.length;
            totalQuestionsElement.textContent = questions.length;
            totalQuestionsResult.textContent = questions.length;

            // Return success
            return true;
        } catch (error) {
            console.error('Error loading questions:', error);
            questionText.textContent = 'Error loading questions: ' + error.message;
            return false;
        }
    }
    
    // Start the quiz
    function startQuiz() {
        // Shuffle questions
        questions = shuffleQuestions(questions);
        localStorage.setItem('shuffledQuestions', JSON.stringify(questions)); // Save shuffled sequence
        
        // Hide start screen, show quiz screen
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        
        // Reset quiz state
        currentQuestionIndex = 0;
        correctAnswers = 0;
        correctCounterElement.textContent = correctAnswers;
        
        // Load the first question
        loadQuestion(currentQuestionIndex);
        
        // Setup next button
        nextBtn.textContent = 'Submit Answer';
        nextBtn.disabled = false;
    }
    
    // Display a question
    function loadQuestion(index) {
        const question = questions[index];
        if (!question) return;
        
        // Update question number
        currentQuestionIndex = index;
        localStorage.setItem('currentQuestionIndex', index); // Save progress
        currentQuestionElement.textContent = index + 1;
        
        // Display question text
        questionText.textContent = question.question;
        
        // Clear previous options and feedback
        optionsContainer.innerHTML = '';
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        feedbackElement.style.display = 'none';
        
        // Update Next button text and behavior for new question
        nextBtn.textContent = 'Submit Answer';
        
        // Reset selected answers
        selectedAnswers.clear();
        
        // Create option elements
        for (const [key, value] of Object.entries(question.options)) {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.option = key;
            optionElement.textContent = key + ': ' + value;
            
            // If this question was already answered
            if (answeredQuestions[question.id]) {
                const correctAnswers = question.answer.split(',');
                const userAnswers = answeredQuestions[question.id].split(',');
                
                if (userAnswers.includes(key)) {
                    optionElement.classList.add('selected');
                    optionElement.classList.add(correctAnswers.includes(key) ? 'correct' : 'incorrect');
                } else if (correctAnswers.includes(key)) {
                    optionElement.classList.add('correct');
                }
            }
            
            // Add click handler
            optionElement.addEventListener('click', function() {
                selectOption(this, key, question);
            });
            
            optionsContainer.appendChild(optionElement);
        }
        
        // Update navigation buttons and handle button state
        prevBtn.disabled = index === 0;
        if (answeredQuestions[question.id]) {
            nextBtn.textContent = 'Next';
            nextBtn.disabled = index === questions.length - 1;
        } else {
            nextBtn.textContent = 'Submit Answer';
            nextBtn.disabled = false;
        }
    }
    
    // Handle option selection
    function selectOption(element, selectedKey, question) {
        // Only allow selection if question hasn't been answered
        if (answeredQuestions[question.id]) return;
        
        // Toggle selection
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            selectedAnswers.delete(selectedKey);
        } else {
            element.classList.add('selected');
            selectedAnswers.add(selectedKey);
        }
    }
    
    // Show feedback message
    function validateAnswers(question) {
        const correctAnswersArray = question.answer.split(',');
        const selectedAnswersArray = Array.from(selectedAnswers).sort();
        
        // Check if answers match exactly
        const isFullyCorrect = arraysEqual(selectedAnswersArray, correctAnswersArray);
        
        // Check for partial correctness
        const isPartiallyCorrect = hasCommonElements(selectedAnswersArray, correctAnswersArray);
        
        return { isFullyCorrect, isPartiallyCorrect, selectedAnswersArray };
    }

    function showFeedback(validationResult, question) {
        feedbackElement.className = 'feedback';
        const correctAnswersList = question.answer.split(',');
        const selectedCount = selectedAnswers.size;
        
        if (validationResult.isFullyCorrect) {
            feedbackElement.classList.add('correct');
            feedbackElement.textContent = `Correct! You selected all ${correctAnswersList.length} correct answers.`;
            return true;
        } else if (validationResult.isPartiallyCorrect) {
            feedbackElement.classList.add('incorrect');
            feedbackElement.textContent = `Partially correct. You selected ${selectedCount} answer(s), but the correct answers are: ${question.answer}`;
            return false;
        } else {
            feedbackElement.classList.add('incorrect');
            feedbackElement.textContent = `Incorrect. You selected ${selectedCount} answer(s), but the correct answers are: ${question.answer}`;
            return false;
        }
    }
    
    // Show results
    function showResults() {
        // Hide quiz screen, show results screen
        quizScreen.style.display = 'none';
        resultsScreen.style.display = 'block';
        
        // Update results
        finalScoreElement.textContent = correctAnswers;
        totalQuestionsResult.textContent = questions.length;
        
        // Calculate percentage
        const percentage = Math.round((correctAnswers / questions.length) * 100);
        scorePercentageElement.textContent = percentage;
        
        // Update the visibility of the retry button based on incorrect questions
        retryIncorrectBtn.disabled = incorrectQuestions.length === 0;
        resetIncorrectBtn.disabled = incorrectQuestions.length === 0;
        viewIncorrectBtn.disabled = incorrectQuestions.length === 0;
    }
    
    // Generate list of incorrect questions
    function showIncorrectQuestions() {
        // Clear previous list
        incorrectList.innerHTML = '';
        
        // Show the container
        incorrectQuestionsList.style.display = 'block';
        
        // Check if there are incorrect questions
        if (incorrectQuestions.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No incorrect questions!';
            incorrectList.appendChild(listItem);
            return;
        }
        
        // Add each incorrect question to the list
        for (const id of incorrectQuestions) {
            const question = allQuestions.find(q => q.id === id);
            if (question) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>Question ${question.id}:</strong> ${question.question}<br>
                                      Your answers: ${answeredQuestions[question.id].split(',').join(', ')}<br>
                                      Correct answers: ${question.answer.split(',').join(', ')}`;
                incorrectList.appendChild(listItem);
            }
        }
    }
    
    // Reset incorrect questions
    function resetIncorrectQuestions() {
        // Clear the list of incorrect questions
        incorrectQuestions = [];
        
        // Hide the incorrect questions list
        incorrectQuestionsList.style.display = 'none';
        
        // Disable buttons
        retryIncorrectBtn.disabled = true;
        resetIncorrectBtn.disabled = true;
        viewIncorrectBtn.disabled = true;
    }
    
    // Retry incorrect questions
    function retryIncorrectQuestions() {
        if (incorrectQuestions.length === 0) return;
        
        // Create a filtered array with only incorrect questions
        const retryQuestionsArray = allQuestions.filter(q => incorrectQuestions.includes(q.id));
        
        // Reset the quiz state for retry mode
        questions = shuffleQuestions([...retryQuestionsArray]);
        currentQuestionIndex = 0;
        isRetryMode = true;
        
        // Reset the counter for retry mode
        correctAnswers = 0;
        correctCounterElement.textContent = correctAnswers;
        
        // Update the total questions count
        totalQuestionsElement.textContent = questions.length;
        
        // Clear previous answers for these questions
        for (const q of retryQuestionsArray) {
            delete answeredQuestions[q.id];
        }
        
        // Reset next button
        nextBtn.textContent = 'Submit Answer';
        
        // Hide results screen, show quiz screen
        resultsScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        
        // Load the first question
        loadQuestion(0);
        
        // Update button states
        prevBtn.disabled = true;
        nextBtn.disabled = questions.length <= 1;
    }
    
    // Restart the entire quiz
    function restartQuiz() {
        // Reset all quiz state
        questions = [...allQuestions];
        isRetryMode = false;
        currentQuestionIndex = 0;
        correctAnswers = 0;
        answeredQuestions = {};
        incorrectQuestions = [];
        
        // Hide any open screens and show start screen
        resultsScreen.style.display = 'none';
        quizScreen.style.display = 'none';
        startScreen.style.display = 'block';
        
        // Reset the incorrect questions list
        incorrectQuestionsList.style.display = 'none';
    }
    
    // Event listeners for navigation
    // Event listener for Previous button
    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    });
    nextBtn.addEventListener('click', function() {
        const currentQuestion = questions[currentQuestionIndex];
        
        // If button shows "Submit Answer", handle answer submission
        if (nextBtn.textContent === 'Submit Answer') {
            if (selectedAnswers.size === 0) {
                alert('Please select at least one answer');
                return;
            }
            
            const validationResult = validateAnswers(currentQuestion);
            const isCorrect = showFeedback(validationResult, currentQuestion);
            
            // Store answers and update score
            answeredQuestions[currentQuestion.id] = Array.from(selectedAnswers).join(',');
            
            if (validationResult.isFullyCorrect) {
                correctAnswers++;
                correctCounterElement.textContent = correctAnswers;
                localStorage.setItem('correctAnswers', correctAnswers.toString()); // Save correct answers count
            } else if (!validationResult.isPartiallyCorrect) {
                if (!incorrectQuestions.includes(currentQuestion.id)) {
                    incorrectQuestions.push(currentQuestion.id);
                }
            }
            
            // Show correct/incorrect answers
            const options = document.querySelectorAll('.option');
            const correctAnswersList = currentQuestion.answer.split(',');
            
            options.forEach(opt => {
                const optionKey = opt.dataset.option;
                if (correctAnswersList.includes(optionKey)) {
                    opt.classList.add('correct');
                } else if (selectedAnswers.has(optionKey)) {
                    opt.classList.add('incorrect');
                }
            });
            
            // Change button text to "Next"
            nextBtn.textContent = 'Next';
            feedbackElement.style.display = 'block';
            
            // If this is the last question, disable the Next button
            if (currentQuestionIndex === questions.length - 1) {
                nextBtn.disabled = true;
            }
        }
        // If button shows "Next", move to next question
        else {
            if (currentQuestionIndex < questions.length - 1) {
                loadQuestion(currentQuestionIndex + 1);
            } else {
                showResults();
            }
        }
    });
    
    
    // Event listener for Start Quiz button
    startBtn.addEventListener('click', startQuiz);
    
    // Event listener for End Quiz button
    endQuizBtn.addEventListener('click', showResults);
    
    // Event listener for View Incorrect Questions button
    viewIncorrectBtn.addEventListener('click', showIncorrectQuestions);
    
    // Event listener for Retry Incorrect Questions button
    retryIncorrectBtn.addEventListener('click', retryIncorrectQuestions);
    
    // Event listener for Reset Incorrect Questions button
    resetIncorrectBtn.addEventListener('click', resetIncorrectQuestions);
    
    // Event listener for Restart Quiz button
    restartQuizBtn.addEventListener('click', restartQuiz);
    // Initialize the quiz data
    loadQuestions();
    
    // Check login state on page load
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginScreen.style.display = 'none';
        startScreen.style.display = 'block';
        document.getElementById('logout-btn').style.display = 'inline-block'; // Show logout button
    
        // Restore quiz progress
        const savedQuestions = localStorage.getItem('shuffledQuestions');
        const savedIndex = localStorage.getItem('currentQuestionIndex');
        const savedCorrect = localStorage.getItem('correctAnswers');
        if (savedQuestions && savedIndex !== null) {
            const resume = confirm('Do you want to resume from your last position?');
            if (resume) {
                questions = JSON.parse(savedQuestions);
                currentQuestionIndex = parseInt(savedIndex, 10);
                correctAnswers = savedCorrect ? parseInt(savedCorrect, 10) : 0;
                correctCounterElement.textContent = correctAnswers;
                startScreen.style.display = 'none';
                quizScreen.style.display = 'block';
                loadQuestion(currentQuestionIndex);
            } else {
                localStorage.removeItem('shuffledQuestions');
                localStorage.removeItem('currentQuestionIndex');
            }
        }
    }
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn'); // Clear login status
        localStorage.removeItem('currentQuestionIndex'); // Reset progress
        localStorage.removeItem('correctAnswers'); // Reset correct answers count
        loginScreen.style.display = 'block';
        startScreen.style.display = 'none';
        this.style.display = 'none'; // Hide logout button
    });
});
