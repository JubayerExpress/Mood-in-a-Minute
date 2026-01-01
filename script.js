let currentMood = "";

function setMood(mood) {
  currentMood = mood;
  document.getElementById("selectedMood").innerText =
    "Selected mood: " + mood;
}

function saveMood() {
  if (!currentMood) return alert("Pick a mood first");

  const note = document.getElementById("note").value;
  const date = new Date().toLocaleDateString();

  const entry = { date, mood: currentMood, note };

  let data = JSON.parse(localStorage.getItem("moods")) || [];
  data.unshift(entry);
  data = data.slice(0, 7);

  localStorage.setItem("moods", JSON.stringify(data));
  document.getElementById("note").value = "";
  loadHistory();
}

function loadHistory() {
  const data = JSON.parse(localStorage.getItem("moods")) || [];
  const list = document.getElementById("history");
  list.innerHTML = "";

  data.forEach(d => {
    const li = document.createElement("li");
    li.textContent = `${d.date} ${d.mood} - ${d.note}`;
    list.appendChild(li);
  });
}

loadHistory();

