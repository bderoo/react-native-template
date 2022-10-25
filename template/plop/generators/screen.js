const fs = require('fs')

/*
prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the name of your screen?',
  }],
 */

module.exports = {
  description: 'generates react native screens',
  prompts: async (inquirer) => {
    const args = process.argv.slice(3)
    let name = args[0]
    let addToExistingStack = args[1]
    let stackName = args[2]

    if (!name) {
      const nameAns = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of your screen?',
      })
      name = nameAns.name
    }

    if (!addToExistingStack) {
      const addToExistingStackAns = await inquirer.prompt({
        type: 'confirm',
        name: 'addToExistingStack',
        message: 'Do you want to add this screen to an existing stack?',
        default: true,
      })
      addToExistingStack = addToExistingStackAns.addToExistingStack
    }

    if (!addToExistingStack) {
      if (!stackName) {
        const stackNameAns = await inquirer.prompt({
          type: 'input',
          name: 'stackName',
          message: 'What is the name of the stack?',
        })
        stackName = stackNameAns.stackName
      }
    }

    if (addToExistingStack) {
      const stackFiles = fs.readdirSync('./src/navigation/stacks')
      const stackNames = stackFiles.map((file) => file.substring(0, file.length - 4))
      if (!stackName || !stackNames.includes(stackName)) {
        if (stackName) {
          console.log(`Stack ${stackName} does not exist`)
        }
        const stackNameAns = await inquirer.prompt({
          type: 'list',
          name: 'stackName',
          message: 'Which stack do you want to add this screen to?',
          choices: stackNames,
        })
        stackName = stackNameAns.stackName
      }
    }

    return {
      name,
      addToExistingStack,
      stackName,
    }
  },
  actions: [
    {
      type: 'add',
      path: 'src/screens/{{firstLowerCase name}}/{{properCase name}}.tsx',
      templateFile: 'plop/templates/screen.hbs',
    },
    {
      type: 'add',
      path: 'src/screens/{{firstLowerCase name}}/styles.ts',
      templateFile: 'plop/templates/styles.hbs',
    },
    {
      type: 'add',
      path: 'src/screens/{{firstLowerCase name}}/index.ts',
      templateFile: 'plop/templates/index.hbs',
    },
    {
      type: 'add',
      path: 'src/screens/{{firstLowerCase name}}/{{properCase name}}.story.tsx',
      templateFile: 'plop/templates/screenStory.hbs',
    },
    {
      type: 'add',
      path: 'src/localization/en/{{firstLowerCase name}}Screen.ts',
      templateFile: 'plop/templates/translationScreenFile.hbs',
    },
    {
      type: 'modify',
      path: 'src/localization/localization.ts',
      transform: async (content, data) => {
        const ts = require('typescript')
        const { ESLint } = require('eslint')
        const fileNode = ts.createSourceFile(
          'src/localization/localization.ts',
          fs.readFileSync('src/localization/localization.ts', 'utf8'),
          ts.ScriptTarget.Latest,
        )
        const addImport = (context) => (rootNode) => {
          const { factory } = context
          return factory.updateSourceFile(rootNode, [
            factory.createImportDeclaration(
              undefined,
              undefined,
              factory.createImportClause(
                false,
                undefined,
                factory.createIdentifier(`${data.name}TranslationsEN`),
              ),
              factory.createStringLiteral(`@localization/en/${data.name}Screen`),
            ),
            ...rootNode.statements,
          ])
        }

        const addNameSpace = (context) => (rootNode) => {
          const { factory } = context
          const visit = (node) => {
            if (ts.isVariableStatement(node)) {
              const declaration = node.declarationList.declarations[0]
              if (declaration.name.escapedText === 'namespaces') {
                return factory.updateVariableStatement(
                  node,
                  node.modifiers,
                  factory.updateVariableDeclarationList(
                    node.declarationList,
                    [
                      factory.updateVariableDeclaration(
                        declaration,
                        declaration.name,
                        declaration.exclamationToken,
                        declaration.type,
                        factory.createAsExpression(
                          factory.updateArrayLiteralExpression(
                            declaration.initializer.expression,
                            [
                              ...declaration.initializer.expression.elements,
                              factory.createStringLiteral(data.name),
                            ],
                          ),
                          factory.createTypeReferenceNode(
                            factory.createIdentifier('const'),
                            undefined,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              }
              return node
            }
            return ts.visitEachChild(node, visit, context)
          }
          return ts.visitNode(rootNode, visit)
        }

        const addResource = (context) => (rootNode) => {
          const { factory } = context
          const visit = (node) => {
            if (ts.isVariableStatement(node)) {
              const declaration = node.declarationList.declarations[0]
              if (declaration.name.escapedText === 'resources') {

                return factory.updateVariableStatement(
                  node,
                  node.modifiers,
                  factory.updateVariableDeclarationList(
                    node.declarationList,
                    [
                      factory.updateVariableDeclaration(
                        declaration,
                        declaration.name,
                        declaration.exclamationToken,
                        declaration.type,
                        factory.createAsExpression(
                          factory.updateObjectLiteralExpression(
                            declaration.initializer.expression,
                            declaration.initializer.expression.properties.map((prop) => {
                              if (prop.name.escapedText === 'en') {
                                return factory.updatePropertyAssignment(
                                  prop,
                                  prop.name,
                                  factory.createObjectLiteralExpression(
                                    [
                                      ...prop.initializer.properties,
                                      factory.createPropertyAssignment(
                                        factory.createStringLiteral(data.name),
                                        factory.createIdentifier(`${data.name}TranslationsEN`),
                                      ),
                                    ],
                                  ),
                                )
                              }
                              return prop
                            }),
                          ),
                          factory.createTypeReferenceNode(
                            factory.createIdentifier('const'),
                            undefined,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              }
              return node
            }
            return ts.visitEachChild(node, visit, context)
          }
          return ts.visitNode(rootNode, visit)
        }

        const result = ts.transform(fileNode, [addImport, addNameSpace, addResource])
        const printer = ts.createPrinter()
        const out = printer.printFile(result.transformed[0])
        const eslint = new ESLint({ fix: true })
        const results = await eslint.lintText(out)
        return results[0].output
      },
    },
    {
      type: 'append',
      path: 'src/navigation/index.ts',
      pattern: /(?=\n\s+\/\/ ROOTS APPEND)/,
      template: '  {{properCase name}} = \'{{properCase name}}\',',
    },
    function addOrCreateStack(answers, data) {
      console.log('answers', answers)
      console.log('data', data)
    }
    /*
  {
    type: 'append',
    path: 'src/navigation/index.ts',
    pattern: /(?=\n\s+\/\/ ROOTS APPEND)/,
    template: '  {{properCase name}} = \'{{properCase name}}\',',
  },
  {
    type: 'append',
    path: 'src/navigation/BaseNavigator.tsx',
    pattern: /(?=\n\nconst Stack)/,
    template: 'import {{properCase name}} from \'@/screens/{{name}}\'',
  },
  {
    type: 'append',
    path: 'src/navigation/BaseNavigator.tsx',
    pattern: /(?=\n\s+<\/Stack.Navigator>)/,
    template: '      <Stack.Screen\n'
      + '        name={Roots.{{properCase name~}} }\n'
      + '        component={ {{~properCase name~}} }\n'
      + '        options={headerOptions(() => null, true)}\n'
      + '      />',
  },
  {
    type: 'append',
    path: 'src/types.ts',
    pattern: /,(?=\n}\n)/,
    template: '  {{properCase name}}: Record<string, unknown>,',
  },
     */
  ],
}
