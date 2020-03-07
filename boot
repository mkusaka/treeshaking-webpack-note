#!/bin/bash
set -o pipefail

for d in packages/**/*/ ; do
  pushd $d
  yarn $@ &
  popd
done
wait
