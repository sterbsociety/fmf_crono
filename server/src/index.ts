import { app } from "./app";
import { logger, PORT, REST } from "./const";
import { Pool, Client } from "pg";
import { pg_client } from "./postgres_cli";
import { build_query, build_request_info } from "./utils";
import { queryInfo, requestInfo } from "./types";

app.listen(PORT, () => {
    logger.info(`server listening in port ${PORT}`);
});

app.post(REST.insert, (req, res) => {
    const req_info: requestInfo = {
        endpoint: REST.insert,
        hostname: req.hostname,
        method: req.method,
    };
    const query: string = build_query(req.body as any as queryInfo)

    logger.info(build_request_info(req_info));
    pg_client.query(query, (err, response) => {
        res.json({ status: "OK", res: response.rows });
    });
});
