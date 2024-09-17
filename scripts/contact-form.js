document.querySelector(".js-form-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form from submitting the traditional way
  const messageArray = getMessageInput();

  if (messageArray) {
    const [name, email, phoneNumber, subject, message] = messageArray;

    const formData = {
      name,
      email,
      phoneNumber,
      subject,
      message,
    };

    formPost(formData);
  }
});

function formPost(formData) {
  const formEndpoint = "https://formspree.io/f/xovazzyq";

  fetch(formEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        clearForm();
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was an error: " + error.message);
    });
}

function getMessageInput() {
  const name = document.querySelector(".js-name").value.trim();
  const email = document.querySelector(".js-email").value.trim();
  const phoneNumber = document.querySelector(".js-phone-number").value.trim();
  const subject = document.querySelector(".js-subject").value.trim();
  const message = document.querySelector(".js-message").value.trim();

  if (!name || !email || !phoneNumber || !subject || !message) {
    alert("Please fill in all fields.");
    return null;
  }

  return [name, email, phoneNumber, subject, message];
}
function clearForm() {
  document.querySelector(".js-name").value = "";
  document.querySelector(".js-email").value = "";
  document.querySelector(".js-phone-number").value = "";
  document.querySelector(".js-subject").value = "";
  document.querySelector(".js-message").value = "";
}
