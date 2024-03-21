import { defineDb, column, defineTable } from 'astro:db';

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {Comment}
});
