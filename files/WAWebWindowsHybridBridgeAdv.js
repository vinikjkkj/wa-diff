__d(
  "WAWebWindowsHybridBridgeAdv",
  [
    "WABase64",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
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
              var a = this;
              r("WAWebODS").incr("web.hybrid.bridge.adv.send.verify");
              var i = yield o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "adv", method: "verify", type: "sync" },
                function () {
                  return a.$1.verify(
                    o("WABase64").encodeB64(t),
                    o("WABase64").encodeB64(n),
                    o("WABase64").encodeB64(e),
                  );
                },
              );
              return i;
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
