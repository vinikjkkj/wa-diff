__d(
  "InteractionTrackingInCrashReports",
  [
    "BrowserCrashConfig",
    "FBLogger",
    "QPLEvent",
    "getErrorSafe",
    "logForCrash",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    r("requireWeak")("one-trace", function (e) {
      s = e;
    });
    var u = new Map(),
      c = null,
      d = new Set(["RESPONSIVENESS", "INP", "LONGTASK", "UNKNOWN"]),
      m = { isSystem: !0 };
    function p() {
      if (r("BrowserCrashConfig").SHOULD_CAPTURE_INTERACTION_DATA)
        try {
          g();
        } catch (e) {
          r("FBLogger")("log-for-crash")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to init interaction tracking in crash reports");
        }
    }
    function _(t) {
      if (!d.has(t.traceType)) {
        (u.set(t.traceID, t), (c = t));
        var n = t.qplEvent,
          r = n ? (e || (e = o("QPLEvent"))).getMarkerId(n) : null,
          a = t.tracePolicy;
        (o("logForCrash").logForCrash("qpl_event_marker_id", r, m),
          o("logForCrash").logForCrash("trace_policy", a, m),
          o("logForCrash").logForCrash("last_qpl_event_marker_id", r, m),
          o("logForCrash").logForCrash("last_trace_policy", a, m));
      }
    }
    function f(e) {
      var t;
      d.has(e.traceType) ||
        (((t = c) == null ? void 0 : t.traceID) === e.traceID &&
          (o("logForCrash").clearCrashLog("qpl_event_marker_id", m),
          o("logForCrash").clearCrashLog("trace_policy", m)),
        u.delete(e.traceID));
    }
    function g() {
      var e, t;
      ((e = s) == null ||
        e.subscribe("trace-policy-set", function (e) {
          try {
            _(e);
          } catch (e) {
            r("FBLogger")("log-for-crash")
              .catching(r("getErrorSafe")(e))
              .warn("Failed to track trace policy set");
          }
        }),
        (t = s) == null ||
          t.subscribe("trace-end", function (e) {
            try {
              f(e);
            } catch (e) {
              r("FBLogger")("log-for-crash")
                .catching(r("getErrorSafe")(e))
                .warn("Failed to track trace end");
            }
          }));
    }
    ((l.initInteractionTrackingInCrashReports = p),
      (l._initInteractionTrackingInCrashReports = g));
  },
  98,
);
