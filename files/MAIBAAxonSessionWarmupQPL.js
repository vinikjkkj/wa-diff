__d(
  "MAIBAAxonSessionWarmupQPL",
  ["QuickPerformanceLogger", "qpl", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(324735039, "3608"),
      u = "preload_gate_resolved",
      c = "background_defer_ran",
      d = "idle_deadline_armed",
      m = "idle_deadline_reached",
      p = "preload_completed",
      _ = "preload_not_ongoing",
      f = "preload_watchdog",
      g = 1;
    function h() {
      return "maiba-catalogue-warmup-" + r("uuidv4")();
    }
    function y() {
      var t = g++;
      return ((e || (e = r("QuickPerformanceLogger"))).markerStart(s, t), t);
    }
    function C(t, n) {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(s, n, {
        instanceKey: t,
      });
    }
    function b(t, n) {
      ((e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
        s,
        {
          int: { fire_time_ms: Math.round(n.fireTimeMs) },
          string: {
            ad_account_id: n.adAccountId,
            scope: "shared",
            trigger: n.trigger,
            warmup_id: n.warmupId,
          },
        },
        { instanceKey: t },
      ),
        e.markerEnd(s, 2, t));
    }
    function v(t, n, o) {
      ((e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
        s,
        { string: { end_reason: n, trigger: o } },
        { instanceKey: t },
      ),
        e.markerEnd(s, 4, t));
    }
    ((l.WARMUP_POINT_GATE_RESOLVED = u),
      (l.WARMUP_POINT_DEFER_RAN = c),
      (l.WARMUP_POINT_IDLE_DEADLINE_ARMED = d),
      (l.WARMUP_POINT_IDLE_DEADLINE_REACHED = m),
      (l.WARMUP_POINT_PRELOAD_COMPLETED = p),
      (l.WARMUP_POINT_PRELOAD_NOT_ONGOING = _),
      (l.WARMUP_POINT_PRELOAD_WATCHDOG = f),
      (l.generateWarmupId = h),
      (l.startWarmupMarker = y),
      (l.pointWarmupMarker = C),
      (l.completeWarmupMarker = b),
      (l.abandonWarmupMarker = v));
  },
  98,
);
