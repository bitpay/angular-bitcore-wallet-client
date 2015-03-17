var bwcModule = angular.module('bwcModule', []);
var Client = require('bitcore-wallet-client');

bwcModule.constant('MODULE_VERSION', '0.0.3');

bwcModule.provider("bwcService", function() {
  var provider = {};

  var config = {
    baseUrl: 'http://localhost:3001/bws/api',
    verbose: null
  };

  provider.setBaseUrl = function(url) {
    config.baseUrl = url;
  };

  provider.setVerbose = function(v) {
    config.verbose = v ? true : false;
  };

  provider.$get = function() {
    var service = {};

    service.getBitcore = function() {
      return Client.Bitcore;
    };

    service.getClient = function(walletData) {
      var bwc = new Client({
        baseUrl: config.baseUrl,
        verbose: config.verbose,
      });
      if (walletData)
        bwc.import(walletData);
      return bwc;
    };
    return service;
  };

  return provider;
});
