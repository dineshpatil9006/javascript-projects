function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let timeSpace = hours >= 12 && hours <= 23 ? "PM" : "AM";
  const timeString = `${hours} : ${minutes} : ${seconds} ${timeSpace}`;
  document.getElementById("time").textContent = timeString;

  const day = now.getDate().toString();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[now.getDay()];


  let monthsOfWeek = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthsOfWeek[now.getMonth()]

  const year = now.getFullYear().toString();
  const dateString = `${dayName}, ${monthName} ${day}, ${year}`;
  document.getElementById("date").textContent = dateString;
}
updateClock();
setInterval(updateClock, 1000);
