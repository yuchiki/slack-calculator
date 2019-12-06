
SRCS := $(wildcard src/+.ts)

dist: $(SRCS)
	npx tsc

.PHONY: watch
watch:
	npx ts-node-dev --respawn src/index.ts
