Performy
========

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [Introduction](#introduction)
- [Installation](#installation)
    - [NPM](#npm)
- [Basic usage](#basic-usage)
    - [Importing](#import-module)
    - [API](#api)
        - [ExecuteOnce](#executeonce)
        - [ExecuteAvg](#executeavg)
- [License](#license)

## Introduction
Measures time of passed functions with their arguments and returns the time of function working in milliseconds.

## Installation
### NPM
```bash
npm install performy --save
```
## Basic usage
### Importing: 

```javascript
import perfomy from 'perfomy';
```

### API:
#### ExecuteOnce:
Will display the time of function working.

##### Options:
* `function` - Body of the function
* `params` - Array or list of params if it exists

```javascript
const testFetchData = () => {
    fetch('http://testurl.com')
    .then((resp) => resp.json())
    .then(function(data) {
        let data = data.results;
    });
}
// Performance test running
performy.executeOnce(testFetchData);
```
###### Expected result:

```text
----- [performance test begin] -----
Function "mathTest" fulfilled in 9.7 ms
 ----- [performance test end] -----
```

#### ExecuteAvg:
Will display the average time of N-times of function working.

##### Options:
* `function` - Body of the function
* `times` - How many times function will be executed
* `params` - Array or list of params if it exists

```javascript
const testMath = (a,b) => ((a^b) * (a^b) * (a^b)) / 100;
// Performance test running
performy.executeAvg(testMath, 20, [112, 233]);
```
###### Expected result:

```text
----- [performance test begin] -----
Function "mathTest" fulfilled in 1.1 ms
 ----- [performance test end] -----
```
License
-------

The MIT License (MIT)

Copyright (c) 2018 Daniil Sydorenko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
