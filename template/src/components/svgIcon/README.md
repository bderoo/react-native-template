# Comments
I like the way you are handling the SVG icons. I don't know if there is another way of handling them honestly, without converting the svg xml into react native svg components which is a little bit more complex as not all components are supported from what I know. I would try to separate the files of the icons themselves because I think that as more and more icons are added the file becomes more and more difficult to read. For example what I would do would be a similar approach as for the images. For icons that do not require the color to be changed there is a way to change the way a file is readed through the require function as I had similar problems but with sql files. I provide the example below:
```JS
require.extensions['.sql'] = (module, fileName) => {
  // This is just a require extension that allows us to import files that
  // have an sql extension and use them as strings. This was implemented
  // in order to be able to write the code used for the migrations in
  // files that support the correct syntaxis for such language and
  // especially to be able to import them otherwise they will throw
  // a syntax error as it tries to parse it as js file.
  // As a guideline I would leave the SQL generated automatically by
  // typeorm as a hardcoded string, as generally we won't be modifying it.
  // The code that we have to write manually I would leave it into a sql file
  // even if it's extremely short as it helps us understand more easily the origin of the code.
  // This is used here as an example. Such code will have to be copied and pasted into
  // the migration that needs to be run with an sql file. I don't know how to inject it
  // into the typeorm cli.
  module.exports = fs.readFileSync(fileName, 'utf-8');
};
const mySqlFileAsString = require('./sql/CompleteStepUniqueNotNullIndex.sql');
```