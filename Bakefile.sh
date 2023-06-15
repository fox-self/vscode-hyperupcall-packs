# shellcheck shell=bash

task.init() {
	pnpm install
}

task.publish() {
	local pack=$1
	cd "$pack"

	vsce publish
	ovsx publish --pat "$(<'../../.env-ovsx')"
}
