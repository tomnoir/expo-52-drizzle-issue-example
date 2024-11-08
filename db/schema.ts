import { relations } from 'drizzle-orm'
import {
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
  unique,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'

export const users = sqliteTable(
  'users',
  {
    id: integer('id', { mode: 'number' })
    .notNull()
    .unique()
    .primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),

  }
)