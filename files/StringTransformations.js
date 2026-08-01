__d(
  "StringTransformations",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      unicodeEscape: function (t) {
        return t.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g, function (e) {
          var t = e.charCodeAt(0).toString(16);
          return "\\u" + ("0000" + t.toUpperCase()).slice(-4);
        });
      },
      unicodeUnescape: function (t) {
        return t.replace(/(\\u[0-9A-Fa-f]{4})/g, function (e) {
          return String.fromCharCode(parseInt(e.slice(2), 16));
        });
      },
    };
    i.default = e;
  },
  66,
);
