# angular-bitcore-wallet-client
AngularJS module for [bitcore-wallet-client](https://github.com/bitpay/bitcore-wallet-client)

## Get started

```
bower install angular-bitcore-wallet-client
```

Add javascript to `index.html` after *angular.js*:

```html
<script src="bower_components/angular-bitcore-wallet-client/angular-bitcore-wallet-client.min.js"></script>
```

Add to your array of AngularJS modules:

```
var modules = [
  'bwcModule'
];

var myApp = angular.module('myApp', modules);
```

## Use

See the [API referece](https://github.com/bitpay/bitcore-wallet-client) for more details.

```javascript
angular.module('myApp').factory('myService', 
  function(bwcService) {
    var credential = getCredentials(); // e.g. from localStorage
    bwcService.getStatus(credentials, function(err, res) {
      console.log(res);
    });
  }
);
```
