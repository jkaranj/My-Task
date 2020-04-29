const dateElement = document.getElementById("date");
const option = {weekday : "long", month : "short", day : "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us", option);