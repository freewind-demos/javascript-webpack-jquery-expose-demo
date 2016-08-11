// recommend way: const $ = require('jquery');
require('jquery');

// we can use `$` without define it,
// since we already expose it in `webpack.config.js`
// Notice
// this is not the recommended way to use it,
// here just to demo how we can expose it since some 3rd party libraries
// need the global `jQuery` or `$`
$('#content').text('it works!');
