#!/usr/bin/env bash

compass compile
jekyll build
rsync -ahvc _site/* gouda@blopker.com:public/production/blopker
