__d(
  "configCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l() {
      return e;
    }
    function s(t) {
      e = t;
    }
    function u(t) {
      return function (n, r) {
        ((e = null), t(n, r));
      };
    }
    ((i.getConfigCache = l), (i.setConfigCache = s), (i.wrapOnClose = u));
  },
  66,
);
