__d(
  "WAWebDeveloperMenuLabyrinthDebugTimeFormat",
  ["WAWeb-moment", "WAWebClock"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { hour: "numeric", minute: "2-digit", second: "2-digit" },
      s = { day: "numeric", month: "short", year: "numeric" };
    function u(t) {
      return d(t, e);
    }
    function c(t) {
      return d(t, babelHelpers.extends({}, s, e));
    }
    function d(e, t) {
      return new Intl.DateTimeFormat(
        r("WAWeb-moment").locale(),
        babelHelpers.extends({}, t, {
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        }),
      ).format(e);
    }
    ((l.formatLabyrinthDebugTime = u), (l.formatLabyrinthDebugDateTime = c));
  },
  98,
);
