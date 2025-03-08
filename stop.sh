#!/bin/bash

docker stop machulec-website 2>/dev/null && docker rm machulec-website || true
