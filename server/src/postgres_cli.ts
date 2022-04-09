import { Client } from "pg";
import { PG_USER, PG_HOST, PG_PASSWORD, PG_DATABASE, PG_PORT } from "./const";

export const pg_client = new Client({
  user: PG_USER,
  host: PG_HOST,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT as any as number,
});
pg_client.connect();
