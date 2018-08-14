# Pika web crawler test 

[![Version](https://img.shields.io/npm/v/pika-web-crawler-test.svg)](https://npmjs.org/package/pika-web-crawler-test)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7a5d465f487e4f55a8e50e8201cc69b1)](https://www.codacy.com/project/antonio.marin.jimenez/pika-web-crawler-test/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pikamachu/pika-web-crawler-test&amp;utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://img.shields.io/travis/pikamachu/pika-web-crawler-test/master.svg)](https://travis-ci.org/pikamachu/pika-web-crawler-test)

## Introduction

Web crawler test script for web testing with snapshot comparison.

## Installing / Getting started 

To install the package execute:
```
npm install -g pika-web-crawler-test
```

After installation, tou will have access to the 'pika-web-crawler-test' binary in your command line.
You can check help with this command:
```
pika-web-crawler-test --help
```

## Developing 
 
### Built With
* [Oclif](https://github.com/oclif/oclif)
* [Headless Chrome Automation tool](https://github.com/graphcool/chromeless)
* [Chrome Launcher](https://github.com/GoogleChrome/chrome-launcher)
* [Cheerio](https://github.com/cheeriojs/cheerio)

### Prerequisites
The following software must be installed
* [Node >= v8](https://nodejs.org/en/)
* [Chrome >= v60](https://www.google.com.mx/chrome/)
* [Git](https://git-scm.com/downloads) - optional

### Folder structure
* root: Contains the README.md, the main configuration to execute the project such as package.json or any other configuration files.
* bin: Contains the application run script.
* src: Contains the source code for application script.
* node_modules: Contains third party JS libraries used in this project

### Setting up Dev

Download the code
```
git clone https://github.com/pikamachu/pika-web-crawler-test.git
cd pika-web-crawler-test
```

Install dependencies
```
npm install
```

Run application help for usage.
```
bin/run --help
```

### Pika commands

All previous command can be executed using pika script

```shell
Usage: pika [command]

where [command] is one of:
   run -> execute application. Use --help argument to see command help.
   format -> auto format project code using prettier.
   publish -> do login and publish package.
```

