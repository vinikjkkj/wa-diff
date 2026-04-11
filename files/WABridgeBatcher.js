__d(
  "WABridgeBatcher",
  ["WAShiftTimer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = 1e3,
      u = (function () {
        function t(t, n, r) {
          var a = this;
          ((this.$1 = null),
            (this.$6 = Date.now()),
            (this.$7 = new (o("WAShiftTimer").ShiftTimer)(function () {
              var e = a.$1;
              e != null && ((a.$1 = null), a.$2(e));
            })),
            (this.$2 = n),
            (this.$3 = t),
            (this.$5 = r != null ? r : e),
            (this.$4 = this.$5));
        }
        var n = t.prototype;
        return (
          (n.addEvent = function (t) {
            var e = this.$1;
            if (((this.$1 = e ? this.$3(e, t) : [t]), !this.$7.isScheduled())) {
              var n = this.$4;
              if (n < 1) {
                var r = Date.now(),
                  o = Math.max(r - this.$6, 0) / s;
                ((n = Math.min(n + o, this.$5)), (this.$4 = n), (this.$6 = r));
              }
              var a;
              (n >= 1
                ? ((a = 0), (this.$4 = n - 1))
                : ((a = Math.ceil(s * (1 - n))), (this.$4 = 0)),
                this.$7.onOrBefore(a));
            }
          }),
          (n.cancel = function () {
            ((this.$1 = null), this.$7.cancel());
          }),
          t
        );
      })();
    l.BridgeBatcher = u;
  },
  98,
);
