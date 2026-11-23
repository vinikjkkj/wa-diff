__d(
  "WmiMultiQplTracker",
  ["QPLMultiplexedFlow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$1 = new Map()),
          e.forEach(function (e) {
            var n = e[0],
              r = e[1],
              o = t.$1.get(n);
            (o != null &&
              (o.addPoint("duplicate_key"),
              o.endCancel(4, { bool: { duplicateKey: !0 } })),
              t.$1.set(n, r));
          }));
      }
      e.from = function (n) {
        return new e(n);
      };
      var t = e.prototype;
      return (
        (t.addAnnotations = function (t, n) {
          var e;
          (e = this.$1.get(t)) == null || e.addAnnotations(n);
        }),
        (t.addPoint = function (t, n, r) {
          var e;
          (e = this.$1.get(t)) == null || e.addPoint(n, r);
        }),
        (t.endSuccess = function (t) {
          var e = this.$1.get(t);
          e != null && (e.endSuccess(), this.$1.delete(t), (this.$2 = null));
        }),
        (t.endFail = function (t, n, r) {
          var e = this.$1.get(t);
          e != null &&
            (e.endFail(n, { string: { errorDescription: r } }),
            this.$1.delete(t),
            (this.$2 = null));
        }),
        (t.size = function () {
          return this.$1.size;
        }),
        (t.all = function (t) {
          var e = this;
          if (t != null) {
            var n = t
              .map(function (t) {
                return e.$1.get(t);
              })
              .filter(Boolean);
            return o("QPLMultiplexedFlow").makeQplMultiplexedFlow(n);
          }
          if (!this.$2) {
            var r = o("QPLMultiplexedFlow").makeQplMultiplexedFlow(
              Array.from(this.$1.values()),
            );
            return ((this.$2 = r), r);
          }
          return this.$2;
        }),
        (t.failAllPending = function (t) {
          (this.$1.forEach(function (e) {
            return e.endFail(t);
          }),
            this.$1.clear(),
            (this.$2 = null));
        }),
        (e.empty_TEST_ONLY = function () {
          return new e([]);
        }),
        e
      );
    })();
    l.WmiMultiQplTracker = e;
  },
  98,
);
