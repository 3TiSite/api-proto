#!/usr/bin/env bash

DIR=$(realpath ${0%/*})
cd $DIR
set -ex

cd $1
exec dist.coffee $DIR/$1
