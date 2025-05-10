const courseContainer = document.getElementById('courses');
const totalCredits = document.getElementById('totalCredits');
const filterButtons = document.querySelectorAll(".filter-buttons button");

function displayCourses(courseList) {
  courseContainer.innerHTML = '';
  let credits = 0;

  courseList.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Descripción:</strong> ${course.description}</p>
      <p><strong>Tecnologías:</strong> ${course.technology.join(', ')}</p>
      <p><strong>Créditos:</strong> ${course.credits}</p>
    `;

    courseContainer.appendChild(card);
    credits += course.credits;
  });

  totalCredits.textContent = credits;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    const filter = button.id;
    if (filter === 'allBtn') displayCourses(courses);
    else if (filter === 'wddBtn') displayCourses(courses.filter(c => c.subject === 'WDD'));
    else if (filter === 'cseBtn') displayCourses(courses.filter(c => c.subject === 'CSE'));
  });
});

document.getElementById('allBtn').classList.add('selected');
displayCourses(courses);
