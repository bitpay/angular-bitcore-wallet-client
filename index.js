var bwcModule = angular.module('bwcModule', []);
var Client = require('bitcore-wallet-client');

bwcModule.constant('MODULE_VERSION', '5.1.2');

bwcModule.provider("bwcService", function() {
  var provider = {};

  var config = {
    baseUrl: 'https://bws.bitpay.com/bws/api',
    verbose: null,
    timeout: 100000,
    transports: ['polling']
  };

  provider.$get = function() {
    var service = {};

    service.getBitcore = function() {
      return Client.Bitcore;
    };

    service.getErrors = function() {
      return Client.errors;
    };

    service.getSJCL = function() {
      return Client.sjcl;
    };

    service.buildTx = Client.buildTx;
    service.parseSecret = Client.parseSecret;
    service.Client = Client;

    service.getUtils = function() {
      return Client.Utils;
    };

    service.getClient = function(walletData, opts) {
      opts = opts || {};

      //note opts use `bwsurl` all lowercase;
      var bwc = new Client({
        baseUrl: opts.bwsurl || config.baseUrl,
          verbose: opts.verbose || config.verbose,
          timeout: config.timeout,
          transports: config.transport
      });
      if (walletData)
        bwc.import(walletData, opts);
      return bwc;
    };
    return service;
  };

  return provider;
});
