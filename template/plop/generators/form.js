const fs = require('fs')

module.exports = {
  description: 'generates react native forms',
  prompts: async (inquirer) => {
    const nameAns = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'What is the name of your form?',
    })
    let enoughFields = false
    const fields = []
    while (!enoughFields) {
      const fieldNameAns = await inquirer.prompt({
        type: 'input',
        name: 'fieldName',
        message: 'What is the name of your field?',
      })
      const fieldArchetypeAns = await inquirer.prompt({
        type: 'list',
        name: 'fieldArchetype',
        message: 'What is the type of your field?',
        choices: [
          'string',
          'password',
          'number',
          'date',
        ],
      })

      let fieldTypeAns = ''
      switch (fieldArchetypeAns.fieldArchetype) {
      case 'number': fieldTypeAns = 'number'; break
      case 'date': fieldTypeAns = 'date'; break
      default: fieldTypeAns = 'string'; break
      }

      let initialValue = ''
      switch (fieldTypeAns) {
      case 'number': initialValue = '0'; break
      case 'boolean': initialValue = 'false'; break
      case 'date': initialValue = 'new Date()'; break
      case 'object': initialValue = '{}'; break
      case 'array': initialValue = '[]'; break
      default: initialValue = "''"
      }

      let componentName = ''
      switch (fieldArchetypeAns.fieldArchetype) {
      case 'password': componentName = 'PasswordInputFormField'; break
      default: componentName = 'TextInputFormField'; break
      }

      let yupType = ''
      switch (fieldTypeAns) {
      case 'number': yupType = 'number'; break
      case 'date': yupType = 'date'; break
      case 'boolean': yupType = 'bool'; break
      case 'object': yupType = 'object'; break
      case 'array': yupType = 'array'; break
      default: yupType = 'string'; break
      }

      fields.push({
        field: {
          name: fieldNameAns.fieldName,
          type: fieldTypeAns,
          archetype: fieldArchetypeAns.fieldArchetype,
          initialValue,
          componentName,
          yupType,
        },
      })
      const addMoreAns = await inquirer.prompt({
        type: 'confirm',
        name: 'addMore',
        message: 'Do you want to add more fields?',
      })
      if (!addMoreAns.addMore) {
        enoughFields = true
      }
    }
    const orderedComponentImports = fields
      .map((i) => i.field.componentName)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
    return {
      ...nameAns,
      orderedComponentImports,
      fields,
    }
  },
  actions: [
    {
      type: 'add',
      path: 'src/forms/{{firstLowerCase name}}/{{properCase name}}Form.tsx',
      templateFile: 'plop/templates/form.hbs',
    },
    {
      type: 'add',
      path: 'src/forms/{{firstLowerCase name}}/schema.ts',
      templateFile: 'plop/templates/schema.hbs',
    },
    {
      type: 'modify',
      path: 'src/schemas/Fields.ts',
      transform: async (content, data) => {
        const ts = require('typescript')
        const { ESLint } = require('eslint')
        const node = ts.createSourceFile(
          'src/schemas/Fields.ts',
          fs.readFileSync('src/schemas/Fields.ts', 'utf8'),
          ts.ScriptTarget.Latest,
        )

        const add = (context) => (rootNode) => {
          const visit = (node) => {
            const { factory } = context
            if (ts.isObjectLiteralExpression(node)) {
              // found an object, checking its fields and adding new ones
              const oldFields = node.properties
                .map((i) => i.name.escapedText)
              const newFields = data.fields.map((i) => i.field.name)
              const fieldsToAdd = newFields
                .filter((i) => !oldFields.includes(i))
              if (fieldsToAdd.length > 0) {
                const newProperties = fieldsToAdd
                  .map((i) => factory.createPropertyAssignment(
                    factory.createIdentifier(i),
                    factory.createStringLiteral(i),
                  ))
                return factory.updateObjectLiteralExpression(node, [
                  ...node.properties,
                  ...newProperties,
                ])
              }
              return node
            }
            return ts.visitEachChild(node, visit, context)
          }
          return ts.visitNode(rootNode, visit)
        }

        const result = ts.transform(node, [add])
        const printer = ts.createPrinter()
        const out = printer.printFile(result.transformed[0])

        const eslint = new ESLint({ fix: true })
        const results = await eslint.lintText(out)

        return results[0].output
      },
    },
  ],
}
