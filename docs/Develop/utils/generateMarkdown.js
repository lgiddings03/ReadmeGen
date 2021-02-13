// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  await licenseBadge();

  async function licenseBadge() {
    await octokit.request('GET /licenses');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  ![GitHub](https://img.shields.io/github/license/lgiddings03/ReadmeGen?style=for-the-badge)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  await octokit.request('GET /repos/{lgiddings03}/{ReadmeGen}/license', {
    owner: 'Liz Giddings',
    repo: 'ReadmeGen'
  })
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(_markdown) {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
  });

  module.exports = generateMarkdown;
}
