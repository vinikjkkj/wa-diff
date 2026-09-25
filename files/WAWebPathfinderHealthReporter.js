__d(
  "WAWebPathfinderHealthReporter",
  [
    "WALogger",
    "WAWebPathfinderFrameworkHealthWamEvent",
    "WAWebWamEnumPathfinderHealthEventType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "cap_drops",
      u = "editing_dedup_drops",
      c = "capture_volume",
      d = "ring_buffer_overflows",
      m = "targetless_touch_drops",
      p = "unresolvable_custom_event_drops",
      _ = [s, u, c, d, m, p],
      f = g();
    function g() {
      var e = {};
      for (var t of _) e[t] = 0;
      return e;
    }
    function h(e, t) {
      f[e] == null || !Number.isFinite(t) || t < 0 || (f[e] += t);
    }
    function y() {
      var e = [],
        t = !1;
      for (var n of _) {
        var r = f[n];
        (r !== 0 && (t = !0), e.push(n + ": " + String(r)));
      }
      if (t) {
        var o = e.join(", ");
        (S(), C(o));
      }
    }
    function C(t) {
      try {
        new (o(
          "WAWebPathfinderFrameworkHealthWamEvent",
        ).PathfinderFrameworkHealthWamEvent)({
          pathfinderHealthEventType: o("WAWebWamEnumPathfinderHealthEventType")
            .PATHFINDER_HEALTH_EVENT_TYPE.WEB_SESSION_FOOTPRINT,
          pathfinderHealthEventData: t,
        }).commit();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] framework-health drain failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pathfinder-framework-health-drain-failed");
      }
    }
    function b() {
      S();
    }
    function v() {
      S();
    }
    function S() {
      for (var e of _) f[e] = 0;
    }
    ((l.COUNTER_CAP_DROPS = s),
      (l.COUNTER_EDITING_DEDUP_DROPS = u),
      (l.COUNTER_CAPTURE_VOLUME = c),
      (l.COUNTER_RING_BUFFER_OVERFLOWS = d),
      (l.COUNTER_TARGETLESS_TOUCH_DROPS = m),
      (l.COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS = p),
      (l.recordPathfinderHealthCounter = h),
      (l.drainPathfinderHealthCounters = y),
      (l.discardPathfinderHealthCounters = b),
      (l.resetPathfinderHealthCountersForTesting = v));
  },
  98,
);
