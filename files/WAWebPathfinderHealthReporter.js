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
      m = [s, u, c, d],
      p = _();
    function _() {
      var e = {};
      for (var t of m) e[t] = 0;
      return e;
    }
    function f(e, t) {
      p[e] == null || !Number.isFinite(t) || t < 0 || (p[e] += t);
    }
    function g() {
      var e = [],
        t = !1;
      for (var n of m) {
        var r = p[n];
        (r !== 0 && (t = !0), e.push(n + ": " + String(r)));
      }
      if (t) {
        var o = e.join(", ");
        (C(), h(o));
      }
    }
    function h(t) {
      try {
        var n = new (o(
          "WAWebPathfinderFrameworkHealthWamEvent",
        ).PathfinderFrameworkHealthWamEvent)();
        (n.set({
          pathfinderHealthEventType: o("WAWebWamEnumPathfinderHealthEventType")
            .PATHFINDER_HEALTH_EVENT_TYPE.WEB_SESSION_FOOTPRINT,
          pathfinderHealthEventData: t,
        }),
          n.commit());
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
    function y() {
      C();
    }
    function C() {
      for (var e of m) p[e] = 0;
    }
    ((l.COUNTER_CAP_DROPS = s),
      (l.COUNTER_EDITING_DEDUP_DROPS = u),
      (l.COUNTER_CAPTURE_VOLUME = c),
      (l.COUNTER_RING_BUFFER_OVERFLOWS = d),
      (l.recordPathfinderHealthCounter = f),
      (l.drainPathfinderHealthCounters = g),
      (l.resetPathfinderHealthCountersForTesting = y));
  },
  98,
);
