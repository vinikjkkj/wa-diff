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
      f = [s, p],
      g = h();
    function h() {
      var e = {};
      for (var t of _) e[t] = 0;
      return e;
    }
    function y(e, t) {
      g[e] == null || !Number.isFinite(t) || t < 0 || (g[e] += t);
    }
    function C() {
      var e = [],
        t = !1;
      for (var n of _) {
        var r = g[n];
        (r !== 0 && f.includes(n) && (t = !0), e.push(n + ": " + String(r)));
      }
      if (!t) return (S(), !1);
      var o = e.join(", ");
      return (S(), b(o), !0);
    }
    function b(t) {
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
    function v() {
      S();
    }
    function S() {
      for (var e of _) g[e] = 0;
    }
    ((l.COUNTER_CAP_DROPS = s),
      (l.COUNTER_EDITING_DEDUP_DROPS = u),
      (l.COUNTER_CAPTURE_VOLUME = c),
      (l.COUNTER_RING_BUFFER_OVERFLOWS = d),
      (l.COUNTER_TARGETLESS_TOUCH_DROPS = m),
      (l.COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS = p),
      (l.recordPathfinderHealthCounter = y),
      (l.drainPathfinderHealthCounters = C),
      (l.discardPathfinderHealthCounters = v));
  },
  98,
);
