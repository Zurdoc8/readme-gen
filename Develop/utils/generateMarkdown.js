// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${license}-blueviolet)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license){
      return '';
    }
  
    return `
    Protected by [${license}](https://opensource.org/licenses/${license}) license. < Click link for more information.
    `
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  `
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Table of Contents:
  - [ About ](#about)
  - [Built with](#builtwith)
  - [Install](#Install)
  - [Walkthrough](#walkthrough)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions) 
  - [Credits](#Credits)

  ## About
  ${data.projectAbout}

  ## Built with
  ${data.techUsed}

  ## Install
  ${data.howToInstall}

  ## Walkthrough
  ${data.walkThrough}

  ## Contributions
  ${data.contGuidelines}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions
  For questions you may reach me at [email](mailto:${data.email})

  ## Credits
  ${data.github}

  `;
}



module.exports = generateMarkdown;
