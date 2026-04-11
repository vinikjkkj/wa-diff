__d(
  "ResponsivenessTracker",
  [
    "INPLogger",
    "LongtaskObserver",
    "MemoryUtils",
    "OneTraceCore",
    "VisibilityAPI",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearInterval",
    "getIncrementalEventCount",
    "performanceNow",
    "setInterval",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = !1,
      c = 1,
      d = null,
      m = null;
    function p(e, t) {
      if (d) {
        var n = d;
        d = null;
        var a = n.metrics.annotations,
          i = o("MemoryUtils").getCurrentMemory().usedJSHeapSize;
        for (var l in n.interruptionStat) {
          var s,
            u = n.interruptionStat[l];
          r("addAnnotations")(a, {
            int:
              ((s = {}),
              (s[l + "_Count"] = u.count),
              (s[l + "_Total"] = u.total),
              (s[l + "_Max"] = u.max),
              (s[l + "_Avg"] = u.count > 0 ? u.total / u.count : 0),
              s),
          });
        }
        var m = 0;
        (o("INPLogger")
          .getObservedEventTypes()
          .forEach(function (e) {
            var t = r("getIncrementalEventCount")(e, "RESPONSIVENESS");
            if (t != null) {
              var n;
              (r("addAnnotations")(a, {
                int: ((n = {}), (n["eventCount_" + e] = t), n),
              }),
                (m += t));
            }
          }),
          r("addAnnotations")(a, {
            int: {
              sessionSeq: c++,
              usedJSHeapSize: i,
              totalEventCount: m,
              ST200: n.ST200,
              ST500: n.ST500,
              ST1000: n.ST1000,
            },
            string: {
              exitAction: e,
              recentInteractionIndentifier:
                r("OneTraceCore").getRecentInteractionIndentifier(),
            },
            string_array: { affectedInteractions: n.affectedInteractions },
          }),
          (n.metrics.tracePolicy = n.navigationMetrics.tracePolicy),
          r("OneTraceCore").endTrace(n.metrics.traceID, t, "SUCCESS"));
      }
    }
    function _(e, t, n, r, o) {
      if (d) {
        var a = d,
          i = a.interruptionStat[e];
        if (i == null) return;
        if (
          (i.count++, (i.total += n), (i.max = Math.max(i.max, n)), o === !0)
        ) {
          var l = null;
          (i.count === r
            ? (l = e + "_{n}")
            : i.count < r && (l = e + "_" + i.count),
            l != null &&
              ((a.metrics.markerPoints[l + "_start"] = { timeSinceStart: t }),
              (a.metrics.markerPoints[l + "_end"] = {
                timeSinceStart: t + n,
              })));
        }
      }
    }
    var f = null;
    function g(e, t) {
      (m != null && (r("clearInterval")(m), (m = null)), p(e, t));
    }
    function h(t, n) {
      if (!o("VisibilityAPI").isVisibilityHidden() && f) {
        var a = function () {
          var n = f;
          (n &&
            (d = {
              affectedInteractions: [],
              metrics: r("OneTraceCore").startTrace(
                r("uuidv4")(),
                t,
                "RESPONSIVENESS",
                (e || (e = r("performanceNow")))(),
              ),
              navigationMetrics: n,
              interruptionStat: {
                INP: { count: 0, total: 0, max: 0 },
                longtask: { count: 0, total: 0, max: 0 },
              },
              ST200: 0,
              ST500: 0,
              ST1000: 0,
            }),
            o("INPLogger")
              .getObservedEventTypes()
              .forEach(function (e) {
                d != null &&
                  (d.interruptionStat[e + "_INP"] = {
                    count: 0,
                    total: 0,
                    max: 0,
                  });
              }));
        };
        (a(),
          n != null &&
            (m != null && r("clearInterval")(m),
            (m = r("setInterval")(function () {
              (p("interval", (e || (e = r("performanceNow")))()), a());
            }, n))));
      }
    }
    function y(t) {
      if (!u) {
        var n;
        if (
          ((u = !0),
          !o("INPLogger").canUseEventTimingAPI ||
            !o("LongtaskObserver").canUseLongTasksAPI)
        )
          return;
        var a = (n = t.Responsiveness.overrideMaxSubspans) != null ? n : s;
        (o("LongtaskObserver").subscribe(function (e) {
          _(
            "longtask",
            e.startTime,
            e.duration,
            a,
            t.Responsiveness.logSubspans,
          );
        }),
          o("INPLogger").subscribe(function (e) {
            (_("INP", e.startTime, e.duration, a, t.Responsiveness.logSubspans),
              _(
                e.name + "_INP",
                e.startTime,
                e.duration,
                a,
                t.Responsiveness.logSubspans,
              ),
              d != null &&
                e.duration >= 200 &&
                ((d.ST200 += e.duration),
                e.duration >= 500 &&
                  ((d.ST500 += e.duration),
                  e.duration >= 1e3 && (d.ST1000 += e.duration))));
          }),
          r("OneTraceCore").currentTraces.forEach(function (e) {
            e.traceType === "INITIAL_LOAD" &&
              ((f = e), h(e.tracePolicy, t.Responsiveness.sessionInterval));
          }));
        var i = r("OneTraceCore").subscribe("trace-start", function (n) {
          t.Responsiveness.sessionInterval == null
            ? (n.traceType === "INITIAL_LOAD" ||
                n.traceType === "NAVIGATION") &&
              (d != null && g("navigation", (e || (e = r("performanceNow")))()),
              (f = n),
              h(n.tracePolicy, t.Responsiveness.sessionInterval))
            : n.traceType === "INITIAL_LOAD" &&
              d == null &&
              ((f = n),
              h(n.tracePolicy, t.Responsiveness.sessionInterval),
              i());
        });
        (o("VisibilityState").subscribe(function (n, o) {
          if (o) g("VisibilityState", (e || (e = r("performanceNow")))());
          else {
            var a = r("OneTraceCore").getCurrentTracePolicy();
            h(a, t.Responsiveness.sessionInterval);
          }
        }),
          o("WebAPIs").onBeforeUnload(function () {
            g("unload", (e || (e = r("performanceNow")))());
          }));
      }
    }
    function C(e) {
      var t;
      (t = d) == null || t.affectedInteractions.push(e);
    }
    ((l.init = y), (l.annotateInteractionToResponsiveness = C));
  },
  98,
);
