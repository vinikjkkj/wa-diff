__d(
  "WAWebWindowsHybridBridgeAdv.v2585",
  ["WABase64", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.verifySignatureAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield this.$1.verify(
                o("WABase64").encodeB64(t),
                o("WABase64").encodeB64(n),
                o("WABase64").encodeB64(e),
              );
              return r;
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WindowsHybridBridgeAdv_v2585 = e;
  },
  98,
);
