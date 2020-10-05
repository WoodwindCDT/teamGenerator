const generateCards = (teamMembersArray) => {

  let empSection = [];
    
  // To loop through transfered Array && its
      for (let i = 0; i < teamMembersArray.length; i++) {
        empRole = teamMembersArray[i].role;
    
        // To create section
        let section1 = `
          <div class="card-body">
            <div class="card border-dark">
            <div class="card-header text-white bg-primary">
          <h2 class="card-title">${teamMembersArray[i].name}</h2>
          `;
        let section2 = `
         </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Employee ID: ${teamMembersArray[i].id}
            </li>
            <li class="list-group-item">
              Email: <a href="mailto:${teamMembersArray[i].email}">${teamMembersArray[i].email}</a>
            </li>
          `;
        
        let section3 = `
            </ul>
          </div>
        </div>
      `;

      // To cycle and generate each card-body with specific content based on user input
      if (empRole === 'Manager') {
        empSection.push(`
          ${section1}
          <h3 class="mb-2 text-white fas fa-mug-hot">
          ${teamMembersArray[i].role}
          </h3>
          ${section2}
          <li class="list-group-item">
            Office Number: ${teamMembersArray[i].officeNumber}
          </li>
          ${section3}
          `);
      } else if (empRole === 'Engineer') {
        empSection.push(`
          ${section1}
          <h3 class="mb-2 text-white fas fa-glasses">
          ${teamMembersArray[i].role}
          </h3>
          ${section2}
          <li class="list-group-item">
            Github: <a href = 'https://www.github.com/${teamMembersArray[i].github}' target= '_blank'> ${teamMembersArray[i].github}</a>
          </li>
          ${section3}
          `);
      } else if (empRole === 'Intern') {
        empSection.push(`
          ${section1}
          <h3 class="mb-2 text-white fas fa-user-graduate">
          ${teamMembersArray[i].role}
          </h3>
          ${section2}
          <li class="list-group-item">
          School: ${teamMembersArray[i].school}
          </li>
          ${section3}
        `);
      }
    }
  return empSection.join('');
};
    
  // To Generate finishing html for HTML page
  const generatePage = (teamMembersArray) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team Profile :D</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <div class="container">
        ${generateCards(teamMembersArray)}
      </div>
    </body>
  </html>
`};

module.exports = generatePage;