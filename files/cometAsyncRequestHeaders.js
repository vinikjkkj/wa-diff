__d(
  "cometAsyncRequestHeaders",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l() {
      return e.reduce(function (e, t) {
        var n = t();
        return babelHelpers.extends({}, n, e);
      }, {});
    }
    function s(t) {
      e.push(t);
    }
    ((i.getHeaders = l), (i.registerHeaderProvider = s));
  },
  66,
);
