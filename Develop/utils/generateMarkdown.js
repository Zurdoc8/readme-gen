// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${license}-blueviolet)
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license){
      return '';
    }
  
    return `Protected by [${license}](https://opensource.org/licenses/${license}) license. < Click link for more information.`
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  `
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const section = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  
  return `
  # ${data.projectTitle}

  ## Table of Contents:
  - [ About ](#about)
  - [Builtwith](#builtwith)
  - [Install](#Install)
  - [Walkthrough](#walkthrough)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions) 
  - [Credits](#credits)

  ## About
  > ${data.projectAbout}

  ## Builtwith
  - ${data.techUsed}

  ## Install
  > ${data.howToInstall}

  ## Walkthrough
  > ${data.walkThrough}

  ## Contributions
  - ${data.contGuidelines}

  ## Tests
  - ${data.test}

  ${section}
  ${badge}
  - ${link}

  ## Questions
  - For questions you may reach me at [email](mailto:${data.email})

  ## Credits
  - ${data.github} [Go to My GitHub](https://github.com/${data.github})

  `;
}



module.exports = generateMarkdown;
