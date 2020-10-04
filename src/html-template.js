const generateSections = (teamMembersArray) => {

let empSection = [];
  
// To loop through transfered Array && its contents
    for (let i = 0; i < teamMembersArray.length; i++) {
      empRole = teamMembersArray[i].role;
    }
    return empSection;
};
  
  //creates the final html that will be create
  const generatePage = (teamMembersArray) => {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main class="container">
      ${generateSections(teamMembersArray)}
    </main>
  </body>
</html>`
};
  
module.exports = generatePage;