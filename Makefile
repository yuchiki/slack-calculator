
SRCS := $(wildcard src/+.ts)

dist: $(SRCS)
	npx tsc
