const questions = [
  {
    statement: "Компания IKEA продаёт больше фрикаделек, чем самих шкафов и столов.",
    correct: true,
    explanation:
      "Правда! Каждый год в магазинах IKEA продаётся около 2 миллиардов фрикаделек. Еда приносит огромную прибыль, а мебель нужна, чтобы ты проголодался, пока выбираешь шкаф.",
  },
  {
    statement:
      "Apple когда-то продавала одежду — куртки, джинсы и даже кеды с логотипом яблока.",
    correct: true,
    explanation:
      "Правда! В 1986 году Apple запустила линию одежды «The Apple Collection». Были футболки, кепки, сумки и даже часы. Коллекция провалилась и быстро закрылась.",
  },
  {
    statement:
      "Coca-Cola однажды чуть не стала зелёной и продавалась как напиток для офисных работников от стресса.",
    correct: false,
    explanation:
      "Ложь! Зелёная Coke была, но это был «Coca-Cola Life» с натуральным сахаром в зелёной банке. А про стресс — это выдумка. Хотя изначально Coca-Cola продавалась как лекарство от головной боли и усталости, но была коричневой.",
  },
  {
    statement:
      "У McDonald's есть собственный университет в Иллинойсе, где учатся управлять ресторанами.",
    correct: true,
    explanation:
      "Правда! «Университет Гамбургерологии» (Hamburger University) существует с 1961 года. Там менеджеров учат жарить картошку, считать прибыль и делать идеальный бигмак. Выпускники получают диплом, который котируется в мире фастфуда.",
  },
  {
    statement:
      "Компания Red Bull в 1990-х годах продавала энергетик через аптеки как лекарство от похмелья, и это было официально разрешено.",
    correct: false,
    explanation:
      "Ложь! Red Bull действительно продавался в аптеках Таиланда, где его изобрели, но как «тонизирующий напиток», а не от похмелья. В Австрии его продавали как обычный лимонад. Про лекарство от похмелья — народная легенда.",
  },
  {
    statement:
      "Основатель Virgin Group Ричард Брэнсон однажды проиграл пари и должен был отработать стюардессой в своём же авиалайнере в женском платье.",
    correct: true,
    explanation:
      "Правда! Брэнсон поспорил с владельцем авиакомпании AirAsia, что его самолёт быстрее. Проиграл и отработал стюардессой в форме, с бритьём ног и макияжем. Фото есть в интернете!",
  },
  {
    statement: "Компания Netflix сначала продавала книги в конвертах, а фильмы — потом.",
    correct: false,
    explanation:
      "Ложь! Netflix начинал с «почтовой рассылки DVD» в конвертах, а не книг. Люди заказывали фильмы по почте, смотрели и отправляли обратно. Идея родилась, когда основатель задолжал видеопрокату и не захотел платить штраф.",
  },
  {
    statement: "Samsung строит целые города для своих работников прямо вокруг заводов.",
    correct: true,
    explanation:
      "Правда! Samsung строит огромные комплексы с квартирами, школами, больницами и парками прямо рядом с заводами. Самый известный — Samsung Digital City в Корее, где живут десятки тысяч сотрудников и их семей. Всё, чтобы люди не отвлекались от работы.",
  },
  {
    statement:
      "У компании LEGO есть секретное хранилище, где лежат запасные детали абсолютно ко всем наборам, выпущенным за последние 50 лет, и оттуда до сих пор высылают потерянные фигурки.",
    correct: true,
    explanation:
      "Правда! LEGO действительно имеет архив с образцами всех деталей, но они не продаются обычным людям. Однако если потерял фигурку из старого набора, можно написать в поддержку — в некоторых случаях пришлют замену из музейных запасов!",
  },
  {
    statement:
      "Pepsi в Индии продавали в бутылках, которые взрывались на солнце, потому что использовали дешёвое стекло, и компания заплатила компенсации десяткам пострадавших.",
    correct: false,
    explanation:
      "Ложь! В Индии действительно были проблемы с качеством бутылок у местных производителей, но официальных исков к Pepsi за взрывы не было. Это слухи из интернета, которые раздули.",
  },
];

const results = [
  {
    max: 3,
    title: "Любопытный новичок",
    description:
      "Мир больших компаний умеет удивлять. Ты уже сделал главное — начал проверять громкие истории, а не принимать их на веру. Ещё немного практики, и бизнес-легенды перестанут сбивать тебя с толку.",
  },
  {
    max: 6,
    title: "Охотник за фактами",
    description:
      "У тебя хорошая интуиция, но бренды всё ещё способны тебя удивить. Сравнивать версии, искать детали и замечать подвох — именно те навыки, которые развивают инженерно-экономическое мышление.",
  },
  {
    max: 8,
    title: "Бизнес-детектив",
    description:
      "Ты уверенно отличаешь реальные бизнес-истории от красивых выдумок. Аналитичность и здоровый скепсис помогают тебе видеть за громкими легендами решения, риски и экономическую логику.",
  },
  {
    max: 10,
    title: "Мастер фактов",
    description:
      "Тебя сложно провести убедительной бизнес-легендой. Ты внимательно работаешь с информацией, замечаешь противоречия и умеешь доверять логике — отличная база для будущего инженера-экономиста.",
  },
];

const state = {
  current: 0,
  answers: new Array(questions.length).fill(null),
  revealed: new Array(questions.length).fill(false),
};

