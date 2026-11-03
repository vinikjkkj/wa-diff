__d(
  "WAWebLoggedOutCometRoot",
  [
    "CometPlaceholder.react",
    "WAWebLoggedOutInitializer.react",
    "buildWAWebCometRoot",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx("div", {})), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx("div", {
              id: "app",
              children: s.jsx(r("CometPlaceholder.react"), {
                fallback: t,
                name: i.id,
                children: s.jsx(r("WAWebLoggedOutInitializer.react"), {}),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function c(e) {
      r("buildWAWebCometRoot")(u, e);
    }
    l.init = c;
  },
  98,
);
