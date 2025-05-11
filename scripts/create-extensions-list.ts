#!/usr/bin/env -S deno --allow-read --allow-write
import type { PackageJson } from 'npm:type-fest'

const extensions: { dirname: string, packageJson: PackageJson }[] = []
for (const stat of Deno.readDirSync('./')) {
   if (stat.isDirectory && stat.name.startsWith('pack-')) {
      const packageJsonFile = `./${stat.name}/package.json`
      const packageJson: PackageJson = JSON.parse(Deno.readTextFileSync(packageJsonFile))
      if (!packageJson.name) {
         throw new Error(`Expected packageJson file "${packageJsonFile}" to have property "name"`)
      }
      extensions.push({
         dirname: stat.name,
         packageJson
      })
   }
}
Deno.writeTextFileSync('./extension-list.json', JSON.stringify(extensions, null, '\t'))
