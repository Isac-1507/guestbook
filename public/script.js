const delay = ms => new Promise(res => setTimeout(res, ms));

document.getElementById("guestBookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, message }),
  })
    .then((response) => response.json())
    .then(async (data) => {
      if (data.success) {
        status.innerHTML += "Thank you for submitting your message!";
        loadEntries();
        await delay(3000);
        status.innerHTML = "";
      } else {
        status.innerHTML += "There was an error submitting your message.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      status.innerHTML += "An error occurred.";
    });
});

document.getElementById('pullButton').addEventListener('click', function(e) {
  e.preventDefault();
  loadEntries();
});

function loadEntries() {
  fetch("/entries")
    .then((response) => response.json())
    .then((entries) => {
      const entriesContainer = document.getElementById("guestBookEntries");
      entriesContainer.innerHTML = "";
      entries.forEach((entry) => {
        const entryElement = document.createElement("div");
        entryElement.innerHTML = `<strong>${entry.name}</strong><p>${entry.message}</p><hr>`;
        entriesContainer.appendChild(entryElement);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", loadEntries);
