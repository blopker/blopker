#!/usr/bin/env bash
set -e

compass compile
jekyll build
rsync -ahvc _site/* gouda@blopker.com:public/production/blopker
