export interface requestInfo {
    hostname?: string;
    header?: string;
    baseUrl?: string;
    method?: string;
    endpoint?: string;
}

export interface queryInfo {
    type?: QueryType
    column?: string
    value?: string | number | boolean
    nullable?:  boolean
}

export type QueryType = "insert" | "update" | "delete" | "select" 
