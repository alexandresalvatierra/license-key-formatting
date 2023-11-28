function reformatString(S, K) {
  const formattedString = S.replace(/-/g, "").toUpperCase();
  const firstGroupLength = formattedString.length % K || K;

  const resultArray = [formattedString.slice(0, firstGroupLength)];

  for (let i = firstGroupLength; i < formattedString.length; i += K) {
    resultArray.push("-", formattedString.slice(i, i + K));
  }

  return resultArray.join("");
}

const input = "5F3Z-2e-9-w";
const key = 4;
const output = reformatString(input, key);
console.log(output); // should return 5F3Z-2E9W

const input2 = "2-5g-3-J";
const key2 = 2;
const output2 = reformatString(input2, key2);
console.log(output2); // should return 2-5G-3J
