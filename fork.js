require('shelljs/global');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const config = require('./config.json');
const pkg = require('./package.json');
const _pkg = require('./package.json');

_pkg.name = config.name || pkg.name;
_pkg.version = config.version || pkg.version;
_pkg.description = config.description || pkg.description;
_pkg.author = config.author || pkg.author;

let output = config.output || `../${_pkg.name}`;
let outputPath = path.resolve(__dirname, output);
mkdir('-p', outputPath);

function copyFile (srcPath, targetPath) {
    fs.copyFileSync(srcPath, targetPath);
    console.log('copy file ', srcPath, ' to ', targetPath);
}

function copyRootFile (fileName) {
    copyFile(`./${fileName}`, `${outputPath}/${fileName}`);
}

function fixKeyword (filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, content.replace(/ui-base-component-framework-layout/g, `ui-${_pkg.name}-layout`), 'utf8');
}

glob.sync('./src/**/*.*').concat(glob.sync('./build/**/*.*')).forEach(filePath => {
    let inputAbsolutePath = path.resolve(filePath);
    let outputFilePath = filePath.replace(/\//g, '\\').replace(/./, '');
    let outputAbsoluteFilePath = `${outputPath}${outputFilePath}`;
    let parentAbsolutePath = path.resolve(outputAbsoluteFilePath, '..');
    mkdir('-p', parentAbsolutePath);
    copyFile(inputAbsolutePath, outputAbsoluteFilePath);
    const regex = /.(vue|scss|css)/g;
    if (regex.test(filePath)) {
        fixKeyword(outputAbsoluteFilePath);
    }
});

copyRootFile('package.json');
copyRootFile('.babelrc');
copyRootFile('.gitignore');
const PACKAGE_PATH = `${outputPath}/package.json`;
fs.writeFileSync(PACKAGE_PATH, JSON.stringify(_pkg), 'utf8');
