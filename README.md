## What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are used to describe the structure of data. They may seem similar, but there are key differences that become important in larger projects.

#### 1. Interfaces Can Be Declared More Than Once (Merged Automatically)

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: "Imam",
  age: 25,
};
```

In this case, both declarations are merged, and the Person interface ends up with both name and age.

On the other hand, type aliases do not support merging. If the same type name is declared more than once, TypeScript will show an error.

#### 2. Types Support Union and Advanced Composition

Another major difference is that type allows more advanced composition, such as union types, intersections, and tuples. This flexibility makes type powerful in complex scenarios.

```
type Admin = {
  role: "admin";
};

type User = {
  role: "user";
};

type Role = Admin | User;

const person: Role = {
  role: "admin",
};
```

This kind of union type is only possible with type, not with interface.

Both are important tools in TypeScript, and choosing the right one depends on the situation.

## Provide an example of using union and intersection types in TypeScript.

#### 1. Union Type

A union type allows a value to be one of several types. It's defined using the | (OR) operator.

```
type Bird = {
  species: "bird";
  canFly: boolean;
};
type Fish = {
  species: "fish";
  canSwim: boolean;
};

type Animal = Bird | Fish;

const sparrow: Animal = {
  species: "bird",
  canFly: true,
};
const salmon: Animal = {
  species: "fish",
  canSwim: true,
};
```

In this case, Animal can either be a Bird or a Fish, but not both at once.

#### 2. Intersection Type

An intersection type combines multiple types into one. It’s defined using the & (AND) operator.

```
type Student = {
  name: string;
  grade: number;
};
type Employee = {
  name: string;
  jobTitle: string;
};

type StudentEmployee = Student & Employee;

const studentEmployee: StudentEmployee = {
  name: "John",
  grade: 10,
  jobTitle: "Tutor",
};
```

Here, StudentEmployee must have both the name, grade from Student and jobTitle from Employee.
