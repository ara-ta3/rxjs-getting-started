YARN=yarn
NODE=node

install:
	$(YARN) install

compile:
	$(YARN) run tsc

run: compile
	$(NODE) src/main.js

compile/watch:
	$(YARN) run tsc/watch
