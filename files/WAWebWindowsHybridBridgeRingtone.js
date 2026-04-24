__d(
  "WAWebWindowsHybridBridgeRingtone",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.cacheRingtonesFromUrl = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.ringtone.send.cache_ringtones_from_url",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "ringtoneBridge",
                method: "cacheRingtonesFromUrl",
                type: "sync",
              },
              function () {
                var n;
                return (n = e.$1) == null ? void 0 : n.cacheRingtonesFromUrl(t);
              },
            ));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeRingtone = e;
  },
  98,
);
