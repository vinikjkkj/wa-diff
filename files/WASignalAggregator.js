__d(
  "WASignalAggregator",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        var e = this;
        ((this.$1 = !1),
          (this.$2 = new AbortController()),
          (this.$3 = new Set()),
          (this.signal = this.$2.signal),
          (this.$5 = function (t) {
            (e.delete(t.currentTarget), e.$6());
          }));
      }
      var t = e.prototype;
      return (
        (t.add = function () {
          this.$4();
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          for (var r of t)
            r.aborted || (r.addEventListener("abort", this.$5), this.$3.add(r));
          this.$6();
        }),
        (t.$6 = function () {
          if (!this.$1) {
            var e = Array.from(this.$3).every(function (e) {
              return e.aborted;
            });
            e && (this.dispose(), this.$2.abort());
          }
        }),
        (t.delete = function () {
          (this.$4(), this.$7.apply(this, arguments));
        }),
        (t.$7 = function () {
          for (
            var e = !1, t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var o of n)
            this.$3.delete(o) &&
              ((e = !0), o.removeEventListener("abort", this.$5));
          e && this.$6();
        }),
        (t.$4 = function () {
          if (this.$1)
            throw r("err")("Attempt to modify disposed SignalAggregator");
        }),
        (t.dispose = function () {
          if (!this.$1) {
            this.$1 = !0;
            for (var e of this.$3) this.$7(e);
          }
        }),
        (t.getSignals__INTERNAL = function () {
          return this.$3;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
