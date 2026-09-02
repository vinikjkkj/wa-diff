__d(
  "WAWebPathfinderTraceEnvelope",
  ["WALogger", "WAWebABProps", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3,
      d = "web",
      m = "ring_capacity",
      p = 0;
    function _(e) {
      var t = e.entries,
        n = e.headClipped,
        r = e.totalRecorded;
      if (t.length === 0) return null;
      var o = babelHelpers.extends(
        {
          version: c,
          platform: d,
          generated_at_ms: Date.now(),
          interaction_count: r,
        },
        C(t),
        { head_clipped: n, serialization_failures: p, interactions: t },
      );
      return (n && (o.clip_reasons = [m]), o);
    }
    var f = 100 * 1024;
    function g(e) {
      return new Blob([e]).size > f;
    }
    function h(e) {
      return g(JSON.stringify(e));
    }
    function y(t, n) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "bug_reporting_attach_pathfinder_pre_bug_creation",
        )
      )
        return null;
      try {
        if (!n()) return null;
        var a = _(t());
        if (a == null)
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Pathfinder snapshot empty, skipping trace attachment",
                  ])),
              )
              .sendLogs("pathfinder-trace-empty"),
            null
          );
        var i = JSON.stringify(a);
        return g(i)
          ? (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Pathfinder snapshot exceeds ",
                    "B, skipping trace attachment",
                  ])),
                f,
              )
              .sendLogs("pathfinder-trace-too-large"),
            null)
          : i;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Pathfinder trace serialization failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-trace-serialization-fail"),
          null
        );
      }
    }
    function C(e) {
      var t = e[0].timestampMs,
        n = e[0].timestampMs;
      for (var r of e)
        (r.timestampMs < t && (t = r.timestampMs),
          r.timestampMs > n && (n = r.timestampMs));
      return { oldest_ms: t, newest_ms: n };
    }
    ((l.CLIP_REASON_RING_CAPACITY = m),
      (l.buildPathfinderTraceEnvelope = _),
      (l.MAX_TRACE_BYTES = f),
      (l.exceedsJsonByteBudget = g),
      (l.exceedsTraceByteBudget = h),
      (l.serializePathfinderTraceEnvelope = y));
  },
  98,
);
