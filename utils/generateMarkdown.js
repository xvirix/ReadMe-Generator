

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title
${data.Title}
${data.License}

# Description
${data.Description}

# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
  
# Installation
${data.Installation}

# Usage
${data.Usage}

# License 
${data.License}

# Contributing 
${data.Contributing}

# Tests
${data.Tests}

# Contact Information 
* Questions? Contact me here: ${data.Questions}
`;
}

module.exports = generateMarkdown;
