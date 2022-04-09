import { Logger } from "log-lv";
import { Client } from "pg";

export const { PG_USER, PG_HOST, PG_PASSWORD, PG_DATABASE, PG_PORT } =
  process.env;

export const logger = new Logger("info", {
  prefix: () => new Date().toISOString(),
  leftSeparator: "→",
});

export const PORT = process.env.PORT || 3000;

export const REST = {
  insert: "/insert",
  delete: "/delete",
  update: "/update",
  select: "/select",
};
