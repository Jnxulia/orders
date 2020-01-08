FROM mongo:4.0.0

COPY rest_api_fs /rest_api_fs
CMD mongorestore --host=mongodb --port=27017  -d rest_api_fs rest_api_fs/