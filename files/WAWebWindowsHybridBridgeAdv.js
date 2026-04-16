__d(
  "WAWebWindowsHybridBridgeAdv",
  ["WABase64", "WAWebODS", "asyncToGeneratorRuntime"],
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
              r("WAWebODS").incr("web.hybrid.bridge.adv.send.verify");
              var a = yield this.$1.verify(
                o("WABase64").encodeB64(t),
                o("WABase64").encodeB64(n),
                o("WABase64").encodeB64(e),
              );
              return a;
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
    l.WindowsHybridBridgeAdv = e;
  },
  98,
);
