__d(
  "WAWebVoipFullScreenHooks",
  ["WAWebVoipGatingUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
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
    l.useShouldShowFullScreenToggle = e;
  },
  98,
);
