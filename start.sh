#!/bin/bash

if ! docker build -t gerpol-websites .; then
  echo "Failed to build image."
  exit 1
fi

./stop.sh

docker run -d --restart unless-stopped -p "${PORT:-3000}:3000" --name gerpol-websites -t gerpol-websites
