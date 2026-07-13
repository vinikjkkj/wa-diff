__d(
  "WAWebWindowsHybridBridgeLinksPreview.v2610",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getPreviewAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
    i.WindowsHybridBridgeLinksPreview_v2610 = e;
  },
  66,
);
