let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

// Load theme
document.body.classList.add(localStorage.getItem("theme") || "light");
updateHistory();

function toggleTheme() {
  if (document.body.classList.contains("light")) {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
}

async function getWeather(cityParam) {
  const city = cityParam || document.getElementById("city").value;

  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const condition = document.getElementById("condition");

  cityName.innerText = "Loading...";
  temperature.innerText = "";
  condition.innerText = "";

  try {
    const res = await fetch(`http://localhost:5000/api/weather/${city}`);
    const data = await res.json();

    if (data.error) {
      cityName.innerText = "City not found";
      return;
    }

    cityName.innerText = data.city;
    temperature.innerText = `${data.temp} °C`;
    condition.innerText = data.condition;

    // Save to history
    history.unshift(data);
    history = history.slice(0, 5); // keep last 5
    localStorage.setItem("weatherHistory", JSON.stringify(history));

    updateHistory();
  } catch (err) {
    cityName.innerText = "⚠️ Server error";
  }
}

function updateHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.city} - ${item.temp}°C`;
    li.onclick = () => getWeather(item.city);
    list.appendChild(li);
  });
}
