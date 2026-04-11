__d(
  "NavigationTracing",
  ["InteractionTracingMetrics", "WebSession", "cr:873"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = o("WebSession").getSessionId();
      e != null &&
        r("InteractionTracingMetrics").addMetadata(t, "websession_id", e);
    };
    function s(t, r) {
      t.startTime == null && (t.startTime = 0);
      var o = n("cr:873").navigation.traceInitialLoad(
        n("cr:873").transformStartMetadata(t),
        r,
      );
      return (e(o), o);
    }
    function u(t, r) {
      var o = n("cr:873").navigation.traceNavigation(
        n("cr:873").transformStartMetadata(t),
        r,
      );
      return (e(o), o);
    }
    ((l.traceInitialLoad = s), (l.traceNavigation = u));
  },
  98,
);
