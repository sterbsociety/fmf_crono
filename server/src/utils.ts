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
