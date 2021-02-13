// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none") {
    return "";
  }
  else {
    license = license.replace(/\s/g , "_");
    return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none") {
    return "";
  }
  else {
    license = license.replace(/\s/g , "_");
    return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseArray = [
    {
      name: "GNU AGPLv3",
      link: "https://www.gnu.org/licenses/agpl-3.0"
    },
    {
      name: "GNU GPLv3",
      link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    {
      name: "GNU LGPLv3",
      link: "https://www.gnu.org/licenses/lgpl-3.0"
    },
    {
      name: "Mozilla Public License 2.0",
      link: "https://opensource.org/licenses/MPL-2.0"
    },
    {
      name: "Apache License 2.0",
      link: "https://opensource.org/licenses/Apache-2.0"
    },
    {
      name: "MIT License",
      link: "https://opensource.org/licenses/MIT"
    },
    {
      name: "Boost Software License 1.0",
      link: "https://www.boost.org/LICENSE_1_0.txt"
    },
    {
      name: "The UNLicense",
      link: "http://unlicense.org/"
    }
  ]

  if(license === "none") {
    return "";
  }
  else {

    let licenseLink = licenseArray.find(e => e.name === license);

    return licenseLink.link;

  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}
  ${licenseBadge}
  ## Table of Contents: \n
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [License](#license)\n
  [Questions](#questions)\n
  <hr>\n
  ## Description: \n
  ${data.description} \n
  <hr>\n
  ## Installation: \n
  ${data.installationInstructions}\n
  <hr>\n
  ## Usage: \n
  ${data.usageInformation}\n
  <hr>\n
  ## Contributing: \n
  ${data.contributionGuidelines}\n
  <hr>\n
  ## Tests: \n
  ${data.testInstructions}\n
  <hr>\n
  ### License: \n
  ${licenseSection}\n
  <hr>\n
  ### Questions: \n
  If you would like to learn more, please take a look through my github below:\n
  <a href="https://github.com/${data.username}"><img src="./assets/images/github-brands.svg" height="40px" width="auto" alt="github icon"> </a>Visit my GitHub at <a href="https://github.com/${data.username}">github.com/${data.username}</a>\n
  If you still have questions, please send me an email and I will respond as soon as I can:\n
  <a href="mailto:${data.email}">${data.email}</a>\n
`;
}

module.exports = generateMarkdown;
