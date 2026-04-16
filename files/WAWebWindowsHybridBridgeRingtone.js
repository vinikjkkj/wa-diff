__d(
  "WAWebWindowsHybridBridgeRingtone",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.cacheRingtonesFromUrl = function (t) {
          var e;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.ringtone.send.cache_ringtones_from_url",
          ),
            (e = this.$1) == null || e.cacheRingtonesFromUrl(t));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeRingtone = e;
  },
  98,
);
