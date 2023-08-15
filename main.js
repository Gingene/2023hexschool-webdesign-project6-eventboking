import "./assets/scss/all.scss";
// import "./assets/scss/icofont.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// const b1 = document.querySelector("#buy-type-1");
// const br = document.querySelector("#buy-type-result");

function getCurrentFileName() {
  let path = window.location.pathname;
  let fileName = path.split("/").pop();
  return fileName;
}

if (getCurrentFileName() === "event-9.html") {
  const buyLinks = document.querySelectorAll(".main-outline-btn");

  buyLinks.forEach((link) => {
    link.addEventListener("click", ticketHandler);
  });
}

function ticketHandler(e) {
  e.preventDefault();

  const dataDate = e.target.getAttribute("data-date");
  const dataType = e.target.getAttribute("data-type");
  const dataPrice = e.target.getAttribute("data-price");

  // 創建 query string
  const queryString = `?data-date=${encodeURIComponent(
    dataDate
  )}&data-type=${encodeURIComponent(dataType)}&data-price=${encodeURIComponent(
    dataPrice
  )}`;

  // 導向目標頁面
  window.location.href = e.target.href + queryString;
}

if (getCurrentFileName() === "buy_ticket.html") {
  const ticketDate = document.querySelector("#ticket-date");
  const ticketType = document.querySelector("#ticket-type");
  const ticketPrice = document.querySelector("#ticket-price");
  let ticket = {
    date: "",
    type: "",
    price: 0,
  };
  // 解析 URL 中的 query string
  const urlParams = new URLSearchParams(window.location.search);

  // 獲取 data-date 的值
  ticket.date = urlParams.get("data-date");

  // 獲取 data-type 的值
  ticket.type = urlParams.get("data-type");

  // 獲取 data-price 的值
  ticket.price = urlParams.get("data-price");

  // 在控制台中輸出這些值，你可以根據需求進一步處理
  console.log("Date:", ticket.date);
  console.log("Type:", ticket.type);
  console.log("Price:", ticket.price);

  ticketDate.innerText = ticket.date;
  ticketType.innerText = ticket.type;
  ticketPrice.innerText = ticket.price;
}
