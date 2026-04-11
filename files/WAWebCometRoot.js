__d(
  "WAWebCometRoot",
  [
    "WAWebAppWrapper.react",
    "buildWAWebCometRoot",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("WAWebAppWrapper.react"), {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function c(e) {
      r("buildWAWebCometRoot")(u, e);
    }
    l.init = c;
  },
  98,
);
