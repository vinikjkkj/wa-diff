__d(
  "WAWebWindowsHybridBridgeLinksPreview",
  ["WAWebODS", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getPreviewAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            r("WAWebODS").incr(
              "web.hybrid.bridge.links_preview.send.get_preview_async",
            );
            var t = yield this.$1.getPreviewAsync(e);
            return t == null || t === "" ? null : JSON.parse(t);
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
