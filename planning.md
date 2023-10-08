# Video of Typescript usage

https://youtu.be/SqcY0GlETPk


# Instruction to ChatGPT 4

## Typescript
```
make a list of  typescript constructs. 
Example: 
# for-of
 `for (let o of foo)  { ... }`
```
 
Certainly, here's a list of some TypeScript constructs:

### Variables
- `let x: number = 10;`
- `const y: string = "hello";`

### Arrays
- `let arr: number[] = [1, 2, 3];`

### Tuples
- `let tuple: [string, number] = ['name', 10];`

### Enums
- `enum Color { Red, Green, Blue }`

### Functions
- `function add(a: number, b: number): number { return a + b; }`

### Arrow Functions
- `const add = (a: number, b: number): number => a + b;`

### Interfaces
- `interface Point { x: number, y: number }`

### Classes
- `class MyClass { ... }`

### Generics
- `function identity<T>(arg: T): T { return arg; }`

### Union Types
- `let val: number | string = 1;`

### Type Alias
- `type Point = { x: number, y: number };`

### Type Assertion
- `<string>someValue`
- `someValue as string`

### Decorators
- `@decorator`

### for-of
- `for (let o of foo)  { ... }`

### for-in
- `for (let key in obj) { ... }`

### if-else
- `if (condition) { ... } else { ... }`

### switch-case
- `switch (expression) { case x: ... break; }`

### Optional Chaining
- `obj?.property`

### Nullish Coalescing
- `x ?? y`

### Spread Operator
- `let arr = [...anotherArr];`

### Destructuring
- `const { x, y } = point;`
- `const [first, ...rest] = arr;`

This is not an exhaustive list, but it should cover most of the common constructs you'll encounter.


## JSX

```
Make a similar list of JSX constructs
```

Sure, here's a list of some common JSX constructs:

### Elements
- `<div></div>`
  
### Self-Closing Elements
- `<input />`

### Components
- `<MyComponent />`

### Nested Components
- `<Parent><Child /></Parent>`

### Fragment
- `<>...</>`

### Attributes/Props
- `<div className="myClass"></div>`

### Inline Styles
- `<div style={{ color: 'red' }}></div>`

### Expression Interpolation
- `<div>{variable}</div>`

### Conditional Rendering
- `{condition && <Component />}`
- `{condition ? <Component /> : null}`

### Iterating Over Lists
- `{array.map(item => <Component key={item.id} />)}`

### Event Handling
- `<button onClick={handleClick}></button>`

### Controlled Components
- `<input value={value} onChange={handleChange} />`

### Refs
- `<div ref={myRef}></div>`

### Comments
- `{/* This is a comment */}`

### Spread Attributes
- `<Component {...props} />`

This isn't an exhaustive list but should give you a good overview of the common JSX constructs.