const introScreen = document.querySelector("#intro-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const quizForm = document.querySelector("#quiz-form");
const questionTitle = document.querySelector("#question-title");
const questionHint = document.querySelector("#question-hint");
const answersContainer = document.querySelector("#answers");
const answerFeedback = document.querySelector("#answer-feedback");
const feedbackMark = document.querySelector("#feedback-mark");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackText = document.querySelector("#feedback-text");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const formMessage = document.querySelector("#form-message");
const progressLabel = document.querySelector("#progress-label");
const progressPercent = document.querySelector("#progress-percent");
const progressTrack = document.querySelector(".progress-track");
const progressValue = document.querySelector("#progress-value");
const restartButton = document.querySelector("#restart-button");
const copyButton = document.querySelector("#copy-button");
const copyStatus = document.querySelector("#copy-status");

function showScreen(screen) {
  [introScreen, quizScreen, resultScreen].forEach((item) => {
    item.hidden = item !== screen;
    item.classList.remove("screen-enter");
  });

  screen.classList.add("screen-enter");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setButtonText(text) {
  nextButton.firstChild.textContent = `${text} `;
}

function renderFeedback() {
  const question = questions[state.current];
  const isCorrect = state.answers[state.current] === question.correct;

  answerFeedback.hidden = false;
  answerFeedback.classList.toggle("is-wrong", !isCorrect);
  feedbackMark.textContent = isCorrect ? "✓" : "!";
  feedbackTitle.textContent = isCorrect ? "Верно!" : "Не совсем";
  feedbackText.textContent = question.explanation;

  answersContainer.querySelectorAll(".answer-option").forEach((option) => {
    const input = option.querySelector("input");
    const value = input.value === "true";
    input.disabled = true;
    option.classList.toggle("is-correct", value === question.correct);
    option.classList.toggle(
      "is-incorrect",
      value === state.answers[state.current] && value !== question.correct,
    );
  });

  setButtonText(state.current === questions.length - 1 ? "Узнать результат" : "Следующий факт");
}

function renderQuestion() {
  const question = questions[state.current];
  const number = state.current + 1;
  const percent = Math.round((number / questions.length) * 100);

  questionTitle.textContent = question.statement;
  questionHint.textContent = "Это правда или ложь? Выбери один вариант.";
  progressLabel.textContent = `Факт ${number} из ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressValue.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(percent));
  backButton.disabled = state.current === 0;
  formMessage.textContent = "";
  answerFeedback.hidden = true;
  answerFeedback.classList.remove("is-wrong");
  setButtonText(state.revealed[state.current] ? "Следующий факт" : "Проверить");

  const choices = [
    { label: "Правда", value: true },
    { label: "Ложь", value: false },
  ];

  answersContainer.className = "answers binary-answers";
  answersContainer.replaceChildren(
    ...choices.map((choice, index) => {
      const label = document.createElement("label");
      const isSelected = state.answers[state.current] === choice.value;
      label.className = `answer-option${isSelected ? " is-selected" : ""}`;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = String(choice.value);
      input.checked = isSelected;

      const letter = document.createElement("span");
      letter.className = "answer-letter";
      letter.textContent = String.fromCharCode(65 + index);

      const text = document.createElement("span");
      text.className = "answer-text";
      text.textContent = choice.label;

      const check = document.createElement("span");
      check.className = "answer-check";
      check.setAttribute("aria-hidden", "true");

      input.addEventListener("change", () => {
        state.answers[state.current] = input.value === "true";
        answersContainer.querySelectorAll(".answer-option").forEach((option) => {
          option.classList.toggle("is-selected", option.contains(input));
        });
        formMessage.textContent = "";
      });

      label.append(input, letter, text, check);
      return label;
    }),
  );

  if (state.revealed[state.current]) renderFeedback();
}

function calculateScore() {
  return questions.reduce(
    (total, question, index) => total + Number(state.answers[index] === question.correct),
    0,
  );
}

function renderResult() {
  const score = calculateScore();
  const percent = Math.round((score / questions.length) * 100);
  const result = results.find((item) => score <= item.max) ?? results.at(-1);

  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#result-description").textContent = result.description;
  document.querySelector("#score-number").textContent = String(score);
  document.querySelector("#score-percent").textContent = `${percent}%`;
  copyStatus.textContent = "";
  showScreen(resultScreen);
}

startButton.addEventListener("click", () => {
  showScreen(quizScreen);
  renderQuestion();
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (state.answers[state.current] === null) {
    formMessage.textContent = "Выбери: правда это или ложь.";
    answersContainer.querySelector("input")?.focus();
    return;
  }

  if (!state.revealed[state.current]) {
    state.revealed[state.current] = true;
    renderFeedback();
    answerFeedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }

  renderResult();
});

backButton.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

restartButton.addEventListener("click", () => {
  state.current = 0;
  state.answers.fill(null);
  state.revealed.fill(false);
  showScreen(quizScreen);
  renderQuestion();
});

copyButton.addEventListener("click", async () => {
  const score = calculateScore();
  const title = document.querySelector("#result-title").textContent;
  const text = `Мой результат бизнес-квиза ИЭФ: «${title}» — ${score} из 10 правильных ответов.`;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован в буфер обмена.";
  } catch {
    copyStatus.textContent = text;
  }
});

