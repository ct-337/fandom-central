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

document.getElementById('art-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('artist-name').value;
  const link = document.getElementById('art-link').value;
  const desc = document.getElementById('description').value;

  const response = document.getElementById('art-response');
  response.textContent = `Thanks, ${name}! Your art submission has been received.`;

  console.log(`Art submitted by ${name}: ${link} — ${desc}`);
  this.reset();
});
