BIN_PATH:=node_modules/.bin/

all:	angular-bitcore-wallet-client.min.js

clean:
	rm -f angular-bitcore-wallet-client.js
	rm -f angular-bitcore-wallet-client.min.js

angular-bitcore-wallet-client.js: index.js
	${BIN_PATH}browserify $< > $@

angular-bitcore-wallet-client.min.js: angular-bitcore-wallet-client.js
	${BIN_PATH}uglify  -s $<  -o $@
