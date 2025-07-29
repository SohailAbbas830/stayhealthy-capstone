const doctors = [
  { name: "Dr. Alice Johnson", specialty: "cardiologist" },
  { name: "Dr. Brian Smith", specialty: "dermatologist" },
  { name: "Dr. Clara Lee", specialty: "neurologist" },
  { name: "Dr. David Kim", specialty: "cardiologist" }
];

function searchDoctor() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const specialty = document.getElementById("specialtySelect").value;
  const resultsContainer = document.getElementById("results");

  const filtered = doctors.filter(doc => {
    const matchName = doc.name.toLowerCase().includes(query);
    const matchSpecialty = specialty ? doc.specialty === specialty : true;
    return matchName && matchSpecialty;
  });

  resultsContainer.innerHTML = "";

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p>No doctors found.</p>";
  } else {
    filtered.forEach(doc => {
      const div = document.createElement("div");
      div.className = "result-item";
      div.textContent = doc.name + " - " + doc.specialty.charAt(0).toUpperCase() + doc.specialty.slice(1);
      resultsContainer.appendChild(div);
    });
  }
}
