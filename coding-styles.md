# Rules to follow

### Naming Conventions for variables (for JavaScript and TypeScript)

- Use camelCase for variables and parameters
- Use human-readable names like `userName` or `shoppingCart,` make them descriptive and concise. Examples of bad names are `data` and `value`.
- Don't repeat object context in property names. Instead of `employee.employeeName`, use `employee.name`
- Define and use consistent terminology across the code and docs. Avoid synonyms in code (e.g., don’t mix `user`, `account`, `member` if they refer to the same thing). If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.
- A good name should reflects behavior or role (e.g., `getUser`), higher-level intent/context (e.g., `relocateDeviceAccurately`) and usage expectations (e.g., `isUser` for booleans)
- Avoid Hungarian notation unless it communicates clear DOM-related intent (`elHeader`, `$header`)
- Standardize function names using specific verbs
  - `get`: synchronous data access (`getFullName`)
  - `set`: assigning values (`setUser`)
  - `reset`: restore defaults (`resetCounter`)
  - `fetch`: async retrieval (`fetchData`)
  - `remove`: temporary removal (`removeItem`)
  - `delete`: permanent deletion (`deleteUser`)
  - `handle`: event handlers (`handleClick`)
- **Avoid overly long names**: aim for a balance between clarity and conciseness

### Naming Conventions for SQL constructs

- Table names should be clear, refer to data, lowercase and use underscores (es. `card_num`, `member_year`)
- Filed names should be singular, lowercase and use underscores (es. `name`, `total_fine`)

### JavaScript / Typescript code style

- Avoid clever constructs and prefer simplicity, but accept some deviations for performance or practicality when necessary
- Use `const` by default; use `let` only when reassignment is necessary; avoid using `var`
- Use template literals string interpolation (`Hello ${name}`) instead of string concatenation
- Prefer expression-bodied members for simple properties and methods
- Avoid magic numbers and strings — extract to constants/enums
- Follow the Law of Demeter: limit knowledge of object internals, avoid chained access (`a.b().c()`) and expose only needed information via clear, narrow APIs
- Use ES modules (import/export) syntax, not CommonJS (require), with `.js` file extensions in import paths
- Use named exports only; avoid default exports
- Destructure imports when possible (eg. `import { foo } from 'bar'`)
- Prevent cyclic dependencies between modules
- Use the nullish coalescing operator ?? instead of the logical OR || when assigning default values
- Use underscore prefix with parameters that need to exist, but don’t need to be used
- Using TypeScript, group related values into a well-named object (like `location`); this improves the **semantic clarity** of the code. For example instead of juggling raw, context-free values (`x`, `y`), define a meaningful abstraction (`Location`) that makes the design more understandable, reusable, and robust

```
  type Location = {
    x: number;
    y: number;
  };

  function getLocation(): Location {
    // ...
  }
```

### Functions code style

- Prefer functional style over object oriented style
- Each function should have a single responsibility, meaning that it should do one thing and do it well.
- Each function should have a clear and descriptive name that reflects its purpose and behavior.
- Each function should have a minimal and consistent number of parameters, ideally three or fewer, with each parameter well-defined and typed. If more are needed, consider grouping related parameters into an object or breaking the function into smaller parts.
- Each function should have a clear and explicit return value that is well-defined and typed.
- Each function should be documented, using comments or annotations that explain its functionality and usage
- **Use Pure functions**: Aim to write functions that don’t change or depend on external states, such as global variables. These functions always produce the same output for the same inputs
- **Keep data immutable**: When dealing with data, consider creating new versions of objects or arrays instead of modifying existing ones directly
- Never mutate parameters: manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller
- Try to avoid deeply nested code structures and suggests techniques like **extraction (** isolating a portion of code and moving it to its own function) and **inversion (**using guard clauses handling unhappy path – like errors, exceptions and edge conditions – upfront**)** to flatten complex logic.
  - with inversion I mean instead of nesting code for the “happy path” inside multiple layers, invert the conditions:
    - Handle edge cases first
    - Return early when a condition fails
    - Let the main logic flow naturally after the guards
- To avoid nested logic use:
  - **Dependency Injection**: pass dependencies explicitly as function parameters instead of accessing shared or global state.
  - **Extract Method**: pull out tightly coupled blocks of logic into their own functions to increase reuse and improve clarity. The objective is to isolate logic into small, reusable, and testable functions that reduce code volume and complexity. But do not overdo it and **balance in Abstraction**: breaking code into small functions is beneficial, but overdoing it can lead to loss of cohesion and increased complexity
- Use named function expressions instead of function declarations
  ```typescript
  // good
  // lexical name distinguished from the variable-referenced invocation(s)
  function short() {
    // ...
  }
  ```
- Use Default Parameters Instead of Short-Circuiting
- Never reassign parameters

### Error Handling Principles

- Prefer **explicit error handling** over silent failures — use try/catch, guard clauses, and clear error messages.
- Always fail fast and loudly in unexpected states to prevent silent corruption or undefined behavior.
- Return meaningful error payloads in APIs (include `message`, `code`, `context` where relevant).

### Comments

- Favor self-documenting code; write comments only when necessary to explain _why_ something is done, not _what_ is done.
- Use comments to capture reasoning, constraints, or decisions that would not be obvious to a future reader.
- Write comments in clear English with proper punctuation. Keep them concise and relevant.
