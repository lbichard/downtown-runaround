function renderLicenseBadge (license) {
    let badge = "";
    let licenseOptions =
    {
      "Apache license 2.0": "https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg",
      "GNU General Public License v3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
      "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
      "BSD 2-Clause \"Simplified\" License": "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      "BSD 3-Clause \"New\" or \"Revised\" License": "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
      "Boost Software License 1.0": "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      "Creative Commons Zero v1.0 Universal": "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
      "Eclipse Public License 2.0": "https://img.shields.io/badge/License-EPL_2.0-red.svg",
      "GNU Affero General Public License v3.0": "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      "GNU General Public License v2.0": "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      "GNU Lesser General Public License v2.1": "https://img.shields.io/badge/License-LGPL_v2.1-blue.svg",
      "Mozilla Public License 2.0": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      "The Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg"
    }
  
    if (license !== "None") {
      badge = `![License](${licenseOptions[license]})`
    }
    return badge;
  }
  
  // This function returns the license link in the table of contents.
  function renderLicenseLink (license) {
    let licenseLink = "";
    if (license !== "None") {
      licenseLink = "- [License](#license)"
    }
    return licenseLink;
  }
  
  // This function returns the license section of the README.
  function renderLicenseSection (license) {
    let licenseSection = "";
    if (license !== "None") {
      licenseSection = `## License\n${license}`;
    }
    return licenseSection;
  }
  
  // This function generates the markdown for the README.
  function generateMarkdown (data) {
    return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  
  ## Description
    ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Features
  ${data.features}
  
  ## How to Contribute
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions regarding this project, contact me via:
  - GitHub: [https://github.com/${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  