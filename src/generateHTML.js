function generateHTML(data) {
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
          <div class="col-sm-12 col-md-12 col-4">
          <div class="card bg-dark mb-3" style="margin: 25px;">
            <div class="card-header" style="background-color: #C06C84; color:white;">
              <h3 class="card-title text-center empName">${person.name}</h3>
              <h4 class="card-title">🧙🏽${person.role}</h4>
            </div>
            <div class="card-body" style="background-color: #6C5B7B;">
              <ul class="list-group list-group-flush" style="color: black;">
                <li class="list-group-item ids">${person.id}</li>
                <li class="list-group-item emails">${person.email}</li>
                <li class="list-group-item uniq"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
  </html>
`}

module.exports = generateHTML; 