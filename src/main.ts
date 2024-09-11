import "./style.css";

// Url-based navigation to a question works, e.g.
// http://localhost:5173/?#q2

const questionCount = 6;
let currentQuestion = 0;

const setActiveQuestion = (index: number) => {
  const questions = document.querySelectorAll<HTMLDivElement>(".question");
  questions.forEach((q) => {
    q.classList.remove("active");
  });

  questions[index].classList.add("active");
};

const nextQuestion = () => {
  const scroller = document.querySelector<HTMLDivElement>(".q-scroller")!;

  currentQuestion += 1;
  if (currentQuestion > questionCount - 1) {
    currentQuestion = questionCount - 1;
  }

  scroller.style.transform = `translateX(-${currentQuestion * 100}vw)`;
  setActiveQuestion(currentQuestion);
};

const prevQuestion = () => {
  const scroller = document.querySelector<HTMLDivElement>(".q-scroller")!;

  currentQuestion -= 1;
  if (currentQuestion < 0) {
    currentQuestion = 0;
  }

  scroller.style.transform = `translateX(-${currentQuestion * 100}vw)`;
  setActiveQuestion(currentQuestion);
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Scroller</h1>

    <div class="q-container">
      <div class="q-scroller">
        <div id="q1" class="q-scroller__content">
          <div class="question">
            <label for="question1">Question 1</label>
            <input type="text" id="question1" name="q1" />
          </div>
        </div>
        <div id="q2" class="q-scroller__content">
          <div class="question">
            <label for="question2">Question 2</label>
            <input type="text" id="question2" name="q2" />
          </div>
        </div>
        <div id="q3" class="q-scroller__content">
          <div class="question">
            <label for="question3">Question 3</label>
            <input type="text" id="question3" name="q3" />
          </div>
        </div>
        <div id="q4" class="q-scroller__content">
          <div class="question">
            <label for="question4">Question 4</label>
            <input type="text" id="question4" name="q4" />
          </div>
        </div>
        <div id="q5" class="q-scroller__content">
          <div class="question">
            <label for="question5">Question 5</label>
            <input type="text" id="question5" name="q5" />
          </div>
        </div>
        <div id="q6" class="q-scroller__content">
          <div class="question">
            <label for="question6">Question 6</label>
            <input type="text" id="question6" name="q6" />
          </div>
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <button id="back" class="btn">Back</button>
      <button id="next" class="btn btn-primary">Next </button>
    </div>
  </div>
`;

// Set current question to active
setActiveQuestion(currentQuestion);

document
  .querySelector<HTMLButtonElement>("#next")!
  .addEventListener("click", nextQuestion);

document
  .querySelector<HTMLButtonElement>("#back")!
  .addEventListener("click", prevQuestion);
