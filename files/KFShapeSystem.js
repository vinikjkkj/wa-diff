__d(
  "KFShapeSystem",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.update = function (t, n) {
          for (
            var e = this.$1.getEntitiesWithComponent(
                o("KFComponentNames").SHAPE,
              ),
              r = e.length,
              a = 0;
            a < r;
            a++
          ) {
            var i,
              l,
              s,
              u = this.$1.getAllComponentsForEntity(e[a]),
              c =
                (i =
                  (l = u[o("KFComponentNames").TIME]) == null
                    ? void 0
                    : l.getProgress()) != null
                  ? i
                  : 0;
            (s = u[o("KFComponentNames").SHAPE]) == null || s.update(c);
          }
        }),
        (t.toString = function () {
          return "SHAPE";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
