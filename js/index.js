document.getElementById("posts-btn").addEventListener("click", () => {
  fetchData("posts");
});

document.getElementById("users-btn").addEventListener("click", () => {
  fetchData("users");
});

document.getElementById("photos-btn").addEventListener("click", () => {
  fetchData("photos");
});

document.getElementById("todos-btn").addEventListener("click", () => {
  fetchData("todos");
});

async function fetchData(endpoint) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`
    );
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    for (const key in item) {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${key}:</strong> ${item[key]}`;
      itemDiv.appendChild(p);
    }
    container.appendChild(itemDiv);
  });
}
