__d(
  "sendImpressionEnterActionValidationData",
  [
    "CometMetricsChannel2ViewabilityFalcoEvent",
    "CometTimeSpentNavigation",
    "WebSession",
    "getCentralImpressionScrollSpeed",
    "getCentralImpressionTimeAfterRefresh",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = t.impressedAt,
        l = r("CometTimeSpentNavigation").getPathInfo(),
        s = r("uuidv4")(),
        u = r("getCentralImpressionScrollSpeed")(),
        c = o("WebSession").getId(),
        d = {
          intersect_rect: t.intersectionRect,
          root: t.rootBounds,
          target_rect: t.boundingClientRect,
        };
      r("CometMetricsChannel2ViewabilityFalcoEvent").logImmediately(
        function () {
          return {
            csp: a.csp != null ? String(a.csp) : "",
            cts: i.toString(),
            eid: a.eid != null ? String(a.eid) : "",
            event_trace_id: s,
            framework: e,
            me: l ? l.name : null,
            pre_rs: n ? n.invisibleReason : null,
            rects: d,
            scroll_speed: u.toString(),
            sk: c,
            time_from_load: r(
              "getCentralImpressionTimeAfterRefresh",
            )().toString(),
            vp: t.visiblePercentage.toString(),
            xt: a.xt != null ? String(a.xt) : "",
          };
        },
      );
    }
    l.default = e;
  },
  98,
);
