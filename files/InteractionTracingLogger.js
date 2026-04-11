__d(
  "InteractionTracingLogger",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
      u = 4;
    function c(e, t, n, r) {
      e.QuickPerformanceLogger.markerAnnotate(
        t,
        { int: { numReactCommit: n.size } },
        { instanceKey: r },
      );
    }
    function d(e, t, n, r, o) {
      var a;
      e.QuickPerformanceLogger.markerAnnotate(
        t,
        { string_array: ((a = {}), (a[n] = r), a) },
        { instanceKey: o },
      );
    }
    function m(e, t, n, r, o, a) {
      e.QuickPerformanceLogger.markerPoint(t, n, {
        data: r != null ? { string: { __key: r } } : null,
        instanceKey: o,
        timestamp: a,
      });
    }
    function p(e, t, n, r) {
      e.QuickPerformanceLogger.markerAnnotate(t, n.annotations, {
        instanceKey: r,
      });
      for (var o in n.tagSet) {
        var a = Array.from(n.tagSet[o]).sort();
        d(e, t, o, a, r);
      }
    }
    function _(e, t, n, r, o) {
      for (var a in r) {
        var i,
          l = r[a],
          u = l.data,
          c = l.timestamp,
          d = l.type;
        if (
          !(
            !e.allowedQPLPointTypes.has(d) ||
            ((i = e.qplPointFilterRegex) != null && i.exec(a))
          )
        ) {
          var p = u;
          (s.test(a) &&
            a !== "late_mutation/unexpected_1" &&
            u != null &&
            u.reactStack &&
            (p = f(r[a], ["reactStack"])),
            m(
              t,
              n,
              a,
              e.qplPointsShouldLogData === !0 && p && Object.keys(p).length
                ? JSON.stringify(p)
                : void 0,
              o,
              c + e.qplBaseTimestamp,
            ));
        }
      }
    }
    function f(e, t) {
      var n = e.data,
        r = n != null ? JSON.parse(JSON.stringify(n)) : null;
      return (
        r != null &&
          t.forEach(function (e) {
            return delete r[e];
          }),
        r
      );
    }
    function g(e, t, n, r, o) {
      for (var a in r) {
        var i;
        if (!((i = e.qplPointFilterRegex) != null && i.exec(a)))
          for (var l = 0; l < r[a].length; l++) {
            var s = r[a][l],
              c = s.data,
              d = s.end,
              p = s.start,
              _ = s.type;
            if (e.allowedQPLPointTypes.has(_)) {
              var f =
                r[a].length === 1 ? a : a + "_" + (l >= u ? "MAX" : l + 1);
              (m(t, n, f + "_start", void 0, o, p + e.qplBaseTimestamp),
                m(
                  t,
                  n,
                  f + "_end",
                  e.qplPointsShouldLogData === !0 && Object.keys(c).length
                    ? JSON.stringify(c)
                    : void 0,
                  o,
                  d + e.qplBaseTimestamp,
                ));
            }
          }
      }
    }
    function h(e, t, n, r, o) {
      var a = {
        crashResilient: e.crashResilient,
        type: e.qplMarkerType,
        enableE2ETracing: e.qplEnableE2ETracing,
      };
      t.QuickPerformanceLogger.markerStart(n, o, r + e.qplBaseTimestamp, a);
    }
    function y(t, n, o, a, i, l) {
      (c(n, o, i.commitSet, l),
        p(n, o, i, l),
        _(t, n, o, i.markerPoints, l),
        g(t, n, o, i.subSpans, l));
      var s = t.qplActionMap[a],
        u =
          t.qplEndMarkerPointName != null &&
          i.markerPoints[t.qplEndMarkerPointName] != null
            ? i.markerPoints[t.qplEndMarkerPointName].timestamp
            : (e || (e = r("performanceNow")))();
      return (
        a === "DROPPED"
          ? n.QuickPerformanceLogger.markerDrop(o, l)
          : n.QuickPerformanceLogger.markerEnd(o, s, l, u + t.qplBaseTimestamp),
        s
      );
    }
    function C(e, t) {
      var n, r, o, a, i, l;
      return ((n = e.annotations.int) == null ? void 0 : n.isError) === 1
        ? "FAIL"
        : e.wasOffline
          ? "OFFLINE"
          : ((r = e.annotations.string) == null ? void 0 : r.cancelType) ===
              "dropped"
            ? "DROPPED"
            : ((o = e.annotations.string) == null ? void 0 : o.cancelType) ===
                "timeout"
              ? "TIMEOUT"
              : t === !0 &&
                  e.wasCanceled &&
                  ((a = e.annotations.string) == null
                    ? void 0
                    : a.cancelType) === "navigation"
                ? "CANCEL_NAVIGATION"
                : t === !0 &&
                    e.wasCanceled &&
                    ((i = e.annotations.string) == null
                      ? void 0
                      : i.cancelType) === "background"
                  ? "CANCEL_BACKGROUND"
                  : e.wasCanceled ||
                      ((l = e.annotations.int) == null ? void 0 : l.aborted) ===
                        1
                    ? "CANCEL"
                    : "SUCCESS";
    }
    ((l.initQPL = h), (l.logQPL = y), (l.getTraceStatus = C));
  },
  98,
);
