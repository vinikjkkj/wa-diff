__d(
  "UnicodeBidiService",
  [
    "invariant",
    "UnicodeBidi",
    "UnicodeBidiDirection",
    "UnicodeBidiGlobalDirection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e) {
        (e
          ? o("UnicodeBidiDirection").isStrong(e) || s(0, 3594)
          : (e = r("UnicodeBidiGlobalDirection").getDir()),
          (this.$1 = e),
          this.reset());
      }
      var t = e.prototype;
      return (
        (t.reset = function () {
          this.$2 = this.$1;
        }),
        (t.getDirection = function (t) {
          return (
            (this.$2 = o("UnicodeBidi").getDirection(t, this.$2)),
            this.$2
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
