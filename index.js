const fs = require('fs');
const chalk = require('chalk');
const error = chalk.bold.red;

if (process.argv.length < 3) {
  console.log(error('please input the path of iconfont files'));
  process.exit(1);
}

//const path = './data/font';
const path = process.argv[2];

const woffPath = `${path}/iconfont.woff`;
const iconPath = `${path}/iconfont.css`;

const wxssPath = `${path}/iconfont.wxss`;

if (!fs.existsSync(woffPath || !fs.existsSync(iconPath))) {
  console.log(error('no woff or iconfont.css exit'));
  process.exit(1);
}

const base64Data = fs.readFileSync(woffPath, 'base64');

fs.writeFileSync('base64', base64Data);

fs.copyFileSync(iconPath, wxssPath);

let wxssData = fs.readFileSync(wxssPath, 'utf8');
wxssData = wxssData.replace(/\@font-face\s*{[\s\S]*?}/,
  `@font-face {font-family: "iconfont";
  src: url('data:application/x-font-woff;charset=utf-8;base64,${base64Data}') format('woff');
}`);

fs.writeFileSync(wxssPath, wxssData);
console.log(chalk.green('finished!'));
