import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: process.env.PROJECT_TITLE,

  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET_ID,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
