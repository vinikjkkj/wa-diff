__d(
  "InteractionTracingLogger",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["reactStack"],
      s,
      u = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
      c = 4;
    function d(e, t, n, r) {
      e.QuickPerformanceLogger.markerAnnotate(
        t,
        { int: { numReactCommit: n.size } },
        { instanceKey: r },
      );
    }
    function m(e, t, n, r, o) {
      var a;
      e.QuickPerformanceLogger.markerAnnotate(
        t,
        { string_array: ((a = {}), (a[n] = r), a) },
        { instanceKey: o },
      );
    }
    function p(e, t, n, r, o, a) {
      e.QuickPerformanceLogger.markerPoint(t, n, {
        data: r != null ? { string: { __key: r } } : null,
        instanceKey: o,
        timestamp: a,
      });
    }
    function _(e, t, n, r) {
      e.QuickPerformanceLogger.markerAnnotate(t, n.annotations, {
        instanceKey: r,
      });
      for (var o in n.tagSet) {
        var a = Array.from(n.tagSet[o]).sort();
        m(e, t, o, a, r);
      }
    }
    function f(t, n, r, o, a) {
      for (var i in o) {
        var l,
          s = o[i],
          c = s.data,
          d = s.timestamp,
          m = s.type;
        if (
          !(
            !t.allowedQPLPointTypes.has(m) ||
            ((l = t.qplPointFilterRegex) != null && l.exec(i))
          )
        ) {
          var _ = c;
          if (
            u.test(i) &&
            i !== "late_mutation/unexpected_1" &&
            (c == null ? void 0 : c.reactStack) != null
          ) {
            var f = c.reactStack,
              g = babelHelpers.objectWithoutPropertiesLoose(c, e);
            _ = g;
          }
          p(
            n,
            r,
            i,
            _ && Object.keys(_).length ? JSON.stringify(_) : void 0,
            a,
            d + t.qplBaseTimestamp,
          );
        }
      }
    }
    function g(e, t, n, r, o) {
      for (var a in r) {
        var i;
        if (!((i = e.qplPointFilterRegex) != null && i.exec(a)))
          for (var l = 0; l < r[a].length; l++) {
            var s = r[a][l],
              u = s.data,
              d = s.end,
              m = s.start,
              _ = s.type;
            if (e.allowedQPLPointTypes.has(_)) {
              var f =
                r[a].length === 1 ? a : a + "_" + (l >= c ? "MAX" : l + 1);
              (p(t, n, f + "_start", void 0, o, m + e.qplBaseTimestamp),
                p(
                  t,
                  n,
                  f + "_end",
                  Object.keys(u).length ? JSON.stringify(u) : void 0,
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
    function y(e, t, n, o, a, i) {
      (d(t, n, a.commitSet, i),
        _(t, n, a, i),
        f(e, t, n, a.markerPoints, i),
        g(e, t, n, a.subSpans, i));
      var l = e.qplActionMap[o],
        u =
          e.qplEndMarkerPointName != null &&
          a.markerPoints[e.qplEndMarkerPointName] != null
            ? a.markerPoints[e.qplEndMarkerPointName].timestamp
            : (s || (s = r("performanceNow")))();
      return (
        o === "DROPPED"
          ? t.QuickPerformanceLogger.markerDrop(n, i)
          : t.QuickPerformanceLogger.markerEnd(n, l, i, u + e.qplBaseTimestamp),
        l
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
