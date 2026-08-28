__d(
  "AdsUniformValue",
  ["areEqual", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          this.$1 = [e];
        }
        t.create = function (o) {
          var n = o[0];
          return o.every(function (t) {
            return (e || (e = r("areEqual")))(t, n);
          })
            ? new t(n)
            : null;
        };
        var n = t.prototype;
        return (
          (n.getValue = function () {
            return this.$1[0];
          }),
          (n.getValues = function () {
            return this.$1;
          }),
          (n.getValueForIndex = function (t) {
            return this.$1[0];
          }),
          (n.map = function (n) {
            return new t(n(this.getValue(), 0));
          }),
          (n.hashCode = function () {
            return 1;
          }),
          (n.equals = function (t) {
            return (
              t.getValues().length === 1 &&
              r("immutable").is(this.getValue(), t.getValues()[0])
            );
          }),
          (n.match = function (t) {
            return t.Uniform(this.getValue());
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
