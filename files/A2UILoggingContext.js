__d(
  "A2UILoggingContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        logActionFailure: function () {},
        logActionSuccess: function () {},
        logBlocksDetected: function () {},
        logBlocksParsed: function () {},
        logButtonClick: function () {},
        logDeeplinkClick: function () {},
        logImpression: function () {},
        logParseError: function () {},
        logRenderOutcome: function () {},
        logUnknownWidgetType: function () {},
      },
      d = s.createContext(c);
    function m() {
      return u(d);
    }
    ((l.A2UILoggingContext = d), (l.useA2UILogger = m));
  },
  98,
);
