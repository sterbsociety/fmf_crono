#!/bin/bash

# docker run -d --name fmf_postgres -e POSTGRES_PASSWORD=mypassword -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp/postgres-data:/var/lib/postgresql/data -p 5432:5432 postgres:13
 
PG_HOST=127.0.0.1 \
PG_PASSWORD=mypassword \
PG_USER=postgres \
PG_PORT=5432 \
PG_DATABASE=crono_db \
PG_TABLE=test_table \
LOG_LEVEL=debug \
\
yarn start-server