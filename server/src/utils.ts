export interface request_info {
  hostname?: string;
  header?: string;
  baseUrl?: string;
  method?: string;
  endpoint?: string;
}

export const build_request_info = (info: request_info): string => {
  let res = "Received -> ";
  res += info.hostname ? `hostname: ${info.hostname}, ` : "";
  res += info.header ? `header: ${info.header}, ` : "";
  res += info.baseUrl ? `base url: ${info.baseUrl}, ` : "";
  res += info.method ? `method: ${info.method}, ` : "";
  res += info.endpoint ? `endpoint: ${info.endpoint}, ` : "";
  return res;
};
