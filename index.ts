// Problem 1:

const formatString = (input: string, toUpper?: boolean): string => {
  if (input && toUpper === true) {
    return input.toUpperCase();
  } else if (input && toUpper === false) {
    return input.toLowerCase();
  }
};
console.log(formatString("imam", false));
