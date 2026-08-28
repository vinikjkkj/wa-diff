__d(
  "KFTrimPathSystem",
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
                o("KFComponentNames").TRIM_PATH,
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
            (s = u[o("KFComponentNames").TRIM_PATH]) == null || s.update(c);
          }
        }),
        (t.toString = function () {
          return "TRIM_PATH";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
