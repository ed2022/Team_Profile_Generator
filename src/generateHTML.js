function generateHTML(data) {
  console.log("We are here in generate!");
  console.log("Data: ", data);
  
  function cardGenerator(data){
    var empCards =``; 
    //looping through data
    data.forEach(card => {
      //getting specific detail
      var cardlist = ``;
      if(card.getRole() === "Manager"){
        cardlist = `<li class="list-group-item officeNumber">Office Number: ${card.getOfficeNumber()}</a></li>`
        console.log("CardList: " + cardlist);
      }
      else if(card.getRole() === "Engineer"){
        cardlist = `<li class="list-group-item gitHub">GitHub: ${card.getHub()}</a></li>`
        console.log("CardList: " + cardlist);
      }
      else {
        cardlist = `<li class="list-group-item school">School: ${card.getSchool()}</a></li>`
        console.log("CardList: " + cardlist);
      } 
      //making a card and adding this to the already existing cards
      empCards = empCards + 
      `<div class="col-sm-12 col-md-12 col-4">
        <div class="card bg-dark mb-3" style="margin: 25px;">
          <div class="card-header" style="background-color: #C06C84; color:white;">
            <h3 class="card-title text-center empName">${card.getName()}</h3>
            <h4 class="card-title">🧙🏽${card.getRole()}</h4>
          </div>
          <div class="card-body" style="background-color: #6C5B7B;">
            <ul class="list-group list-group-flush" style="color: black;">
              <li class="list-group-item ids">Id: ${card.getId()}</li>
              <li class="list-group-item emails"><a href="mailto:${card.getEmail()}">Email: ${card.getEmail()}</a></li>
              ${cardlist}
            </ul>
          </div>
        </div>
      </div> ` 
    });
    return empCards; 
  }
  
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>Team Profile Generator</title>
    </head>
    <body style="background-color: #355C7D; font-family:'Courier New', Courier, monospace;">
      <!-- Main Header -->
      <header class="p-4 text-center text-white" style="background-color: #F8B195;">
        <h1>🔰 My Team 🔰</h1>
      </header>
      <!-- <div class="container" style="background-color: cyan; padding: 15px; margin: 50px"> -->
      <div class="row">
        ${cardGenerator(data)}
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
  </html>
`
}

module.exports = generateHTML; 