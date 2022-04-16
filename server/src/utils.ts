import { query } from "express";
import { logger } from "./const";
import { build_insert_query, build_delete_query, build_update_query, build_select_query } from "./postgres_cli";
import { queryInfo, QueryType, requestInfo } from "./types";

export const build_request_info = (info: requestInfo): string => {
  let res = "Received -> ";
  res += info.hostname ? `hostname: ${info.hostname}, ` : "";
  res += info.header ? `header: ${info.header}, ` : "";
  res += info.baseUrl ? `base url: ${info.baseUrl}, ` : "";
  res += info.method ? `method: ${info.method}, ` : "";
  res += info.endpoint ? `endpoint: ${info.endpoint}, ` : "";
  return res;
};

export const build_query = (query_info: queryInfo): string => {
  logger.debug(query_info)
  const type: QueryType = query_info.type
  switch (type) {
    case "insert":
      build_insert_query()
      break;
    case "delete":
      build_delete_query()
      break;
    case "update":
      build_update_query()
      break;
    case "select":
      build_select_query()
      break;
    default:
      logger.error(`Type ${type} is not defined`)
      break;
  }

  return ""
}
