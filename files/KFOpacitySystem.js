__d(
  "KFOpacitySystem",
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
          var e = this.$1.getEntitiesWithComponent(
            o("KFComponentNames").ROOT,
          )[0];
          this.$2(e, 1);
        }),
        (t.$2 = function (t, n) {
          var e = this.$1.getAllComponentsForEntity(t);
          e[o("KFComponentNames").COMPOSITING] &&
            e[o("KFComponentNames").COMPOSITING].update(
              e[o("KFComponentNames").TIME]
                ? e[o("KFComponentNames").TIME].getProgress()
                : 0,
              n,
            );
          var r = e[o("KFComponentNames").CHILDREN]
            ? e[o("KFComponentNames").CHILDREN].getChildren()
            : void 0;
          if (r)
            for (var a = r.length, i, l = 0; l < a; l++)
              ((i = this.$1.getComponent(r[l], o("KFComponentNames").SCENE)),
                i
                  ? this.$2(
                      r[l],
                      e[o("KFComponentNames").COMPOSITING].getOpacity(),
                    )
                  : this.$2(r[l], n));
        }),
        (t.toString = function () {
          return "OPACITY";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
