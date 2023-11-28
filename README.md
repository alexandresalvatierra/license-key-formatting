<h1 align="center">License Key Formatting - Code Challenge</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple code challenge solving using Javascript.

## Challenge

Given a string S that consists of only alphanumeric characters and dashes. The string is separated into N + 1 groups by N dashes. Also given an integer K.

We want to reformat the string S, such that each group contains exactly K characters, except for the first group, which could be shorter than K but still must contain at least one character. Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted string.

Examples:

> Input: S = "5F3Z-2e-9-w", K = 4<br>
> Output: "5F3Z-2E9W"<br>
> Explanation: The string S has been split into two parts, each part has 4 characters.
> Note that two extra dashes are not needed and can be removed.<br><br>
> Input: S = "2-5g-3-J", K = 2<br>
> Output: "2-5G-3J"<br>
> Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above

## Explanation

```javascript
function reformatString(S, K) {
  // Remove dashes and convert to uppercase
  const formattedString = S.replace(/-/g, "").toUpperCase();

  // Calculate the length of the first group after reformatting.
  const firstGroupLength = formattedString.length % K || K;

  // Initialize the result string with the first group
  let result = formattedString.slice(0, firstGroupLength);

  // Iterate through the remaining characters and add a dash after every K characters
  for (let i = firstGroupLength; i < formattedString.length; i += K) {
    result += "-" + formattedString.slice(i, i + K);
  }

  // Return the final reformatted string
  return result;
}
```

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
