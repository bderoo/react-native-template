module.exports = {
  description: 'generates react native components',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?',
  }],
  actions: [
    {
      type: 'add',
      path: 'src/components/{{firstLowerCase name}}/{{properCase name}}.tsx',
      templateFile: 'plop/templates/component.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{firstLowerCase name}}/styles.ts',
      templateFile: 'plop/templates/styles.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{firstLowerCase name}}/index.ts',
      templateFile: 'plop/templates/index.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{firstLowerCase name}}/{{properCase name}}.story.tsx',
      templateFile: 'plop/templates/componentStory.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{firstLowerCase name}}/{{properCase name}}.test.tsx',
      templateFile: 'plop/templates/componentTest.hbs',
    },
  ],
}
