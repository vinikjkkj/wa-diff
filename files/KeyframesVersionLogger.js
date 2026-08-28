__d(
  "KeyframesVersionLogger",
  ["BanzaiLogger", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "KeyframesFramePerfLoggerConfig",
      s = {
        appid: 256281040558,
        isemployee: r("CurrentUser").isEmployee() ? 1 : 0,
      },
      u = { USE_LEGACY: "keyframes2_used", USE_MODERN: "keyframes3_used" };
    function c(t, n) {
      r("BanzaiLogger").log(
        e,
        babelHelpers.extends({}, s, {
          name: t,
          extras: n != null ? n : void 0,
        }),
      );
    }
    var d = {
      logLegacy: function (t) {
        c(u.USE_LEGACY, t);
      },
      logModern: function (t) {
        c(u.USE_MODERN, t);
      },
    };
    l.KeyframesVersionLogger = d;
  },
  98,
);
