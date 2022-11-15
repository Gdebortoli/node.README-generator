// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
                return "";
  } else {
    return ` [License Link](${renderLicenseLink(license)})`;
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
    } else if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    }  else if (license === "Mozilla") {
        return "https://opensource.org/licenses/MPL-2.0";
      } else if (license === "ISC") {
        return "https://opensource.org/licenses/ISC";
        } else if (license === "Other") {
          return "https://opensource.org/licenses/alphabetical";
           } else if (license === "None") {
            return "";
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return `This project used the Apache License 2.0 \n${renderLicenseBadge(license)}`;
    } else if (license === "BSD") {
      return `This project used the BSD License ${renderLicenseBadge(license)}`; 
        } else if (license === "MIT") {
          return `This project used the MIT License ${renderLicenseBadge(license)}`;
          } else if (license === "Mozilla") {
            return `This project used the Mozilla Public License ${renderLicenseBadge(license)}`;
            } else if (license === "ISC") {
              return `This project used the ISC license ${renderLicenseBadge(license)}`;
              } else if (license === "Other") {
                return `This project used a different license`;
      } else if (license === "None") {
        return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![Github License](https://img.shields.io/badge/License-${data.license}-blueviolet.svg)

## Description
  
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation 

${data.installation}

## Usage 

${data.usage}

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Credits 

${data.credits}

## License

${renderLicenseSection(data.license)}

## Questions 

* Email: ${data.questions}

* GitHub Username: ${data.github}

`
};

// module.exports = renderLicenseBadge;
// module.exports = renderLicenseSection;
module.exports = generateMarkdown;
