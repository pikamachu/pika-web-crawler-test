import { expect, test } from "@oclif/test";

import cmd = require("../src");

describe("Test wcrawl script", () => {
  test
    .stdout()
    .do(() => cmd.run(["-f=pikamachu.github", "https://pikamachu.github.io"]))
    .it(
      'Runs web crawler on https://pikamachu.github.io with "pikamachu.github" filter',
      ctx => {
        expect(ctx.stdout).to.contain(
          "Opening url https://pikamachu.github.io and parsing links"
        );
      }
    );
});
