__d(
  "WAWebWindowsHybridBridgeSharesheet",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.shareFile = function (t, n) {
          return (
            r("WAWebODS").incr("web.hybrid.bridge.sharesheet.send.share_file"),
            this.$1.shareFile(t, n)
          );
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeSharesheet = e;
  },
  98,
);
