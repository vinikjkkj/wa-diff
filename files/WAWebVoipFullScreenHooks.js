__d(
  "WAWebVoipFullScreenHooks",
  [
    "WAWebVoipFullScreenContext",
    "WAWebVoipGatingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(r("WAWebVoipFullScreenContext")),
        t = e.isFullScreen;
      return t;
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = o("WAWebVoipGatingUtils").isFullScreenToggleEnabled()),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.useIsFullScreenApplicable = u), (l.useShouldShowFullScreenToggle = c));
  },
  98,
);
