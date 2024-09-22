// variable declaration
const fillThePort = document.querySelector(".listport");

// add the portfolio here
let portfolio = [
  (listOne = {
    Title: "Lorem",
    nameOfDeveloper: "Lorem Ipsum",
    whenPublishIt: "20-10-2020",
    Description: "lorem ipsum dolor sit amet",
  }),
  (listTwo = {
    Title: "Sayo",
    nameOfDeveloper: "Lorem lovely",
    whenPublishIt: "13-11-2122",
    Description: "lorem ipsum dolor sit amet amz annjanwja ammzn",
  }),
  (listThree = {
    Title: "Mika",
    nameOfDeveloper: "Lorem lovely",
    whenPublishIt: "13-11-2122",
    Description: "lorem ipsum dolor sit amet acka msamklmamk aa,z,mknqwo asadsx",
  }),
];

// template code list
let listOfPortofolio = "";
portfolio.forEach((item) => {
  let i = portfolio.indexOf(item);
  listOfPortofolio += `<a href=""><div class="port">
    <div class="portmain">
      <h1>${item.Title}</h1>
      <hr />
      <div class="info-port">
        <h3>Developer: ${item.nameOfDeveloper}</h3>
        <h3>Dipublish pada:${item.whenPublishIt}</h3>
      </div>
      <p>
        ${item.Description}
      </p>
    </div>
    <div class="fotoport ke${i + 1}"></div>
  </div></a>`;
});

// show the list
fillThePort.innerHTML = listOfPortofolio;
