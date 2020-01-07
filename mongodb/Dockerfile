FROM mongo:4.0-xenial
RUN mkdir -p /data/db \
    && echo "dbpath = /data/db" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db

COPY /data /data/db


# Make the new dir a VOLUME to persists it 

CMD ["mongod"]
