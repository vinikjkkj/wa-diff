__d(
  "KFTransformSystem",
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
                o("KFComponentNames").ROOT,
              ),
              r = 0;
            r < e.length;
            r++
          ) {
            var a = this.$1.getComponent(e[r], o("KFComponentNames").SCENE);
            a && this.$2(e[r], a.getProgress());
          }
        }),
        (t.$2 = function (t, n, r) {
          var e = r || [1, 0, 0, 1, 0, 0],
            a = this.$1.getComponent(t, o("KFComponentNames").TRANSFORM),
            i = this.$1.getComponent(t, o("KFComponentNames").CHILDREN),
            l = this.$1.getComponent(t, o("KFComponentNames").TIME);
          if ((a && l && (e = a.update(l.getProgress(), e)), i))
            for (var s = i.getChildren(), u = 0; u < s.length; u++)
              this.$2(s[u], n, e);
        }),
        (t.toString = function () {
          return "TRANSFORM";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
