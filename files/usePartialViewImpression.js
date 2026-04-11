__d(
  "usePartialViewImpression",
  ["react-compiler-runtime", "useVisibilityObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onImpressionEnd,
        a = e.onImpressionStart,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { hiddenWhenCSSStyleHidden: !0, hiddenWhenZeroArea: !0 }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== n || t[2] !== a
          ? ((l = { onHidden: n, onVisible: a, options: i }),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l))
          : (l = t[3]),
        r("useVisibilityObserver")(l)
      );
    }
    l.default = e;
  },
  98,
);
