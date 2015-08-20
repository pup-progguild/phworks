#!/bin/sh

if [ -d "build" ]; then
    rm -r build
fi

mkdir build

if [ -d "bower_components" ]; then
    cp -r bower_components build/bower_components
fi

gulp serve
