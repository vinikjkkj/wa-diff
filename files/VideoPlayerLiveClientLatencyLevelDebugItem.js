__d(
  "VideoPlayerLiveClientLatencyLevelDebugItem",
  [
    "fbt",
    "VideoDebugItemLabelAndValue.react",
    "VideoPlayerHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react"));
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = (u || (u = o("VideoPlayerHooks"))).useLatencyLevel(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Latency setting:")), (e[0] = n))
        : (n = e[0]);
      var a;
      return (
        e[1] !== t
          ? ((a = c.jsx(r("VideoDebugItemLabelAndValue.react"), {
              label: n,
              value: t,
            })),
            (e[1] = t),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = d;
  },
  226,
);
