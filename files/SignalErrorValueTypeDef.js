__d(
  "SignalErrorValueTypeDef",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ec",
      l = "en",
      s = "es",
      u = 500,
      c = (function () {
        function t(e, t, n) {
          ((this.$1 = e),
            (this.$2 = t),
            n != null && (this.$3 = n.substr(0, u)));
        }
        var n = t.prototype;
        return (
          (n.getErrorCode = function () {
            return this.$1;
          }),
          (n.getErrorName = function () {
            return this.$2;
          }),
          (n.getErrorDetails = function () {
            return this.$3;
          }),
          (n.isEqual = function (t) {
            return (
              this.$1 === t.getErrorCode() &&
              this.$3 === t.getErrorDetails() &&
              this.$2 === t.getErrorName()
            );
          }),
          (n.toJSON = function () {
            var t = {};
            switch (((t[e] = this.$1), this.$1)) {
              case 0:
                ((t[l] = this.$2), (t[s] = this.$3));
                break;
            }
            return t;
          }),
          t
        );
      })();
    i.SignalErrorValueTypeDef = c;
  },
  66,
);
