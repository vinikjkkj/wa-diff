__d(
  "WAWebTimeSpentLoggingExternal",
  [
    "WAWebABProps",
    "WAWebClock",
    "WAWebTimeSpentLoggingSession",
    "WAWebTsExternalWamEvent",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = new Set();
    function u() {
      return s.size > 0;
    }
    function c(e) {
      var t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession(),
        n = {
          source: e,
          tsSessionId: t.id,
          startTimeMs: t.relativeTimestampMs,
        };
      n.tsTimestampMs = o("WAWebClock").Clock.getServerTimeMs();
      var r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      (r != null && (n.unifiedSessionId = r), m(n), s.add(n));
      var a = !1;
      return function () {
        a || (_(n), (a = !0));
      };
    }
    function d(t, n) {
      var r = n - t.startTimeMs;
      if (!(r < e)) {
        var o = {
          tsSessionId: t.tsSessionId,
          tsDuration: Math.floor(r / 1e3),
          tsExternalEventSource: t.source,
          relativeTimestampMs: t.startTimeMs,
        };
        return (
          t.tsTimestampMs != null && (o.tsTimestampMs = t.tsTimestampMs),
          t.unifiedSessionId != null &&
            (o.unifiedSessionId = t.unifiedSessionId),
          o
        );
      }
    }
    function m(e) {
      e.intervalTimeoutId = self.setTimeout(
        function () {
          return p(e);
        },
        o("WAWebABProps").getABPropConfigValue("ts_session_duration_ms") / 2,
      );
    }
    function p(e) {
      o("WAWebTimeSpentLoggingSession").markTimeSpentActivity();
      var t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession(),
        n = t.relativeTimestampMs,
        r = d(e, n);
      r != null &&
        (new (o("WAWebTsExternalWamEvent").TsExternalWamEvent)(r).commit(),
        (e.startTimeMs = n),
        m(e));
    }
    function _(e) {
      (e.intervalTimeoutId != null && self.clearTimeout(e.intervalTimeoutId),
        s.delete(e));
      var t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession(),
        n = t.relativeTimestampMs,
        r = d(e, n);
      r != null &&
        new (o("WAWebTsExternalWamEvent").TsExternalWamEvent)(r).commit();
    }
    ((l.tsExternalEventsInProgress = u), (l.beginTsExternalEvent = c));
  },
  98,
);
