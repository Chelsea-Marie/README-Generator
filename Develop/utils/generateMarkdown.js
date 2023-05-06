// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
  }
  if (license == "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if(license == "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache 2.0 License") {
    return "https://opensource.org/license/apache-2-0/"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#usageinformation)
  - [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usage Information
  ${answers.usage}

  ## License
  ${renderLicenseBadge(answers.license)}
  ${renderLicenseLink(answers.license)}
  
  ## Contribution Guidelines
  ${answers.contribution}
  
  ## Test Instructions
  ${answers.instructions}
  
  ## Questions?
  For more information, you can contact me at:
  https://github.com/${answers.questions}
  or
  ${answers.email}

  `;
}

module.exports = generateMarkdown;
