__d(
  "WAWebWindowsHybridBridgeSharesheet.v2628",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.shareFile = function (t, n) {
          var e = this;
          return (
            r("WAWebODS").incr("web.hybrid.bridge.sharesheet.send.share_file"),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "sharesheetBridge",
                method: "shareFile",
                type: "async",
              },
              function () {
                return e.$1.shareFile(t, n);
              },
            )
          );
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeSharesheet_v2628 = e;
  },
  98,
);
