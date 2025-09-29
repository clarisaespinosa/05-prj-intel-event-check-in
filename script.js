let attendance = 0;
const maxAttendance = 50;
let teams = { water: 0, net: 0, renew: 0 };

function checkIn() {
  console.log("✅ Botón presionado"); // Para confirmar que funciona

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

 
