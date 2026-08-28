__d(
  "KFTimeSystem",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.__entityComponentRegistry = e;
      }
      var t = e.prototype;
      return (
        (t.update = function (t, n) {
          var e = this.__entityComponentRegistry.getEntitiesWithComponent(
              o("KFComponentNames").ROOT,
            )[0],
            r = this.__entityComponentRegistry.getComponent(
              e,
              o("KFComponentNames").SCENE,
            );
          r && this.$1(r, t, n);
        }),
        (t.$1 = function (t, n, r) {
          var e = t.update(n, r);
          this.$2(t, e, n, r);
        }),
        (t.$3 = function (t, n, r, a) {
          var e = this.__entityComponentRegistry.getComponent(
            t,
            o("KFComponentNames").TIME,
          );
          e && e.update(n);
          var i = this.__entityComponentRegistry.getComponent(
            t,
            o("KFComponentNames").CHILDREN,
          );
          if (i)
            for (var l = i.getChildren(), s = 0; s < l.length; s++) {
              var u,
                c = this.__entityComponentRegistry.getComponent(
                  l[s],
                  o("KFComponentNames").SCENE,
                );
              c != null && this.$1(c, r, a);
              var d =
                  (u = e == null ? void 0 : e.getProgressOffset()) != null
                    ? u
                    : 0,
                m = c != null ? d : 0;
              this.$3(l[s], n - m, r, a);
            }
        }),
        (t.$2 = function (t, n, r, o) {
          for (var e = t.getEntities(), a = e.length, i = 0; i < a; i++)
            this.$3(e[i], n, r, o);
        }),
        (t.toString = function () {
          return "TIME";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
