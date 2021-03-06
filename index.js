#!/usr/bin/env node

// Require lib
const boxen = require('boxen');
const chalk = require('chalk');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  float: 'left',
  borderStyle: 'single',
  borderColor: 'black',
  backgroundColor: 'black'
};

// Text + chalk definitions
const data = {
  name: chalk.white('Hey, i\'m Vinces (Sp0ne)'),
  handle: chalk.cyan('👋'),
  work: chalk.white('Passionate Frenchie 🇫🇷 Full stack developer'),
  web: chalk.cyan('https://vinces.io'),
  studio: chalk.cyan('https://in2com.fr'),
  github: chalk.cyan('https://github.com/Sp0ne'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/vinces-'),
  npx: chalk.white('npx @vinces/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelStudio: chalk.white.bold('   Studio:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const studioing = `${data.labelStudio}  ${data.studio}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline
  + newline
  + webing + newline
  + working + newline
  + studioing + newline
  + githubing + newline
  + linkedining + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
console.log(cardMessage);
