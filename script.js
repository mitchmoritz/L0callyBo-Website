const parentEmail = "parent@example.com";

const form = document.querySelector("#booking-form");
const note = document.querySelector("#form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const requestType = data.get("requestType").trim();
  const timeline = data.get("timeline").trim() || "Not provided";
  const details = data.get("details").trim();

  const subject = `l0cally bo request: ${requestType}`;
  const body = [
    "New l0cally bo website request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Request type: ${requestType}`,
    `Timeline: ${timeline}`,
    "",
    "Details:",
    details,
    "",
    "Parent review notes:",
    "- Confirm scope, price, payment method, and pickup/shipping before accepting.",
    "- Do not collect private teen contact info on the public site.",
  ].join("\n");

  const mailto = `mailto:${encodeURIComponent(parentEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;

  note.textContent = "Email draft created. If nothing opened, update parentEmail in script.js or connect a form service later.";
});
