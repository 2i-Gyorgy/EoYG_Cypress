declare namespace Cypress {
  import fs from "fs";
  type CreateDirOptions =
    | fs.Mode
    | (fs.MakeDirectoryOptions & {
        recursive?: false | undefined;
      });

  type DeleteDirOptions = fs.RmDirOptions;

  type ReadFileOptions = {
    encoding?: null | undefined;
    flag?: string | undefined;
  };

  type ReadDirOptions =
    | BufferEncoding
    | {
        encoding: BufferEncoding | null;
        withFileTypes?: false | undefined;
        recursive?: boolean | undefined;
      };

  interface Chainable {
    fsFileExists(path: string): Chainable<boolean>;
    fsReadFile(path: string, options?: ReadFileOptions): Chainable<any>;
    fsWriteFile(
      path: string,
      content: string,
      options: fs.WriteFileOptions
    ): Chainable<void>;
    fsDeleteFile(path: string): Chainable<void>;
    fsCreateDirectory(
      path: string,
      fileOptions?: CreateDirOptions
    ): Chainable<void>;
    fsDeleteDirectory(
      path: string,
      fileOptions?: DeleteDirOptions
    ): Chainable<void>;
    fsCopyFile({
      path,
      newPath,
      mode,
    }: {
      path: string;
      newPath: string;
      mode?: number;
    }): Chainable<void>;
    fsChmod({ path, mode }: { path: string; mode: number }): Chainable<void>;
    fsAppendFile({
      path,
      content,
    }: {
      path: string;
      content: string;
    }): Chainable<void>;
    fsRename({
      path,
      newPath,
    }: {
      path: string;
      newPath: string;
    }): Chainable<void>;
    fsDirExists(path: string): Chainable<boolean>;
    fsReadDir(path: string, options?: ReadDirOptions): Chainable<string[]>;
    fsIsDirectory(path: string): Chainable<boolean>;
    fsIsFile(path: string): Chainable<boolean>;
  }
}
