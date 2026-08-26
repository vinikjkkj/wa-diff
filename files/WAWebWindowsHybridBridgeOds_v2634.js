__d(
  "WAWebWindowsHybridBridgeOds.v2634",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = !1),
          (this.$3 = function (e) {
            r("WAWebODS").incr(e.toString());
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.initialize = function () {
          var e, t;
          this.$2 ||
            ((this.$2 = !0),
            (e = this.$1) == null ||
              e.addEventListener("incrRequested", this.$3),
            (t = this.$1) == null || t.subscribe(null));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeOds_v2634 = e;
  },
  98,
);
