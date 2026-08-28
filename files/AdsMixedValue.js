__d(
  "AdsMixedValue",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      e.create = function (n) {
        return new e(n);
      };
      var t = e.prototype;
      return (
        (t.getValues = function () {
          return this.$1;
        }),
        (t.getValueForIndex = function (t) {
          return this.$1[t];
        }),
        (t.map = function (n) {
          return new e(this.getValues().map(n));
        }),
        (t.hashCode = function () {
          return this.getValues().length;
        }),
        (t.equals = function (t) {
          var e = this.getValues(),
            n = t.getValues();
          if (e.length !== n.length) return !1;
          for (var o = 0; o < e.length; o++)
            if (!r("immutable").is(e[o], n[o])) return !1;
          return !0;
        }),
        (t.match = function (t) {
          return t.Mixed(this.getValues());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
