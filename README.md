# Drizzle React `contextType` Example

Look at `App.js` to see how you should wrap your top-level component with a `Provider`.

Then, in any child component in the component tree, you can have a class-based component like `MyComponent` to easily access the drizzle context passed in by the provider. There is no consumer component required in this pattern.

Run `npm start` to launch, and look at the console.