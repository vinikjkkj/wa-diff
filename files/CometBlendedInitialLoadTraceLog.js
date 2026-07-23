__d(
  "CometBlendedInitialLoadTraceLog",
  [
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "performanceNavigationStart",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(209070692, "2971"),
      u = { FINISHED: 2, NOT_STARTED: 0, STARTED: 1, VC: 3 },
      c = !1,
      d = !1,
      m = {
        acto: u.NOT_STARTED,
        chat_heads: u.NOT_STARTED,
        main: u.NOT_STARTED,
        mwj_badge: u.NOT_STARTED,
      };
    function p(e, t) {
      switch (t) {
        case "START":
          break;
        case "SUCCESS":
          ((m[e] = u.FINISHED), r("QPLUserFlow").addPoint(s, e + "_end"));
          break;
        case "CANCEL":
        case "CANCEL_BACKGROUND":
        case "CANCEL_NAVIGATION":
          (r("QPLUserFlow").addPoint(s, e + "_cancel"),
            (m[e] = u.FINISHED),
            e === "main" && (d = !0));
          break;
        case "TIMEOUT":
          ((m[e] = u.FINISHED),
            r("QPLUserFlow").addPoint(s, e + "_timeout"),
            e === "main" && (d = !0));
          break;
        case "FAIL":
        case "ERROR":
          ((m[e] = u.FINISHED),
            (d = !0),
            r("QPLUserFlow").addPoint(s, e + "_" + t.toLowerCase()));
          break;
        default:
          ((m[e] = u.FINISHED),
            r("QPLUserFlow").addPoint(s, e + "_" + t.toLowerCase()));
      }
      (Object.keys(m).some(function (e) {
        return m[e] !== u.FINISHED;
      }) || (d = !0),
        d &&
          (["ERROR", "FAIL"].includes(t)
            ? r("QPLUserFlow").endFailure(s, e + " failed")
            : t === "TIMEOUT"
              ? r("QPLUserFlow").endTimeout(s)
              : e === "main" &&
                  ["CANCEL", "CANCEL_BACKGROUND", "CANCEL_NAVIGATION"].includes(
                    t,
                  )
                ? r("QPLUserFlow").endCancel(s)
                : r("QPLUserFlow").endSuccess(s)));
    }
    function _(t, n) {
      var o;
      return (
        (n == null ? void 0 : n.qplEvent) != null &&
          t != null &&
          (o = (e || (e = r("QuickPerformanceLogger"))).getMarkerStartTs(
            n.qplEvent,
            { instanceKey: t },
          )),
        o
      );
    }
    var f = {
        log: function (t, n) {
          !c || d || p(t, n);
        },
        logACTO: function (t) {
          !c ||
            d ||
            (r("QPLUserFlow").addAnnotations(s, { int: { actoEmpty: 1 } }),
            (m.acto = u.FINISHED),
            t === "NO_DATA" && r("QPLUserFlow").addPoint(s, "acto_end"));
        },
        logInitialLoadStart: function (t) {
          t !== "comet.home" ||
            c ||
            d ||
            ((c = !0),
            r("QPLUserFlow").start(s, {
              timestamp: r("performanceNavigationStart")(),
            }),
            r("QPLUserFlow").addPoint(s, "main_start", {
              timestamp: r("performanceNavigationStart")(),
            }),
            r("QPLUserFlow").addAnnotations(s, { string: { tracePolicy: t } }),
            (m.main = u.STARTED));
        },
        logStart: function (t, n, o) {
          if (!(!c || d)) {
            var e = _(n, o),
              a = {};
            (e != null && (a = { timestamp: e }),
              (m[t] = u.STARTED),
              r("QPLUserFlow").addPoint(s, t + "_start", a));
          }
        },
        logVc: function (t, n, o, a) {
          var e;
          if (!(!c || d)) {
            var i = _(n, o),
              l = {};
            if (
              (i != null &&
                a.visuallyComplete != null &&
                (l = { timestamp: i + a.visuallyComplete }),
              ((e = a.annotations) == null || (e = e.int) == null
                ? void 0
                : e.hidden) != null)
            ) {
              var p;
              r("QPLUserFlow").addAnnotations(s, {
                int: {
                  hidden:
                    (p = a.annotations) == null || (p = p.int) == null
                      ? void 0
                      : p.hidden,
                },
              });
            }
            ((m[t] = u.VC), r("QPLUserFlow").addPoint(s, t + "_vc", l));
          }
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
