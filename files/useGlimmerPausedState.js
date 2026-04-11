__d(
  "useGlimmerPausedState",
  ["react", "react-compiler-runtime", "usePartialViewImpression"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e === void 0 ? !0 : e,
        a = c(n),
        i = a[0],
        l = a[1],
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function (t) {
            var e = t.hiddenReason;
            e !== "COMPONENT_UNMOUNTED" && l(!0);
          }),
          (t[0] = s))
        : (s = t[0]);
      var u = s,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function () {
            l(!1);
          }),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { onImpressionEnd: u, onImpressionStart: m }), (t[2] = p))
        : (p = t[2]);
      var _ = r("usePartialViewImpression")(p),
        f;
      return (
        t[3] !== _ || t[4] !== i
          ? ((f = { paused: i, ref: _ }), (t[3] = _), (t[4] = i), (t[5] = f))
          : (f = t[5]),
        f
      );
    }
    l.default = d;
  },
  98,
);
