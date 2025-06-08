const messageEl = document.getElementById('visitMessage');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  messageEl.textContent = "Welcome! If you have any questions, feel free to ask.";
} else {
  const diffTime = now - parseInt(lastVisit, 10);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    messageEl.textContent = "You returned soon! Awesome!";
  } else if (diffDays === 1) {
    messageEl.textContent = "Your last visit was 1 day ago.";
  } else {
    messageEl.textContent = `Your last visit was ${diffDays} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);
