document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (name && email && subject && message) {
      alert(`Thanks, ${name}! Your message has been sent.`);
      form.reset();
    } else {
      alert("Please complete all the fields before submitting.");
    }
  });
});
