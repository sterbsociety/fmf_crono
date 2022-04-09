import { app } from "./app";
import { logger, PORT, REST } from "./const";
import { Pool, Client } from "pg";
import { pg_client } from "./postgres_cli";
import { build_request_info, request_info } from "./utils";

app.listen(PORT, () => {
    logger.info(`server listening in port ${PORT}`);
});

app.post(REST.insert, (req, res) => {
    const req_info: request_info = {
        endpoint: REST.insert,
        hostname: req.hostname,
        method: req.method,
    };

    logger.info(build_request_info(req_info));
    pg_client.query("SELECT * FROM test_table;", (err, response) => {
        res.json({ status: "OK", res: response.rows });
    });
});
