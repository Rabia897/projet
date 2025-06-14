var but1 = document.getElementById("click");
var but2 = document.getElementById("surprise");
var but3 = document.getElementById("suivant");
var but4 = document.getElementById("avant_final");
var text = document.getElementById("metin");
var gif = document.getElementById("gifim");
var doggie = document.getElementById("doggie");
var soz = document.getElementById("sozler");
var mario_div = document.getElementById("mario");
doggie.className = "gif_style";
gif.className = "gif_style";
gif.style.display = "block";
function create_sound() {
    var ilk_ses = document.createElement("audio");
    ilk_ses.src = "mario.mp3";
    ilk_ses.currentTime = 0.27;
    ilk_ses.play();
    mario_div.appendChild(ilk_ses);
}
function changer_premier() {
    create_sound();
    but1.style.display = "none";
    gif.style.display = "none";
    document.body.style.backgroundColor = "#fae5d3";
    text.style.display = "inline-block";
    text.className = "metin_style";
    but2.style.display = "inline-block";
}
but1.addEventListener("click", changer_premier);
//------------------------------------------------------------------------------------
var sans = [
    "Even fear can’t keep up with your determination.",
    "Because I believe in you and I know I’m right.",
    "Because your brain holds more random facts than Wikipedia.\nMight as well use them.",
    "Failure? Not your aesthetic.",
    "You're too smart to quit.",
    "You've done worse. Survived .",
    "Exams fear you .",
    "Şerafettin Dayı believes in you :)",
    "You stress, then impress.",
    "Because you are my habibiiiii <3 "
];
var colors = [
    '#ff6f91',
    '#ff9671',
    '#ffc75f',
    '#845ec2',
    '#229954',
    '#0081cf',
    '#d4ac0d',
    '#d65db1',
    '#2c73d2',
    '#34495e ',
];
var index = 0;
var timer;
function afficher_text() {
    if (index >= sans.length) {
        clearInterval(timer);
        but3.style.display = "block";
        return;
    }
    soz.style.display = "block";
    soz.className = "sozler";
    soz.style.color = colors[index];
    soz.innerText = sans[index];
    index += 1;
}
function changer_deuxieme() {
    but2.style.display = "none";
    text.style.display = "none";
    doggie.style.display = "block";
    index = 0;
    timer = setInterval(afficher_text, 2000);
}
but2.addEventListener("click", changer_deuxieme);
// -----------------------------------------------------------------------------
// PARTIE TROIS : HOGWARTS
var hat = document.getElementById("harry_hat");
var test_but = document.getElementById("test_button");
var test_par = document.getElementById("harry_text");
var sorular = [
    "What quality do you value the most at Hogwarts ?",
    "How do you act in a difficult situation ?",
    "What kind of books do you prefer ?",
    "Which animal do you feel most connected to ?",
    "What role do you usually take in a team ?"
];
var cevaplar = [
    ["Courage", "Loyalty", "Wisdom", "Ambition"],
    ["I take risks .", "I'm patient and helpful .", "I plan carefully .", "I act strategically ."],
    ["Adventure and heroism", "Nature and animals", "Science and mysteries", "Politics and power"],
    ["Lion", "Beaver", "Owl", "Snake"],
    ["Leadership", "Team player", "	Thinker and analyst", "	Goal-oriented achiever"]
];
var finals = [0, 0, 0, 0];
var k = 0;
function notes(index) {
    if (index >= 0 && index < cevaplar[k].length) {
        finals[index] += 1;
        k += 1;
    }
    next_question();
}
var answerSec = document.getElementById("answer");
var questionSec = document.getElementById("question");
function show_everything() {
    questionSec.innerText = sorular[k];
    answerSec.innerHTML = "";
    questionSec.className = "question_style";
    var _loop_1 = function (i) {
        var btn = document.createElement("button");
        btn.innerText = cevaplar[k][i];
        btn.className = "answer_style";
        btn.addEventListener("click", function () { return notes(i); });
        answerSec.appendChild(btn);
    };
    for (var i = 0; i < cevaplar[k].length; i++) {
        _loop_1(i);
    }
}
var reponse = document.getElementById("sonuc");
function results() {
    var resultat;
    var maxi = Math.max.apply(Math, finals);
    if (finals[0] == maxi) {
        resultat = "🦁Gryffindor";
    }
    else if (finals[1] == maxi) {
        resultat = "🦡Hufflepuff";
    }
    else if (finals[2] == maxi) {
        resultat = "🦅Ravenclaw";
    }
    else {
        resultat = "🐍Slytherin";
    }
    reponse.innerText = resultat;
    tard.style.display = "flex";
}
function next_question() {
    if (k < sorular.length) {
        show_everything();
    }
    else {
        answerSec.style.display = "none";
        questionSec.style.display = "none";
        results();
        but4.style.display = "block";
    }
}
var tard = document.getElementById("test_total");
var harry_div = document.getElementById("harry_total");
var hat_element = document.createElement("img");
hat_element.src = "harry_2.png";
hat_element.width = 300;
hat_element.height = 300;
hat.appendChild(hat_element);
var harry_button = document.createElement("button");
function changer_troiseme() {
    doggie.style.display = "none";
    soz.style.display = "none";
    but3.style.display = "none";
    harry_div.style.display = "flex";
    harry_button.innerText = "Start the Test!";
    harry_button.className = "harry_button_style";
    harry_button.addEventListener("click", function () {
        next_question();
        harry_div.style.display = "none";
    });
    test_but.appendChild(harry_button);
}
but3.addEventListener("click", changer_troiseme);
var ball_image = document.getElementById("ball");
var ball_ques = document.getElementById("ball_question");
var ball_ans = document.getElementById("ball_answer");
var but5 = document.getElementById("final");
var tot = document.getElementById("ball_total");
but4.addEventListener("click", function () {
    tot.style.display = "flex";
    tard.style.display = "none";
});
//-------------------------PARTIE 4 (MAGIC 8 BALL)---------------------------
var magic_answers = [
    "🌈Maybe... in an alternate universe.",
    "🐸I felt like a frog. Ask again.",
    "🕵️‍♂️Top secret. Not even Sherlock can know.",
    "🧀Yes,but only with extra cheese.",
    "📶No signal. Ball needs Wi-Fi.",
    "🐔The chicken says no. Trust it.",
    "🚀Go for it! The universe just cheered.",
    "🍟I don't know , wanna go large for just 50 cents more ?"
];
function shake_ball() {
    ball_image.classList.add("shake");
    ball_image.addEventListener("animationend", function () {
        ball_image.classList.remove("shake");
    }, { once: true });
    ball_ans.className = "ball_answer_style";
    if (ball_ques.value.trim().length != 0) {
        var index_1 = Math.floor(Math.random() * 8);
        ball_ans.innerText = magic_answers[index_1];
    }
    else {
        ball_ans.innerText = "You should type your question first !";
    }
}
//---------------------PARTIE 5 (FINAL)---------------------
var texto = document.getElementById("son_text");
var final_img = document.getElementById("myImage");
var final_gif = document.getElementById("dans_eden_arap");
var final_div = document.getElementById("yeter");
function final() {
    tot.style.display = "none";
    final_div.style.display = "flex";
    final_gif.style.display = "block";
    var son_ses = document.getElementById("ses");
    var ses = document.createElement("audio");
    ses.src = "tema.mp3";
    ses.volume = 0.6;
    ses.play();
    son_ses.appendChild(ses);
}
but5.addEventListener("click", final);
