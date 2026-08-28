__d(
  "TimezoneDatabase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        (e === void 0 && (e = new Map()),
          t === void 0 && (t = new Map()),
          (this.zones = e),
          (this.ruleSets = t),
          (this.version = n),
          (this.years = r));
      }
      var t = e.prototype;
      return (
        (t.set = function (n) {
          var t = n.version;
          return new e(
            n.zones || this.zones,
            n.ruleSets || this.ruleSets,
            t != null && t != "" ? t : this.version,
            n.years || this.years,
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
