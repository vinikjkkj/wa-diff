__d(
  "WAWebWindowsHybridBridgeLinksPreview.v2622",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getPreviewAsync = async function (t) {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.links_preview.send.get_preview_async",
          );
          var n = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            {
              bridge: "linksPreview",
              method: "getPreviewAsync",
              type: "async",
            },
            function () {
              return e.$1.getPreviewAsync(t);
            },
          );
          return n == null || n === "" ? null : JSON.parse(n);
        }),
        e
      );
    })();
    l.WindowsHybridBridgeLinksPreview_v2622 = e;
  },
  98,
);
