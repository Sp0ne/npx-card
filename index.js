#!/usr/bin/env node

// Require conf & lib
const { info, links, style } = require("./config.json")
const boxen = require('boxen');
const chalk = require('chalk');

// Define options for Boxen
const options = {
  padding: style.padding,
  margin: style.margin,
  float: 'left',
  borderStyle: style.borderStyle,
  borderColor: style.borderColor,
  backgroundColor: style.backgroundColor
};

// Text + chalk definitions
const data = {
  name: chalk.whiteBright.bold('Hey, i\'m ') + chalk.black.bgGreenBright.bold(info.name),
  aka: chalk.white(info.aka),
  handle: chalk.white(info.handle),
  job: chalk.green.italic(info.job),
  npx: chalk.cyan(info.npx),
  labelCard: chalk.white.bold("       Card:")
};

// Actual strings we're going to output
const newline = '\n';

// Put all our output together into a single variable so we can use boxen effectively
const output = boxen([
  `${data.name} ${data.aka} ${data.handle}`,
  "",
  `${data.job}`,
  "",
  ...links.map(link => {
    return chalk.white.bold(link.name) + '   ' + chalk.grey('https://') + chalk.white(link.url)
  }),
  "",
  `${data.labelCard}  ${data.npx}`
].join(newline), options)

console.log(output);

const tip = [
    `   ${chalk.grey.italic("Tip: ")} ${chalk.blue.italic("cmd/ctrl + click")} ${chalk.grey.italic("on the links above")}`,
    '',
    `   ${chalk.grey.italic("</> with ❤ by")} ${chalk.magenta.italic("@Sp0ne")}`,
    '',
].join("\n");

console.log(tip);

