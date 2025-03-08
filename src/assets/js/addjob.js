const jobs = [];
let newJob = {
  role: "",
  description: "",
  experience: "",
  address: "",
  rounds: []
};
const jobList = document.getElementById('job-list');
const jobDialog = document.getElementById('job-dialog');
const roundInput = document.getElementById('round-input');
const roundsContainer = document.getElementById('rounds-container');
document.getElementById('open-dialog').addEventListener('click', () => {
  jobDialog.classList.toggle('hidden');
});
document.getElementById('add-round-btn').addEventListener('click', () => {
  const round = roundInput.value.trim();
  if (round) {
    newJob.rounds.push(round);
    updateRounds();
    roundInput.value = "";
  }
});
document.getElementById('submit-job').addEventListener('click', () => {
  const role = document.getElementById('role').value;
  const description = document.getElementById('description').value;
  const experience = document.getElementById('experience').value;
  const address = document.getElementById('address').value;
  newJob = { ...newJob, role, description, experience, address };
  jobs.push({ ...newJob, id: Date.now() });
  displayJobs(jobs);
  resetForm();
});
function displayJobs(jobsArray) {
  jobList.innerHTML = "";
  jobsArray.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    jobCard.innerHTML = `
      <h2>${job.role}</h2>
      <p>${job.description}</p>
      <p><strong>Experience:</strong> ${job.experience}</p>
      <p><strong>Address:</strong> ${job.address}</p>
      <h3>Rounds</h3>
      <ul>${job.rounds.map(round => `<li>${round}</li>`).join('')}</ul>
      <button class="delete" onclick="deleteJob(${job.id})">&times;</button>
    `;
    jobList.appendChild(jobCard);
  });
}
function deleteJob(id) {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
    displayJobs(jobs);
  }
}
function updateRounds() {
  roundsContainer.innerHTML = newJob.rounds.map((round, index) => `
    <div>
      ${round} <button onclick="removeRound(${index})">Remove</button>
    </div>
  `).join('');
}
function removeRound(index) {
  newJob.rounds.splice(index, 1);
  updateRounds();
}
function resetForm() {
  document.getElementById('role').value = "";
  document.getElementById('description').value = "";
  document.getElementById('experience').value = "";
  document.getElementById('address').value = "";
  newJob.rounds = [];
  updateRounds();
  jobDialog.classList.add('hidden');
}