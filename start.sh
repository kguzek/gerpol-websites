#!/bin/bash

if ! docker build -t machulec-website .; then
  echo "Failed to build image."
  exit 1
fi

./stop.sh

docker run -d --restart unless-stopped -p "${PORT:-3000}:3000" --name machulec-website -t machulec-website
