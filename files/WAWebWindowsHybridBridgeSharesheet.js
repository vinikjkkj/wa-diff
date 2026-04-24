__d(
  "WAWebWindowsHybridBridgeSharesheet",
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
              { bridge: "sharesheetBridge", method: "shareFile", type: "sync" },
              function () {
                return e.$1.shareFile(t, n);
              },
            )
          );
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeSharesheet = e;
  },
  98,
);
