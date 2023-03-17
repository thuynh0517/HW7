// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const contentDiv = document.getElementById("content");

// Loop through each question in the list
questions.forEach((question) => {
// Create a new question div
const questionDiv = document.createElement("div");

// Create a question statement element
const statementElem = document.createElement("p");
statementElem.textContent = question.statement;
questionDiv.appendChild(statementElem);

// Create a "Show answer" button
const showAnswerBtn = document.createElement("button");
showAnswerBtn.textContent = "Show the answer";

// Add an event listener to the "Show answer" button
showAnswerBtn.addEventListener("click", () => {
  // Remove the button
  questionDiv.removeChild(showAnswerBtn);

  // Add the answer element
  const answerElem = document.createElement("p");
  answerElem.textContent = question.answer;
  questionDiv.appendChild(answerElem);
});

// Add the "Show answer" button to the question div
questionDiv.appendChild(showAnswerBtn);

// Add the question div to the content div
contentDiv.appendChild(questionDiv);
});