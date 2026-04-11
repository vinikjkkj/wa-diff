__d(
  "VisualCompletionAdapter",
  [
    "QPLEvent",
    "ReactStackUtils",
    "WebAPIs",
    "addAnnotations",
    "getVisualCompletionDefaultConfig",
    "interaction-tracing-metrics",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "default",
      c = new Map(),
      d = 4;
    function m(e, t) {
      var n,
        r = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(
          e,
        );
      r == null || (n = r.vcTracker) == null || n.observeMutation(t);
    }
    function p(t, n, a, i) {
      var l = new Map();
      return (
        t.forEachNavigationVCTrace(function (t, u) {
          var m,
            p = c.get(u);
          p == null && ((p = new Map()), c.set(u, p));
          var _ = ((m = p.get(n)) != null ? m : 0) + 1;
          (p.set(n, _),
            !(_ >= d) &&
              (l.set(t.traceID, _),
              t.addMarkerPoint(
                n + "_" + _ + "_start",
                (s || (s = r("performanceNow")))(),
                {
                  interactionId: a,
                  qplEvent: (e || (e = o("QPLEvent"))).getMarkerId(i),
                },
              )));
        }),
        l.size === 0
          ? function () {}
          : function () {
              t.forEachNavigationVCTrace(function (e, t) {
                var o = l.get(e.traceID);
                o != null &&
                  e.addMarkerPoint(
                    n + "_" + o + "_end",
                    (s || (s = r("performanceNow")))(),
                  );
              });
            }
      );
    }
    function _(e, t, n, o, a, i, l) {
      var s = r("getVisualCompletionDefaultConfig")();
      i != null && Object.assign(s, i);
      var d = new e.VisualCompletionTracing(n, a, t, o, s, l);
      return (
        d.onComplete(function (t) {
          e.setLastNavigationVCReport(t, l);
        }),
        e.setLastNavigationVCReport(null, l),
        e.setCurrentNavigationVCTrace(d, l),
        c.delete(l != null ? l : u),
        d
      );
    }
    function f(e, t, n, o, a) {
      var i = r("getVisualCompletionDefaultConfig")();
      return (
        a != null && Object.assign(i, a),
        new e.VisualCompletionTracing(n, 0, t, o, i)
      );
    }
    function g(e, t, n) {
      var r = t.vcTracker;
      r == null ||
        r.onComplete(function (e) {
          if (e) {
            t.vcStateLog = e.stateLog;
            var o = [];
            (r.visualChangeRecordList.forEach(function (e) {
              var t = e.record;
              o.push(t);
            }),
              (t.vcMutationLog = o),
              (t.hasVcReport = !0));
            for (var a in e.annotations)
              for (var i in e.annotations[a])
                t.annotations[a][i] = e.annotations[a][i];
            (e.markerPoints.forEach(function (e, n) {
              var r = e.data,
                o = e.timestamp;
              t.markerPoints[n] = {
                data: r,
                timestamp: o,
                type: "VisualCompletion",
              };
            }),
              e.tagSet.forEach(function (e, t) {
                e.forEach(function (e) {
                  n.addTag(t, e);
                });
              }));
          }
        });
    }
    function h(e, t) {
      var n,
        a,
        i =
          (n = e.config) == null
            ? void 0
            : n.getReactComponentStackFromDOMElement,
        l =
          (a = e.config) == null
            ? void 0
            : a.getWrapperComponentPropArrayFromDOMElement;
      (i &&
        e.config.logVCReactStack &&
        e.onBeforeComplete(function (e, n) {
          if (e) {
            var a;
            if (
              ((a = t.annotations.string) == null ? void 0 : a.cancelType) !=
                null &&
              n.size() > 0
            ) {
              var l = Array.from(n.keys())[0],
                s = o("ReactStackUtils").getTrimmedReactStack(
                  l,
                  "HeroPagelet",
                  i,
                );
              s != null &&
                r("addAnnotations")(e.annotations, {
                  string: { incompleteLoadingElementReactStack: s.join(",") },
                });
            }
            ["vcWithoutImage", "visuallyComplete"].forEach(function (t) {
              var n = e.markerPoints.get(t),
                r = o("WebAPIs").derefOnlyAttachedElement(
                  n == null ? void 0 : n.element,
                );
              if (n && r) {
                var a = o("ReactStackUtils").getTrimmedReactStack(
                  r,
                  "HeroPagelet",
                  i,
                );
                if (a != null) {
                  var l = n.data || {};
                  ((l.reactStack = a), (n.data = l));
                }
              }
            });
          }
        }),
        l &&
          e.onBeforeComplete(function (e) {
            e &&
              ["vcWithoutImage", "visuallyComplete"].forEach(function (n) {
                var r = e.markerPoints.get(n),
                  a = o("WebAPIs").derefOnlyAttachedElement(
                    r == null ? void 0 : r.element,
                  );
                if (r && a) {
                  var i = l(a, "HeroPlaceholder", "placeholderUUID"),
                    s = new Set();
                  if (
                    (i.forEach(function (e) {
                      if (e != null && t.placeholderMap[e]) {
                        var n = t.placeholderMap[e].reverse();
                        n.forEach(function (e) {
                          e.startTime <= r.timestamp &&
                            e.description != null &&
                            s.add(e.description);
                        });
                      }
                    }),
                    s.size > 0)
                  ) {
                    var u = r.data || {};
                    ((u.vcBlockingPlaceholders = Array.from(s)), (r.data = u));
                  }
                }
              });
          }));
    }
    ((l.observeMutation = m),
      (l.markOtherInteractionSubspanToNavigationVC = p),
      (l.traceNavigationVC = _),
      (l.traceInteractionVC = f),
      (l.copyVcMetricsOnComplete = g),
      (l.logFinalReactStackOnBeforeComplete = h));
  },
  98,
);
