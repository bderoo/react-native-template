# Components
In this folder you can find examples of how to implement components in your application.

## Creation
You can create a new component using the command `yarn gen:component`, it will generate a folder in the `src/components` directory with the following files:
- ComponentName.tsx
  - The component implementation itself
- ComponentName.story.tsx
  - The storybook story for the component that you can use to test the components' style and behavior
  - You can also use it to document the component (show different states of the component, etc.)
- styles.ts
  - The styles for the component, please don't fill the component itself with styles
- index.ts
  - The index file that exports the component, so you can import it using `import { ComponentName } from '@components/componentName'`
  - You should not edit this file
- ComponentName.test.tsx
  - The test file for the component, you can use it to test the component's behavior

Out of all the created files, .story and .test are optional, you can delete them if you don't need them.

## Best practices
- Separate the component's logic from the styles
- Try to maintain pure components separated from the ones that manage state
- Try to keep the components as simple as possible
- Try to keep the components as reusable as possible
