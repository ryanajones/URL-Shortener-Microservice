<h1 align="center">@abhijithvijayan/eslint-config-airbnb</h1>
<p align="center">Airbnb's ESLint config with optional TypeScript support</p>
<div align="center">
  <a href="https://www.npmjs.com/package/@abhijithvijayan/eslint-config-airbnb">
    <img src="https://img.shields.io/npm/v/@abhijithvijayan/eslint-config-airbnb" alt="NPM" />
  </a>
  <a href="https://travis-ci.com/abhijithvijayan/eslint-config-airbnb">
    <img src="https://travis-ci.com/abhijithvijayan/eslint-config-airbnb.svg?branch=main" alt="Travis Build" />
  </a>
  </a>
  <a href="https://david-dm.org/abhijithvijayan/eslint-config-airbnb">
    <img src="https://img.shields.io/david/abhijithvijayan/eslint-config-airbnb.svg?colorB=orange" alt="DEPENDENCIES" />
  </a>
  <a href="https://github.com/abhijithvijayan/eslint-config-airbnb/blob/master/license">
    <img src="https://img.shields.io/github/license/abhijithvijayan/eslint-config-airbnb.svg" alt="LICENSE" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20@abhijithvijayan/eslint-config-airbnb%21%20by%20%40_abhijithv%0A%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan/eslint-config-airbnb%0A%0A%23javascript%20%23typescript%20%23eslint%20%23airbnb">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="TWEET" />
  </a>
</div>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>
<hr />

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/@abhijithvijayan/eslint-config-airbnb/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20@abhijithvijayan/eslint-config-airbnb%21%20by%20%40_abhijithv%0A%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan/eslint-config-airbnb%0A%0A%23javascript%20%23typescript%20%23eslint%20%23airbnb) about it.

This is a wrapper for [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base) and [`eslint-config-airbnb-typescript`](https://github.com/iamturns/eslint-config-airbnb-typescript). The purpose behind this wrapper is to expose a javascript module and another typescript module separately for [`@abhijithvijayan/eslint-config`](https://github.com/abhijithvijayan/eslint-config) package. I recommend using the `abhijithvijayan/eslint-config` package itself.

See [this issue](https://github.com/abhijithvijayan/eslint-config/issues/6) for more information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
- [LICENSE](#license)

## Installation

Ensure you have [Node.js](https://nodejs.org) 10 or later installed. Then run the following:

```
# npm
npm install @abhijithvijayan/eslint-config-airbnb

# yarn
yarn add @abhijithvijayan/eslint-config-airbnb
```

## Usage

`.eslintrc.json`

```
{
  "extends": [
    "@abhijithvijayan/eslint-config-airbnb", // or "@abhijithvijayan/eslint-config-airbnb/typescript",
  ],
  "rules": {
    // your overrides
  }
}
```

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/abhijithvijayan/@abhijithvijayan/eslint-config-airbnb/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue [here](https://github.com/abhijithvijayan/@abhijithvijayan/eslint-config-airbnb/issues/new) for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/abhijithvijayan/@abhijithvijayan/eslint-config-airbnb/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22type%3A+bug%22)

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
