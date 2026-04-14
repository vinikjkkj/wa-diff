__d(
  "CometTailLoadLogger",
  [
    "CometTailLoadLoggerConfig",
    "QuickLogActionType",
    "QuickPerformanceLogger",
    "SiteData",
    "VisibilityListener",
    "gkx",
    "performanceNavigationStart",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e3,
      u = r("gkx")("6890"),
      c = 0,
      d = r("performanceNavigationStart")(),
      m = new Map(),
      p = new Map(),
      _ = new Map(),
      f = new Set(),
      g = r("uuidv4")(),
      h = new Set();
    function y() {
      (m.clear(), p.clear(), _.clear(), f.clear());
    }
    function C(t, n, a) {
      (c++,
        u &&
          (e || (e = r("QuickPerformanceLogger"))).markerStart(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            c,
            a.current + d,
            { trackedForLoss: !0 },
          ));
      var i = t + "_" + n;
      _.set(i, c);
    }
    function b(e, t) {
      p.set(e, t.current);
    }
    function v(e, t, n) {
      var r = e + "_" + t;
      m.set(r, n);
    }
    function S(t, n, a, i, l) {
      var c = t + "_" + n,
        y = 0,
        b = p.get(t) || a,
        v = m.get(c);
      v != null && ((y = v), m.delete(c));
      var S = _.get(c);
      S == null && (C(t, n, { current: b }), (S = _.get(c)));
      var R = o("VisibilityListener").getHiddenTime(
        b + r("performanceNavigationStart")(),
        a + r("performanceNavigationStart")(),
      );
      if (
        (u &&
          ((e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            {
              int: {
                client_revision: r("SiteData").client_revision,
                hidden: +(R != null && R > 0),
                interruptedConsumption: y,
                position: n,
                windowHeight: Math.floor(window.innerHeight / 100),
              },
              string: {
                client_push_phase: r("SiteData").push_phase,
                pageletName: t,
                sessionId: g,
                tracePolicy: l,
              },
            },
            { instanceKey: S },
          ),
          e.markerEnd(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            i,
            S,
            a + d,
          )),
        i !== 2 || (i === 706 && y >= s))
      ) {
        var L =
          Object.keys(r("QuickLogActionType")).find(function (e) {
            return r("QuickLogActionType")[e] === i;
          }) || "UNKNOWN";
        h.add({ position: n, scrollingFNLType: L, tracePolicy: l });
      }
      (f.add(c), _.delete(c));
    }
    function R(e, t, n, r, o) {
      var a = e + "_" + t,
        i = !f.has(a);
      (i && S(e, t, n, r, o), f.delete(a));
    }
    function L() {
      return h;
    }
    ((l.alreadyFinishedMarkerKeys = f),
      (l.reset = y),
      (l.startTailLoadTracing = C),
      (l.setTailLoadStartTime = b),
      (l.reportInterruptedConsumption = v),
      (l.endTailloadTracing = S),
      (l.logMarkerEnd = R),
      (l.dump = L));
  },
  98,
);
