__d(
  "WAWebFbtAppName",
  ["WAWebEnvironment", "WAWebFbtCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").isWindows
        ? r("WAWebFbtCommon")("WhatsApp for Windows")
        : r("WAWebFbtCommon")("WhatsApp Web");
    }
    function s() {
      return e();
    }
    function u() {
      return r("WAWebEnvironment").isWindows
        ? r("WAWebFbtCommon")("WhatsApp")
        : r("WAWebFbtCommon")("WhatsApp Web");
    }
    function c() {
      return u();
    }
    ((l.fbtWAWebAppShortName = e),
      (l.WAWebAppShortName = s),
      (l.fbtWAWebAppShortNameWithoutWindows = u),
      (l.WAWebAppShortNameWithoutWindows = c));
  },
  98,
);
