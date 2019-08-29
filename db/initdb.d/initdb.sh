#!/usr/bin/env bash
 
set -e
 
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER typeormseed_user;
	CREATE DATABASE typeormseed ENCODING UTF8;
	GRANT ALL PRIVILEGES ON DATABASE typeormseed TO typeormseed_user;
 
	ALTER USER typeormseed_user WITH PASSWORD 'password123';
	ALTER USER typeormseed_user WITH SUPERUSER;
EOSQL