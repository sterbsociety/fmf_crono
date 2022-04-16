import e from "express";
import { Client } from "pg";
import {
    PG_USER,
    PG_HOST,
    PG_PASSWORD,
    PG_DATABASE,
    PG_PORT,
    logger,
    PG_TABLE,
} from "./const";
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
    const type: QueryType = query_info.type;
    let query: string;
    switch (type) {
        case "insert":
            build_insert_query();
            break;
        case "delete":
            build_delete_query();
            break;
        case "update":
            build_update_query();
            break;
        case "select":
            query = build_select_query(query_info);
            break;
        default:
            logger.error(`Type ${type} is not defined`);
            break;
    }

    return query;
};

export const build_select_query = (query_info: queryInfo): string => {
    logger.debug("received select");
    const columnStr = Array.isArray(query_info.column)
        ? parseColumnList(query_info.column)
        : query_info.column;
    return `SELECT ${columnStr} FROM ${PG_TABLE}`;
};

export const parseColumnList = (columnLst: string[]): string => {
    return columnLst.join();
};

export const build_delete_query = () => {
    logger.debug("received delete");
};

export const build_update_query = () => {
    logger.debug("received updaate");
};

export const build_insert_query = () => {
    logger.debug("received insert");
};
