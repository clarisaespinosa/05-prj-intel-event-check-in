let attendance = 0;
const maxAttendance = 50;
let teams = { water: 0, net: 0, renew: 0 };

function checkIn() {
  const name = document.getElementById("nameInput").value.trim();
  const team = document.getElementById("teamSelect").value;

  if (!name || !team) {
    alert("⚠️ Please enter your name and select a team.");
    return;
  }

  // Increment totals
  if (attendance < maxAttendance) {
    attendance++;
    teams[team]++;
  } else {
    alert("🚫 Attendance limit reached!");
    return;
  }

  // Update totals
  document.getElementById("attendanceCount").textContent = attendance;
  document.getElementById("waterCount").textContent = teams.water;
  document.getElementById("netCount").textContent = teams.net;
  document.getElementById("renewCount").textContent = teams.renew;

  // Update progress bar
  const bar = document.getElementById("attendanceBar");
  const percentage = (attendance / maxAttendance) * 100;
  bar.style.width = percentage + "%";

  // Clear inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("teamSelect").value = "";

  // Show welcome message
  alert(`🎉 Welcome, ${name}! You joined ${formatTeam(team)}.`);
}

function formatTeam(team) {
  if (team === "water") return "💧 Team Water Wise";
  if (team === "net") return "🌱 Team Net Zero";
  if (team === "renew") return "⚡ Team Renewables";
  return "your team";
}

  border-radius: 10px;
  height: 15px;
  overflow: hidden;
}

.attendance-fill {
  height: 100%;
  background: #00c2ff;
  width: 0%;
  transition: width 0.3s;
}

.checkin-box {
  background: white;
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

input, select, button {
  padding: 0.6rem;
  margin: 0.4rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  background: #0071c5;
  color: white;
  cursor: pointer;
  border: none;
}

button:hover {
  background: #005ea6;
}

.teams {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.team-card {
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  color: #333;
  font-weight: bold;
}

.team-water { background: #e3f2fd; }
.team-net { background: #e8f5e9; }
.team-renew { background: #fff8e1; }
attendanceBar");
  const percentage = (attendance / maxAttendance) * 100;
  bar.style.width = percentage + "%";

  // Clear inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("teamSelect").value = "";

  // Show welcome message
  alert(`🎉 Welcome, ${name}! You joined ${formatTeam(team)}.`);
}

function formatTeam(team) {
  if (team === "water") return "💧 Team Water Wise";
  if (team === "net") return "🌱 Team Net Zero";
  if (team === "renew") return "⚡ Team Renewables";
  return "your team";
}
