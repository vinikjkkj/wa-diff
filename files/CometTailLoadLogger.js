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
      f = new Map(),
      g = new Set(),
      h = r("uuidv4")(),
      y = new Set();
    function C() {
      (m.clear(), p.clear(), _.clear(), f.clear(), g.clear());
    }
    function b(t, n, a) {
      (c++,
        u &&
          (e || (e = r("QuickPerformanceLogger"))).markerStart(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            c,
            a.current + d,
            { trackedForLoss: !0 },
          ));
      var i = t + "_" + n;
      f.set(i, c);
    }
    function v(e, t) {
      _.set(e, t.current);
    }
    function S(e, t, n) {
      var r = e + "_" + t;
      m.set(r, n);
    }
    function R(e, t) {
      var n,
        r = e + "_" + t;
      p.set(r, ((n = p.get(r)) != null ? n : 0) + 1);
    }
    function L(t, n, a, i, l) {
      var c,
        C = t + "_" + n;
      if (!(i === 113 && !f.has(C))) {
        var v = 0,
          S = _.get(t) || a,
          R = m.get(C);
        R != null && ((v = R), m.delete(C));
        var L = (c = p.get(C)) != null ? c : 0;
        p.delete(C);
        var E = f.get(C);
        E == null && (b(t, n, { current: S }), (E = f.get(C)));
        var k = o("VisibilityListener").getHiddenTime(
          S + r("performanceNavigationStart")(),
          a + r("performanceNavigationStart")(),
        );
        u &&
          ((e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            {
              int: {
                client_revision: r("SiteData").client_revision,
                hidden: +(k != null && k > 0),
                interruptedConsumption: v,
                pagesWithoutNewRows: L,
                position: n,
                windowHeight: Math.floor(window.innerHeight / 100),
              },
              string: {
                client_push_phase: r("SiteData").push_phase,
                pageletName: t,
                sessionId: h,
                tracePolicy: l,
              },
            },
            { instanceKey: E },
          ),
          e.markerEnd(
            o("CometTailLoadLoggerConfig").getQPLEvent(),
            i,
            E,
            a + d,
          ));
        var I = i;
        if (i !== 2 || (I === 706 && v >= s)) {
          var T =
            Object.keys(r("QuickLogActionType")).find(function (e) {
              return r("QuickLogActionType")[e] === i;
            }) || "UNKNOWN";
          y.add({ position: n, scrollingFNLType: T, tracePolicy: l });
        }
        (g.add(C), f.delete(C));
      }
    }
    function E(e, t, n, r, o) {
      var a = e + "_" + t,
        i = !g.has(a);
      (i && L(e, t, n, r, o), g.delete(a));
    }
    function k() {
      return y;
    }
    ((l.alreadyFinishedMarkerKeys = g),
      (l.reset = C),
      (l.startTailLoadTracing = b),
      (l.setTailLoadStartTime = v),
      (l.reportInterruptedConsumption = S),
      (l.reportPageWithoutNewRows = R),
      (l.endTailloadTracing = L),
      (l.logMarkerEnd = E),
      (l.dump = k));
  },
  98,
);
