__d(
  "useBaseAnchorElement",
  ["react", "react-compiler-runtime", "useAnchorVisibilityObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useId,
      u = {
        anchorName: function (t) {
          return [
            { anchorName: t != null ? "x14xdw8m" : t, $$css: !0 },
            { "--x-anchorName": t != null ? t : void 0 },
          ];
        },
      };
    function c() {
      var e = o("react-compiler-runtime").c(6),
        t = "--" + s(),
        n = r("useAnchorVisibilityObserver")(),
        a = n[0],
        i = n[1],
        l = i ? t : null,
        c;
      e[0] !== l
        ? ((c = l != null && u.anchorName(l)), (e[0] = l), (e[1] = c))
        : (c = e[1]);
      var d;
      return (
        e[2] !== l || e[3] !== a || e[4] !== c
          ? ((d = [l, c, a]), (e[2] = l), (e[3] = a), (e[4] = c), (e[5] = d))
          : (d = e[5]),
        d
      );
    }
    l.default = c;
  },
  98,
);
