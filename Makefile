ASDF_PLUGINS=nodejs

setup:
	asdf install
	corepack enable
	yarn install
