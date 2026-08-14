__d(
  "LSReStoreQplLogger",
  ["LSTransactionLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        startTracking: function (n, o) {
          var t =
            r("LSTransactionLogger") == null
              ? void 0
              : r("LSTransactionLogger").startTracking(n, e, o);
          return {
            addAnnotations: function (o) {
              r("LSTransactionLogger") == null ||
                r("LSTransactionLogger").addAnnotations(e, t, o);
            },
            end: function () {
              r("LSTransactionLogger") == null ||
                r("LSTransactionLogger").end(e, t);
            },
            fail: function (o) {
              r("LSTransactionLogger") == null ||
                r("LSTransactionLogger").fail(e, t, o);
            },
            mark: function (o) {
              r("LSTransactionLogger") == null ||
                r("LSTransactionLogger").mark(e, t, o);
            },
            recordLogicalWrite: function () {
              r("LSTransactionLogger") == null ||
                r("LSTransactionLogger").recordLogicalWrite(t);
            },
          };
        },
      };
    }
    l.createQplLogger = e;
  },
  98,
);
