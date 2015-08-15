#!/bin/sh

if [ -d "build" ]; then
    rm -r build
    mkdir build
fi
    cp -r src/css/jquery build/css
    cp -r src/css/bootstrap build/css
    cp -r src/css/animate build/css
    cp -r src/css/blueimp build/css
    cp -r src/css/codemirror build/css
    cp -r src/css/dropzone   build/css
    cp -r src/css/fontawesome build/css
    cp -r src/css/fonts build/css
    cp -r src/css/mcustomscrollbar build/css
    cp -r src/css/nvd3 build/css
    cp -r src/css/rickshaw build/css
    cp -r src/css/summernote build/css
    cp -r src/css/fullcalendar build/css
    cp -r src/css/styles.css build/css


gulp serve
