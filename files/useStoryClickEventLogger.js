__d(
  "useStoryClickEventLogger",
  [
    "CometFeedClickEventsLoggerContext",
    "CometFeedLoggingExtraFieldsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "getAbsoluteUrl",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d() {
      var e = o("react-compiler-runtime").c(5),
        t = c(r("CometFeedClickEventsLoggerContext")),
        n = c(r("CometTrackingNodesContext")),
        a = c(r("CometTrackingCodeContext")),
        i = a.encrypted_tracking[0],
        l = c(r("CometFeedLoggingExtraFieldsContext")),
        s;
      return (
        e[0] !== l || e[1] !== t || e[2] !== n || e[3] !== i
          ? ((s = function (o, a, s, u) {
              var e = r("getAbsoluteUrl")(s);
              t(o, n, i, a, e, l, u);
            }),
            (e[0] = l),
            (e[1] = t),
            (e[2] = n),
            (e[3] = i),
            (e[4] = s))
          : (s = e[4]),
        s
      );
    }
    l.default = d;
  },
  98,
);
