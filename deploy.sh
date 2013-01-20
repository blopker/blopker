#!/usr/bin/env bash

yeoman build
rsync -ahvc --delete dist/* gouda@blopker.com:public/production/blopker
