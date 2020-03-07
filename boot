#!/bin/bash
set -o pipefail
subcommand=$1

if [ "$1" == "" ] ; then
  subcommand="install"
fi

for d in packages/**/*/ ; do
  pushd $d
    yarn $subcommand &
  popd
done
wait
