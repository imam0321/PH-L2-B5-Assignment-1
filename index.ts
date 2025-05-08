//
function formatString(input: string, toUpper?: boolean): string {
  if (input && toUpper === true) {
    return input.toUpperCase();
  } else if (input && toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

formatString("hello");
formatString("Hello", true);
formatString("Hello", false);

//
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.0 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);

//
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

concatenateArrays([1, 2], [3, 4], [5]);
concatenateArrays(["a", "b"], ["c"]);

//
class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    (this.make = make), (this.year = year);
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2000, "CHR");
myCar.getInfo();
myCar.getModel();

//
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

processValue("hello");
processValue(10);

//
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((maxPrice, currentPrice) =>
    currentPrice.price > maxPrice.price ? currentPrice : maxPrice
  );
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);

//
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

getDayType(Day.Monday);
getDayType(Day.Sunday);

//
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0) {
        resolve(n * n);
      } else {
        reject("Error: Negative number not allowed");
      }
    }, 1000);
  });
}

squareAsync(10).then(console.log);
squareAsync(-3).catch(console.error);
