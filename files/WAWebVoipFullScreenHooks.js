__d(
  "WAWebVoipFullScreenHooks",
  [
    "WAWebEnvironment",
    "WAWebVoipFullScreenContext",
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
      return r("WAWebEnvironment").isGuest || t;
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t =
              !r("WAWebEnvironment").isGuest &&
              r("WAWebEnvironment").getEnvironment() !== "prod"),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.useIsFullScreenApplicable = u), (l.useShouldShowFullScreenToggle = c));
  },
  98,
);
