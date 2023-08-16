import "./assets/scss/all.scss";
// import "./assets/scss/icofont.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

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

function getTicketInfo() {
  const ticketDate = document.querySelector("#ticket-date");
  const ticketType = document.querySelector("#ticket-type");
  const ticketPrice = document.querySelector("#ticket-price");
  const tickettypePrice1 = document.querySelector("#ticket-typePrice1");
  const tickettypePrice2 = document.querySelector("#ticket-typePrice2");
  const ticketbtn2 = document.querySelector("#ticketbtn2");
  let ticket = {
    date: "",
    type: "",
    price: "",
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
  tickettypePrice1.innerText = ticket.type + ticket.price;
  tickettypePrice2.innerText = ticket.type + ticket.price;
  ticketbtn2.innerHTML = `確認訂單並繳費${ticket.price} <i class="icofont-rounded-double-right"></i>`;
}

function checkTicket() {
  const ticket1 = document.querySelector("#ticket1");
  const ticket2 = document.querySelector("#ticket2");
  const ticket3 = document.querySelector("#ticket3");
  const ticketbtn1 = document.querySelector("#ticketbtn1");
  const ticketbtn2 = document.querySelector("#ticketbtn2");

  ticketbtn1.addEventListener("click", (e) => {
    e.preventDefault();
    ticket1.classList.add("d-none");
    ticket2.classList.add("d-block");
    ticket2.classList.remove("d-none");
  });

  ticketbtn2.addEventListener("click", (e) => {
    e.preventDefault();
    ticket2.classList.add("d-none");
    ticket3.classList.add("d-block");
    ticket3.classList.remove("d-none");
  });
}

if (getCurrentFileName() === "buy_ticket.html") {
  getTicketInfo();
  checkTicket();
}

if (getCurrentFileName() === "login.html") {
  let navBtn1 = document.querySelector("#navBtn1");
  let login1 = document.querySelector("#login1");
  navBtn1.addEventListener("click", () => {
    login1.classList.toggle("d-flex");
    login1.classList.toggle("d-none");
  });
  // login1
}
