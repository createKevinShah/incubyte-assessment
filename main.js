const sum = (arr) => {
  return arr.reduce((acc, current) => acc + current, 0);
};

const findNegatives = (arr) => {
  return arr.filter((num) => num < 0);
};

const convertToInt = (arr) => {
  return arr.map((num) => parseInt(num));
};

const add = (numbers) => {
  // empty string corresponds to 0
  if (numbers === "") return 0;

  let numberArray = [];

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");

    // finding the delimiter
    const delimiter = numbers.slice(2, delimiterEndIndex);

    // removing the unnecessary part of the string input (//[delimiter]\n)
    numbers = numbers.slice(delimiterEndIndex + 1);

    numberArray = numbers.split(delimiter);
  } else {
    // replacing \n character with comma
    numbers = numbers.replace(/\n/g, ",");
    numberArray = numbers.split(",");
  }

  // convert to integers
  const intArray = convertToInt(numberArray);

  // find negative numbers
  const negatives = findNegatives(intArray);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  // calculating the sum
  const total = sum(intArray);

  return total;
};
