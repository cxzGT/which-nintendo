const questions = [
  {
    question: "How important is portability to you?",
    answers: [
      { text: "Very important", models: ["Lite Switch", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "Somewhat important", models: ["Lite Switch", "Regular Switch", "OLED Switch", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "Not important", models: ["Lite Switch", "Regular Switch", "OLED Switch", "Wii", "Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "I'm not sure", models: [] }
    ]
  },
  {
    question: "Which do you prefer?",
    answers: [
      { text: "Gaming console that stays home", models: ["Wii", "Wii U", "Regular Switch", "OLED Switch"] },
      { text: "Portable handheld", models: ["Lite Switch", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "A mix of both", models: ["Lite Switch", "Regular Switch", "OLED Switch"] }
    ]
  },
  {
    question: "Do you care about a new, huge, updatable and changable game library?",
    answers: [
      { text: "Yes, a lot", models: ["Wii U", "Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "I will only play/emulate old games", models: ["Wii", "Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "I'm not sure", models: [] }
    ]
  },
  {
    question: "Are you a...",
    answers: [
      { text: "Casual gamer", models: ["Wii", "Lite Switch", "Regular Switch", "3DS", "New 3DS"] },
      { text: "Normal gamer", models: ["Wii U", "Regular Switch", "New 3DS", "New 3DS XL"] },
      { text: "Ultimate gamer", models: ["Wii U", "OLED Switch"] },
      { text: "I'm not sure", models: [] }
    ]
  },
  {
    question: "Would you mod/hack your console/handheld?",
    answers: [
      { text: "Yes", models: ["Wii", "Wii U", "3DS"] },
      { text: "No", models: ["Lite Switch", "Regular Switch", "OLED Switch"] }
    ]
  },
  {
    question: "Do you want a console/handheld that is still in support?",
    answers: [
      { text: "Yes", models: ["Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "No", models: ["Wii", "Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "3DS XL", "New 3DS XL"] }
    ]
  },
  {
    question: "How would you play?",
    answers: [
      { text: "On the TV", models: ["Wii", "Wii U", "Regular Switch", "OLED Switch"] },
      { text: "On the thing itself", models: ["Lite Switch", "Regular Switch", "OLED Switch", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "Both", models: ["Wii U", "Regular Switch", "OLED Switch"] }
    ]
  },
  {
    question: "Which library do you care about most?",
    answers: [
      { text: "DS + 3DS games", models: ["DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL", "Wii U"] },
      { text: "Wii games", models: ["Wii", "Wii U"] },
      { text: "Wii U + Switch games", models: ["Wii U", "Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "Everything except Switch games", models: ["Wii U"] },
      { text: "I'm not sure", models: [] }
    ]
  },
  {
    question: "How would you play?",
    answers: [
      { text: "With friends, online", models: ["Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "With friends, in one room on one console", models: ["Wii", "Regular Switch", "OLED Switch"] },
      { text: "alone :(", models: ["Lite Switch", "Wii", "Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "New 3DS XL"] },
      { text: "I'm not sure", models: [] } // Skip option
    ]
  },
  {
    question: "Are you planning to spend ANY money on games or other online services?",
    answers: [
      { text: "Yes", models: ["Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "No", models: ["Wii", "Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "3DS XL", "New 3DS", "New 3DS XL"] }
    ]
  },
  {
    question: "Out of the DS + 3DS models, which screen would you prefer?",
    answers: [
      { text: "The standard DS screen", models: ["DS", "DSi", "3DS"] },
      { text: "A slightly bigger screen", models: ["New 3DS", "DS Lite"] },
      { text: "The XL screen", models: ["DSi XL", "3DS XL", "New 3DS XL"] },
      { text: "I'm not sure", models: [] } // Skip option
    ]
  },
  {
    question: "Out of the Switch models, which screen would you prefer?",
    answers: [
      { text: "The standard screen", models: ["Lite Switch", "Regular Switch"] },
      { text: "The bigger and brighter screen", models: ["OLED Switch"] }
    ]
  },
  {
    question: "What would you genuinely get?",
    answers: [
      { text: "A new console (and handheld in-one) with support and a lot of games", models: ["Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "An almost-old console with a great library and great modding/hacking support", models: ["Wii U"] },
      { text: "Old handhelds with a library specifically built for the handheld itself", models: ["DS", "DS Lite", "DSi", "3DS", "New 3DS", "3DS XL", "New 3DS XL"] }
    ]
  },
  {
    question: "A portable handheld with less or more games?",
    answers: [
      { text: "Less games for a lower price", models: ["DS", "DS Lite", "DSi", "DSi XL", "3DS", "3DS XL"] },
      { text: "More games for a higher price", models: ["New 3DS", "New 3DS XL"] }
    ]
  },
  {
    question: "Do you want a stylus in your console/handheld?",
    answers: [
      { text: "Yes", models: ["Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "3DS XL", "New 3DS", "New 3DS XL"] },
      { text: "No", models: ["Lite Switch", "Regular Switch", "OLED Switch"] }
    ]
  },
  {
    question: "What do you prefer?",
    answers: [
      { text: "Playing with a motion controller", models: ["Wii", "Regular Switch", "OLED Switch"] },
      { text: "Playing with a regular controller", models: ["Wii U", "Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "I'm not sure", models: [] } // Skip option
    ]
  },
  {
    question: "One screen or two?",
    answers: [
      { text: "One screen", models: ["Wii", "Lite Switch", "Regular Switch", "OLED Switch"] },
      { text: "Two screens", models: ["Wii U", "DS", "DS Lite", "DSi", "DSi XL", "3DS", "New 3DS", "3DS XL", "New 3DS XL"] },
      { text: "I'm not sure", models: [] } // Skip option
    ]
  },
  {
    question: "What model would you get?",
    answers: [
      { text: "Standard model", models: ["Wii", "Regular Switch", "DS"] },
      { text: "Updated standard model", models: ["Wii U", "DS Lite", "DSi", "3DS", "3DS XL"] },
      { text: "Ultimate/new model", models: ["Wii U", "New 3DS", "New 3DS XL", "OLED Switch"] }
    ]
  },
  {
    question: "Alrighties, you ready for the answer?",
    answers: [
      { text: "Yep!", models: [] },
      { text: "yes", models: [] },
      { text: "Yuh uh", models: [] },
      { text: "Yeah", models: [] },
      { text: "ok", models: [] }
    ]
  }
];

  
  let currentQuestionIndex = 0;
  const userChoices = [];
  
  function startQuiz() {
    document.getElementById('landing-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('all-results').classList.add('hidden');
    document.getElementById('show-all-button').classList.remove('hidden');
    currentQuestionIndex = 0;
    userChoices.length = 0; // Clear previous choices
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionCounterElement = document.getElementById('question-counter');

    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
  
    questionCounterElement.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
  
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    userChoices.push(...answer.models);
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showResult();
    }

    console.log(`Question ${currentQuestionIndex}: chosen model is the ${answer.models}`)
  }
  
  function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
  
    const results = calculateResult();
    document.getElementById('first-place').innerText = results[0] || "No clear 1st place";
    document.getElementById('second-place').innerText = results[1] || "No clear 2nd place";
    document.getElementById('third-place').innerText = results[2] || "No clear 3rd place";
    document.getElementById('fourth-place').innerText = results[3] || "No clear 4th place";
    document.getElementById('fifth-place').innerText = results[4] || "No clear 5th place";
    document.getElementById('sixth-place').innerText = results[5] || "No clear 6th place";
    document.getElementById('seventh-place').innerText = results[6] || "No clear 7th place";
    document.getElementById('eighth-place').innerText = results[7] || "No clear 8th place";
    document.getElementById('ninth-place').innerText = results[8] || "No clear 9th place";
    document.getElementById('tenth-place').innerText = results[9] || "No clear 10th place";
    document.getElementById('eleventh-place').innerText = results[10] || "No clear 11th place";
    document.getElementById('twelveth-place').innerText = results[11] || "No clear 12th place";
    document.getElementById('thirteenth-place').innerText = results[12] || "No clear 13th place";

    document.getElementById('first-place').innerText = `${results [0]}`;
  document.getElementById('model-image').src = `./assets/${results [0]}.png`; // Update the image source
  }
  
  function showAllResults() {
    document.getElementById('all-results').classList.remove('hidden');
    document.getElementById('show-all-button').classList.add('hidden');
  }
  
  function calculateResult() {
    const modelCounts = userChoices.reduce((acc, model) => {
      acc[model] = (acc[model] || 0) + 1;
      return acc;
    }, {});
  
    const sortedModels = Object.keys(modelCounts).sort((a, b) => modelCounts[b] - modelCounts[a]);
  
    return sortedModels;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
  });