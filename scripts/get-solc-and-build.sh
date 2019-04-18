#!/usr/bin/env sh

set -o errexit

# We use $DEPLOY_URL to detect the Netlify environment.
if [ -v DEPLOY_URL ]; then
  : ${NETLIFY_CACHE_DIR="/opt/buildhome/cache"}
else
  : ${NETLIFY_CACHE_DIR="$PWD"}
fi

export SOLC_PATH="$NETLIFY_CACHE_DIR/solc"

if [ ! -x "$SOLC_PATH" ]
then
  curl -L "https://github.com/ethereum/solidity/releases/download/v0.5.7/solc-static-linux" > "$SOLC_PATH"
  chmod +x "$SOLC_PATH"
fi

node scripts/build.js
