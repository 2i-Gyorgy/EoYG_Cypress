# Cypress-fs

Cypress-fs is a utility package that extends the capabilities of [Cypress](https://www.cypress.io/) for working with the file system. It provides a set of custom Cypress commands for performing file and directory operations, making it easier to interact with files in your end-to-end tests.

## Installation

You can install Cypress-fs using npm or yarn. Here's how to do it:

### npm

```bash
npm install cypress-fs --save-dev
```

### yarn

```bash
yarn add --dev cypress-fs
```

## Extra setup

### Importing the commands

To use Cypress-fs, you need to import the commands into your Cypress project. To do this, add the following line to your project's `cypress/support/e2e.ts` file:

```ts
import "cypress-fs";
```

### Adding Required Dependencies

Cypress-fs requires some cypress tasks to be registered in order to work. To do this, update your cypress.config.ts to look like the following:

```ts
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./node_modules/cypress-fs/plugins/index.js")(on, config);
    },
  },
});
```

## Usage

### Commands

Cypress-fs provides the following custom Cypress commands:

#### `cy.fsCopyFile({ path, newPath, mode })`

Copies a file from one location to another.

- `path` - The path to the file to copy.
- `newPath` - The path to the new file.
- `mode` - The mode to apply to the new file,refer to [fs](https://nodejs.org/api/fs.html) for more details.

#### `cy.fsFileExists(path)`

Checks if a file exists.

- `path` - The path to the file to check.

#### `cy.fsReadFile(path, options)`

Reads the contents of a file.

- `path` - The path to the file to read.
- `options` - The options to use when reading the file.

#### `cy.fsWriteFile(path, content, options)`

Writes content to a file.

- `path` - The path to the file to write to.
- `content` - The content to write to the file.
- `options` - The options to use when writing the file.

#### `cy.fsDeleteFile(path)`

Deletes a file.

- `path` - The path to the file to delete.

#### `cy.fsCreateDirectory(path, options)`

Creates a directory.

- `path` - The path to the directory to create.
- `options` - The options to use when creating the directory.

#### `cy.fsDeleteDirectory(path, options)`

Deletes a directory.

- `path` - The path to the directory to delete.
- `options` - The options to use when deleting the directory.

#### `cy.fsChmod({ path, mode })`

Changes the permissions of a file.

- `path` - The path to the file to change the permissions of.
- `mode` - The mode to apply to the file, refer to [fs](https://nodejs.org/api/fs.html) for more details.

#### `cy.fsAppendFile({ path, content })`

Appends content to a file.

- `path` - The path to the file to append to.
- `content` - The content to append to the file.

#### `cy.fsRename({ path, newPath })`

Renames a file.

- `path` - The path to the file to rename.
- `newPath` - The new path for the file.

#### `cy.fsDirExists(path)`

Checks if a directory exists.

- `path` The path to the directory to check.

#### `cy.fsReadDir(path, options)`

Reads the contents of a directory.

- `path` - The path to the directory to read.

#### `cy.fsIsDirectory(path)`

Checks if a path is a directory.

- `path` - The path to check.

#### `cy.fsIsFile(path)`

Checks if a path is a file.

- `path` - The path to check.

### Note

The types used are the same as the ones used by each corresponding method from the [fs](https://nodejs.org/api/fs.html) module.
