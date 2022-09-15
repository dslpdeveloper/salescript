FROM postgres:10.6
ADD docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
RUN chmod +x /docker-entrypoint-initdb.d/init-stats-db.sh

