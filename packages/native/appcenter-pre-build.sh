#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" != "feature/app-centre" ];
then
   echo "** PRE BUILD SCRIPT **"
fi
