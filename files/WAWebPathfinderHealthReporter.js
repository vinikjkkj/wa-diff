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
      p = [s, u, c, d, m],
      _ = f();
    function f() {
      var e = {};
      for (var t of p) e[t] = 0;
      return e;
    }
    function g(e, t) {
      _[e] == null || !Number.isFinite(t) || t < 0 || (_[e] += t);
    }
    function h() {
      var e = [],
        t = !1;
      for (var n of p) {
        var r = _[n];
        (r !== 0 && (t = !0), e.push(n + ": " + String(r)));
      }
      if (t) {
        var o = e.join(", ");
        (v(), y(o));
      }
    }
    function y(t) {
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
    function C() {
      v();
    }
    function b() {
      v();
    }
    function v() {
      for (var e of p) _[e] = 0;
    }
    ((l.COUNTER_CAP_DROPS = s),
      (l.COUNTER_EDITING_DEDUP_DROPS = u),
      (l.COUNTER_CAPTURE_VOLUME = c),
      (l.COUNTER_RING_BUFFER_OVERFLOWS = d),
      (l.COUNTER_TARGETLESS_TOUCH_DROPS = m),
      (l.recordPathfinderHealthCounter = g),
      (l.drainPathfinderHealthCounters = h),
      (l.discardPathfinderHealthCounters = C),
      (l.resetPathfinderHealthCountersForTesting = b));
  },
  98,
);
