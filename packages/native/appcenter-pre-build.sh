#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" != "master" ];
then
   echo "** PRE BUILD SCRIPT **"
   cd ..
   yarn install
fi
