let allQuestions = [
  {
    "id": 1,
    "ques": "What does JS stand for?",
    "options": ["JavaScript", "JavaSource", "JSON Script", "Junction Script"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 2,
    "ques": "Which HTML tag is used to link an external CSS file?",
    "options": ["<style>", "<css>", "<link>", "<script>"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 3,
    "ques": "Which method is used to print output on the console in JS?",
    "options": ["print()", "console.log()", "output()", "echo()"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 4,
    "ques": "CSS stands for?",
    "options": ["Cascading Style Sheets", "Computer Style System", "Creative Style Setup", "Color Styling Sheet"],
    "answer": 0,
    "topic": "CSS"
  },
  {
    "id": 5,
    "ques": "Which keyword is used to declare a constant in JavaScript?",
    "options": ["var", "let", "const", "static"],
    "answer": 2,
    "topic": "JavaScript"
  },
  {
    "id": 6,
    "ques": "Which HTML tag is used for the largest heading?",
    "options": ["<h6>", "<h5>", "<h1>", "<head>"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 7,
    "ques": "Which operator is used for strict equality?",
    "options": ["==", "===", "!=", "="],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 8,
    "ques": "Which CSS property controls text size?",
    "options": ["font-weight", "font-size", "text-style", "text-size"],
    "answer": 1,
    "topic": "CSS"
  },
  {
    "id": 9,
    "ques": "Which function converts JSON string to JS object?",
    "options": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 10,
    "ques": "Which HTML attribute is used to provide alternate text for an image?",
    "options": ["title", "alt", "src", "caption"],
    "answer": 1,
    "topic": "HTML"
  },
  {
    "id": 11,
    "ques": "JavaScript is ______ language.",
    "options": ["Server-side", "Object-based", "Procedural", "Machine language"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 12,
    "ques": "Which CSS property changes text color?",
    "options": ["background-color", "text-color", "color", "font-color"],
    "answer": 2,
    "topic": "CSS"
  },
  {
    "id": 13,
    "ques": "Which built-in method removes the last element from an array?",
    "options": ["pop()", "push()", "shift()", "delete()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 14,
    "ques": "Which HTML tag is used to create a list?",
    "options": ["<ul>", "<ol>", "<li>", "All of the above"],
    "answer": 3,
    "topic": "HTML"
  },
  {
    "id": 15,
    "ques": "Which loop runs at least once?",
    "options": ["for", "while", "do-while", "forEach"],
    "answer": 2,
    "topic": "JavaScript"
  },
  {
    "id": 16,
    "ques": "Which CSS property makes text bold?",
    "options": ["font-style", "bold", "text-bold", "font-weight"],
    "answer": 3,
    "topic": "CSS"
  },
  {
    "id": 17,
    "ques": "How do you write a comment in JavaScript?",
    "options": ["<!--comment-->", "// comment", "/* comment */", "Both B and C"],
    "answer": 3,
    "topic": "JavaScript"
  },
  {
    "id": 18,
    "ques": "What does DOM stand for?",
    "options": ["Document Object Model", "Data Object Model", "Document Oriented Module", "Design Object Model"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 19,
    "ques": "Which attribute is used in HTML to define inline styles?",
    "options": ["class", "id", "style", "css"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 20,
    "ques": "Which method adds new elements at the end of array?",
    "options": ["push()", "pop()", "add()", "insert()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 21,
    "ques": "Which tag is used for a table row in HTML?",
    "options": ["<td>", "<th>", "<tr>", "<table>"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 22,
    "ques": "Which symbol is used for comments in CSS?",
    "options": ["//", "#", "<!-- -->", "/* */"],
    "answer": 3,
    "topic": "CSS"
  },
  {
    "id": 23,
    "ques": "Which of the following is not a JavaScript data type?",
    "options": ["String", "Number", "Boolean", "Float"],
    "answer": 3,
    "topic": "JavaScript"
  },
  {
    "id": 24,
    "ques": "What does NaN represent?",
    "options": ["No assigned number", "Not a Number", "Negative number", "New assigned number"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 25,
    "ques": "Which CSS property is used for spacing inside a box?",
    "options": ["padding", "margin", "border", "space"],
    "answer": 0,
    "topic": "CSS"
  },
  {
    "id": 26,
    "ques": "Which HTML tag is used to embed JavaScript?",
    "options": ["<javascript>", "<js>", "<script>", "<code>"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 27,
    "ques": "Which method is used to convert JS object to JSON string?",
    "options": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "object.toJSON()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 28,
    "ques": "Which CSS unit is relative to root font size?",
    "options": ["px", "em", "rem", "%"],
    "answer": 2,
    "topic": "CSS"
  },
  {
    "id": 29,
    "ques": "Inside which HTML element do we put JavaScript?",
    "options": ["<javascript>", "<js>", "<script>", "<code>"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 30,
    "ques": "Which operator returns remainder in JS?",
    "options": ["%", "/", "//", "mod"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 31,
    "ques": "Which property makes an element's text uppercase?",
    "options": ["text-transform", "font-case", "upper", "text-uppercase"],
    "answer": 0,
    "topic": "CSS"
  },
  {
    "id": 32,
    "ques": "Which method returns the length of an array?",
    "options": ["size()", "length()", "count()", "index()"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 33,
    "ques": "Which tag is used for a hyperlink?",
    "options": ["<a>", "<link>", "<href>", "<url>"],
    "answer": 0,
    "topic": "HTML"
  },
  {
    "id": 34,
    "ques": "Which keyword is used to declare a variable in JS?",
    "options": ["int", "let", "var", "Both B and C"],
    "answer": 3,
    "topic": "JavaScript"
  },
  {
    "id": 35,
    "ques": "Which HTML tag is used to insert an image?",
    "options": ["<img>", "<image>", "<src>", "<pic>"],
    "answer": 0,
    "topic": "HTML"
  },
  {
    "id": 36,
    "ques": "Which JS method is used to add elements at the beginning?",
    "options": ["push()", "unshift()", "addFirst()", "prepend()"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 37,
    "ques": "Which CSS property sets the background color?",
    "options": ["color", "background", "bgcolor", "background-color"],
    "answer": 3,
    "topic": "CSS"
  },
  {
    "id": 38,
    "ques": "Which JavaScript function finds the largest number?",
    "options": ["Math.max()", "Math.big()", "Math.large()", "Max()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 39,
    "ques": "What does HTML stand for?",
    "options": ["HyperText Makeup Language", "Hyper Transfer Markup Language", "HyperText Markup Language", "High Text Marking Language"],
    "answer": 2,
    "topic": "HTML"
  },
  {
    "id": 40,
    "ques": "Which tag is used for line breaks?",
    "options": ["<br>", "<lb>", "<break>", "<line>"],
    "answer": 0,
    "topic": "HTML"
  },
  {
    "id": 41,
    "ques": "Which event triggers when a user clicks on an element?",
    "options": ["onmouse", "onclick", "onpress", "onhover"],
    "answer": 1,
    "topic": "JavaScript"
  },
  {
    "id": 42,
    "ques": "Which CSS property gives space outside the border?",
    "options": ["padding", "margin", "outline", "border"],
    "answer": 1,
    "topic": "CSS"
  },
  {
    "id": 43,
    "ques": "Which method removes the first element of an array?",
    "options": ["shift()", "pop()", "remove()", "delete()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 44,
    "ques": "Where is inline CSS written?",
    "options": ["Inside <style>", "Inside HTML tag", "Inside external CSS file", "Inside JS file"],
    "answer": 1,
    "topic": "CSS"
  },
  {
    "id": 45,
    "ques": "Which symbol is used to create an ID selector in CSS?",
    "options": ["#", ".", "@", "$"],
    "answer": 0,
    "topic": "CSS"
  },
  {
    "id": 46,
    "ques": "JavaScript can be used for?",
    "options": ["Frontend", "Backend", "Both frontend and backend", "None"],
    "answer": 2,
    "topic": "JavaScript"
  },
  {
    "id": 47,
    "ques": "Which HTML tag is used to create a button?",
    "options": ["<btn>", "<button>", "<input>", "<click>"],
    "answer": 1,
    "topic": "HTML"
  },
  {
    "id": 48,
    "ques": "Which array method combines array elements into a string?",
    "options": ["join()", "toString()", "concat()", "merge()"],
    "answer": 0,
    "topic": "JavaScript"
  },
  {
    "id": 49,
    "ques": "Which CSS property is used to make corners rounded?",
    "options": ["border-circle", "corner-radius", "radius", "border-radius"],
    "answer": 3,
    "topic": "CSS"
  },
  {
    "id": 50,
    "ques": "Which tag is used to create input fields?",
    "options": ["<input>", "<textbox>", "<field>", "<enter>"],
    "answer": 0,
    "topic": "HTML"
  }
];

let questions = [];     // 15 random
let index = 0;
let userResponse = [];

function startTest() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");

    // Pick 15 random questions
    questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);
    showQuestion();
}

function showQuestion() {
    let q = questions[index];
    document.getElementById("question-title").innerText = `Q${index + 1}. ${q.ques}`;

    let optDiv = document.getElementById("options");
    optDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        if (userResponse[index] && userResponse[index].candidate_ans === i) {
            btn.classList.add("selected");
        }
        btn.onclick = () => selectOption(i);
        optDiv.appendChild(btn);
    });
}

function selectOption(optIndex) {
    let isCorrect = optIndex === questions[index].answer;
    userResponse[index] = { ques_no: questions[index].id, candidate_ans: optIndex, isCorrect };
    showQuestion();
}

function nextQuestion() {
    if (index < questions.length - 1) { index++; showQuestion(); }
}

function prevQuestion() {
    if (index > 0) { index--; showQuestion(); }
}

function submitTest() {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");

    let score = userResponse.filter(x => x?.isCorrect).length;
    document.getElementById("score").innerText = score;
    displayAnswers();
}

function displayAnswers() {
    let listDiv = document.getElementById("answers-list");
    listDiv.innerHTML = "";

    questions.forEach(q => {
        let div = document.createElement("div");
        let userAns = userResponse.find(u => u.ques_no === q.id)?.candidate_ans;
        div.innerHTML = `
            <p><strong>${q.ques}</strong></p>
            <p>Correct Answer: <span style="color:green">${q.options[q.answer]}</span></p>
            <p>Your Answer: <span style="color:${userAns === q.answer ? "green":"red"}">${userAns !== undefined ? q.options[userAns] : "Not answered"}</span></p>
            <hr>
        `;
        listDiv.appendChild(div);
    });
}
