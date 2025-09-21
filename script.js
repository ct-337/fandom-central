function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

function submitQuiz() {
  const answers = {
    q1: 'b',
    q2: 'b',
    q3: 'b'
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById('quiz-result');
  result.textContent = `You scored ${score} out of 3!`;
}
