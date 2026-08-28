__d(
  "DerivedDataMap",
  ["Cache", "LFUCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = typeof jest != "undefined",
      s = r(e ? "Cache" : "LFUCache"),
      u = (function () {
        function e(e) {
          ((this.$3 = function (e, t) {
            return e === t;
          }),
            (this.$4 = null),
            (this.$5 = new s()),
            (this.$1 = e.getInputData),
            (this.$2 = e.computeResult),
            e.areInputsEqual && (this.$3 = e.areInputsEqual),
            (this.$4 = e.areResultsEqual));
        }
        var t = e.prototype;
        return (
          (t.get = function (t) {
            var e = this.$5.get(t),
              n = this.$1(t, e != null ? e.data : null);
            if (e != null && this.$3(e.data, n)) return e.result;
            var r = e != null ? e.result : null,
              o = this.$2(t, n, r);
            return (
              this.$4 && r != null && this.$4(o, r) && (o = r),
              this.$5.set(t, { data: n, result: o }),
              o
            );
          }),
          e
        );
      })();
    l.default = u;
  },
  98,
);
