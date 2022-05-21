// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case 'GPL':
        return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
       case 'None':
         return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  if (license === 'None') {
    return ""
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""
  } else {
    return `## License
    The application is covered under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
 ${renderLicenseBadge(data.License)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.License)}
  
  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ${renderLicenseSection(data.License)} 
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  Any questions or concerns? Please contact me via:
  - Github Username: [${data.Github}](https://github.com/${data.Github})
  - Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
