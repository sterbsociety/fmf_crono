import { Logger } from "log-lv";
import { Client } from "pg";

export const { PG_USER, PG_HOST, PG_PASSWORD, PG_DATABASE, PG_PORT, PG_TABLE } =
    process.env;

export const logger = new Logger(process.env.LOG_LEVEL as any, {
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
