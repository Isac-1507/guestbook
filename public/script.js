document
  .getElementById("guestBookForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Thank you for your message!");
          loadEntries();
        } else {
          alert("There was an error submitting your message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  function loadEntries() {
    fetch('/entries').then(response => response.json()).then(entries => {
        const entriesContainer = document.getElementById('guestBookEntries')
        entriesContainer.innerHTML = '';
        entries.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.innerHTML = `<strong>${entry.name}</strong><p>${entry.message}</p>`;
            entriesContainer.appendChild(entryElement);
        })
    })
  }

  document.addEventListener('DOMContentLoaded', loadEntries);