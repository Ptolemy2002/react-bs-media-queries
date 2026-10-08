# React Bootstrap Media Queries
Extends `react-responsive` to provide media queries for Bootstrap breakpoints.

The hooks and classes are not exported as default, so you can import in one of the following ways:
```javascript
// ES6
import {functionName} from '@ptolemy2002/react-bs-media-queries';
// CommonJS
const {functionName} = require('@ptolemy2002/react-bs-media-queries');
```

## Type Reference
```typescript
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type BreakpointComparison = "same" | "min" | "max";
type BSMediaQueryProps = {
    children: React.ReactNode;
    breakpoint: Breakpoint;
    comparison?: BreakpointComparison;
};
```

## Variables
- `breakpoints` - (`Readonly<Omit<Map<Breakpoint, number>, "set">>`) - A map containing each breakpoint and its corresponding pixel value. The "set" method is not available, as this is a read-only map. The keys are ordered from smallest to largest.
- `breakpoints` - (`ReadonlyArray<Breakpoint>`) - An array containing all of the breakpoints in order from smallest to largest.

## Functions
### breakpointToIndex
Returns the index of the breakpoint in the `breakpoints` array and Map or `-1` if the breakpoint is not found.

#### Parameters
- `breakpoint` - (`Breakpoint`) - The breakpoint to find the index of.

#### Returns
`number` - The index of the breakpoint in the `breakpoints` array and Map or `-1` if the breakpoint is not found. `-1` should never be returned if you're using TypeScript.

## Hooks
### useBreakpointQuery
Returns a boolean indicating whether the current breakpoint compares to the breakpoint passed in in the way specified.

#### Parameters
- `breakpoint` - (`Breakpoint`) - The breakpoint to compare to.
- `comparison` - (`BreakpointComparison`) - The comparison to make. Defaults to `"same"`.

#### Returns
`boolean` - Whether the current breakpoint compares to the breakpoint passed in in the way specified.

### useCurrentBreakpoint
Returns the current breakpoint, or `xs` if the breakpoint is not found (the only time this should happen is if the width is somehow less than 0, which should be impossible).

#### Parameters
None

#### Returns
`Breakpoint | null` - The current breakpoint, or `null` if the breakpoint is not found.

### useCurrentBreakpointIndex
Returns the index of the current breakpoint in the `breakpoints` array and Map or `0` if the breakpoint is not found (the only time this should happen is if the width is somehow less than 0, which should be impossible).

#### Parameters
None

#### Returns
`number | null` - The index of the current breakpoint in the `breakpoints` array and Map or `0` if the breakpoint is not found.

## Components
### BSMediaQuery
A component that renders its children only if the current breakpoint compares to the breakpoint passed in in the way specified.

#### Parameters
- `children` - (`React.ReactNode`) - The children to render if the current breakpoint compares to the breakpoint passed in in the way specified.
- `breakpoint` - (`Breakpoint`) - The breakpoint to compare to.
- `comparison` - (`BreakpointComparison`) - The comparison to make. Defaults to `"same"`.

### Returns
`React.ReactNode` - The children if the current breakpoint compares to the breakpoint passed in in the way specified.

## Peer Dependencies
- `react^18.3.1`
- `react-dom^18.3.1`
- `react-responsive^10.0.0`

## Commands
The following commands exist in the project:

- `npm run build` - Builds the library
- `npm run dev` - Starts the development server
- `npm run lint` - Lints the project
- `npm run uninstall` - Uninstalls all dependencies for the library and clears the cache
- `npm run reinstall` - Uninstalls, clears the cache, and then reinstalls all dependencies for the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump