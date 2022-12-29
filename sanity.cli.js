import { defineCliConfig } from 'sanity/cli'
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env)

export default defineCliConfig({
  api: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET_ID
  }
})
