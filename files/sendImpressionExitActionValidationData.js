__d(
  "sendImpressionExitActionValidationData",
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
        u = i != null && i !== 0 ? Date.now() - i : null,
        c = {
          intersect_rect: t.intersectionRect,
          root: t.rootBounds,
          target_rect: t.boundingClientRect,
        };
      r("CometMetricsChannel2ViewabilityFalcoEvent").logImmediately(
        function () {
          return {
            csp: a.csp != null ? String(a.csp) : "",
            cts: String(i),
            duration: u != null ? String(u) : null,
            eid: a.eid != null ? String(a.eid) : "",
            event_trace_id: s,
            exit_rs: t.invisibleReason,
            framework: e,
            me: l ? l.name : null,
            pre_rs: Object.prototype.hasOwnProperty.call(a, "pre_rs")
              ? String(a.pre_rs)
              : "",
            pre_vp: n ? String(n.visiblePercentage) : null,
            rects: c,
            scroll_speed: r("getCentralImpressionScrollSpeed")().toString(),
            sk: o("WebSession").getId(),
            time_from_load: r(
              "getCentralImpressionTimeAfterRefresh",
            )().toString(),
            vp:
              t.visiblePercentage != null
                ? t.visiblePercentage.toString()
                : null,
            xt: a.xt != null ? String(a.xt) : "",
          };
        },
      );
    }
    l.default = e;
  },
  98,
);
