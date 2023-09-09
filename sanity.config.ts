import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'a2bretwk',
  dataset: 'production',
  title: 'Real state',
  apiVersion: '2023-09-09',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config