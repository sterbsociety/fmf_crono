import { Client } from "pg";
import { PG_USER, PG_HOST, PG_PASSWORD, PG_DATABASE, PG_PORT, logger } from "./const";
import { queryInfo, QueryType } from "./types";

export const pg_client = new Client({
  user: PG_USER,
  host: PG_HOST,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT as any as number,
});
pg_client.connect();


export const build_query = (query_info: queryInfo): string => {
  logger.debug(query_info)
  const type: QueryType = query_info.type
  switch (type) {
    case "insert":
      logger.debug("received insert")
      build_insert_query()
      break;
    case "delete":
      logger.debug("received delete")
      build_delete_query()
      break;
    case "update":
      logger.debug("received updaate")
      build_update_query()
      break;
    case "select":
      logger.debug("received select")
      build_select_query()
      break;
    default:
      logger.error(`Type ${type} is not defined`)
      break;
  }

  return ""
}

export const build_select_query = () => {
  logger.debug("received select")
  

}

export const build_delete_query = () => {
  logger.debug("received delete")

}

export const build_update_query = () => {
  logger.debug("received updaate")

}

export const build_insert_query = () => {
  logger.debug("received insert")
}

