__d(
  "RSTInteractionTrackingMainThread",
  [
    "RSTConfig",
    "RSTEvents",
    "RSTMetadataMainThread",
    "ResponsiveTrackerMainThread",
    "one-trace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["RESPONSIVENESS", "INP", "LONGTASK", "UNKNOWN"]);
    function s() {
      r("RSTConfig").SHOULD_CAPTURE_INTERACTION_DATA &&
        (r("one-trace").subscribe("trace-policy-set", function (t) {
          if (!e.has(t.traceType)) {
            var n = o("RSTMetadataMainThread").getMainThreadMetadata();
            r("ResponsiveTrackerMainThread").postEvent(
              o("RSTEvents").RSTEvent.TRACE_POLICY_SET,
              babelHelpers.extends({ trace: babelHelpers.extends({}, t) }, n),
            );
          }
        }),
        r("one-trace").subscribe("trace-end", function (t) {
          if (!e.has(t.traceType)) {
            var n = o("RSTMetadataMainThread").getMainThreadMetadata();
            r("ResponsiveTrackerMainThread").postEvent(
              o("RSTEvents").RSTEvent.TRACE_END,
              babelHelpers.extends(
                {
                  trace: babelHelpers.extends({}, t, {
                    endTimestamp: Date.now(),
                  }),
                },
                n,
              ),
            );
          }
        }));
    }
    l.start = s;
  },
  98,
);
