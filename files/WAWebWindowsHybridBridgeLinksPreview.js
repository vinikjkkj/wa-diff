__d(
  "WAWebWindowsHybridBridgeLinksPreview",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getPreviewAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            r("WAWebODS").incr(
              "web.hybrid.bridge.links_preview.send.get_preview_async",
            );
            var n = yield o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "linksPreview",
                method: "getPreviewAsync",
                type: "async",
              },
              function () {
                return t.$1.getPreviewAsync(e);
              },
            );
            return n == null || n === "" ? null : JSON.parse(n);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WindowsHybridBridgeLinksPreview = e;
  },
  98,
);
