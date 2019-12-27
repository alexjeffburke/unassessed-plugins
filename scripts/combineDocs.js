#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const DOCS_DIR = path.join(__dirname, "..", "documentation");
const PACKAGES_DIR = path.join(__dirname, "..", "packages");

for (const dir of fs.readdirSync(PACKAGES_DIR)) {
  if (dir.startsWith(".")) continue;
  const packageDocsPath = path.join(PACKAGES_DIR, dir, "documentation");
  const dirWithoutSuffix = dir.replace("unassessed-plugin-", "");
  const combinedDocsPath = path.join(DOCS_DIR, dirWithoutSuffix);
  fs.emptyDirSync(combinedDocsPath);
  fs.copySync(packageDocsPath, combinedDocsPath);
}
