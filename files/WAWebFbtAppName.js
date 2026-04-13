__d(
  "WAWebFbtAppName",
  ["WAWebEnvironment", "WAWebFbtCommon", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").isWindows
        ? r("WAWebFbtCommon")("WhatsApp for Windows")
        : r("WAWebFbtCommon")("WhatsApp Web");
    }
    function s() {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = e()), (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    function u() {
      return r("WAWebEnvironment").isWindows
        ? r("WAWebFbtCommon")("WhatsApp")
        : r("WAWebFbtCommon")("WhatsApp Web");
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u()), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.fbtWAWebAppShortName = e),
      (l.WAWebAppShortName = s),
      (l.fbtWAWebAppShortNameWithoutWindows = u),
      (l.WAWebAppShortNameWithoutWindows = c));
  },
  98,
);
