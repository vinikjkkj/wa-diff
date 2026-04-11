__d(
  "WebBloksFalcoPolicyData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {};
    function l(t) {
      Object.keys(t).forEach(function (n) {
        e[n] == null && (e[n] = t[n]);
      });
    }
    function s(t) {
      var n = e[t];
      return n == null ? { r: 1 } : n;
    }
    var u = { add: l, get: s };
    i.default = u;
  },
  66,
);
