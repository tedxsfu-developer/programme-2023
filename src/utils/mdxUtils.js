import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = (str) => path.join(process.cwd(), `src/${str}`)

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = (str) => fs
  .readdirSync(POSTS_PATH(str))
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))