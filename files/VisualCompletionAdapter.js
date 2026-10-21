__d(
  "VisualCompletionAdapter",
  [
    "QPLEvent",
    "ReactStackUtils",
    "WebAPIs",
    "addAnnotations",
    "getVisualCompletionDefaultConfig",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "default",
      c = new Map(),
      d = 4,
      m = 2048,
      p = "[truncated]";
    function _(e) {
      var t = new Set();
      e.slice()
        .sort(function (e, t) {
          return t.endTime - e.endTime;
        })
        .forEach(function (e) {
          var n = e.description;
          t.add(n);
        });
      for (
        var n = Array.from(t),
          r = JSON.stringify(p).length + 1,
          o = [],
          a = 2,
          i = 0;
        i < n.length;
        i++
      ) {
        var l = JSON.stringify(n[i]).length + (o.length > 0 ? 1 : 0),
          s = i < n.length - 1 ? r : 0;
        if (a + l + s > m) {
          o.push(p);
          break;
        }
        (o.push(n[i]), (a += l));
      }
      return o;
    }
    function f(e, t, n) {
      for (var r in e)
        e[r].forEach(function (e) {
          var r = e.data.placeholderUUID;
          e.data.spanType === "PlaceholderWait" &&
            typeof r == "string" &&
            t.has(r) &&
            e.start <= n &&
            (e.data.vcBlocking = !0);
        });
    }
    function g(e, t) {
      var n,
        r = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(
          e,
        );
      r == null || (n = r.vcTracker) == null || n.observeMutation(t);
    }
    function h(t, n, a, i) {
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
    function y(e, t, n, o, a, i, l) {
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
    function C(e, t, n, o, a) {
      var i = r("getVisualCompletionDefaultConfig")();
      return (
        a != null && Object.assign(i, a),
        new e.VisualCompletionTracing(n, 0, t, o, i)
      );
    }
    function b(e, t, n) {
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
    function v(e, t) {
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
            if (e) {
              var n = e.markerPoints.get("visuallyComplete"),
                r = o("WebAPIs").derefOnlyAttachedElement(
                  n == null ? void 0 : n.element,
                );
              if (n && r) {
                var a = l(r, "HeroPlaceholder", "placeholderUUID"),
                  i = l(r, "HeroHoldBoundary", "placeholderUUID").concat(
                    l(r, "HeroHoldLoggingBoundary", "placeholderUUID"),
                  ),
                  s = new Map();
                (a.forEach(function (e) {
                  e != null && s.set(e, !1);
                }),
                  i.forEach(function (e) {
                    e != null && s.set(e, !0);
                  }));
                var u = [],
                  c = new Set(),
                  d = new Set();
                (s.forEach(function (e, r) {
                  var a = [r],
                    i = "";
                  if (e) {
                    ((a = o("hero-tracing-placeholder")
                      .HeroHoldLoggingBoundaryRegistry.getHoldIDs(r)
                      .filter(function (e) {
                        return !d.has(e);
                      })),
                      a.forEach(function (e) {
                        return d.add(e);
                      }));
                    var l = o(
                      "hero-tracing-placeholder",
                    ).HeroHoldLoggingBoundaryRegistry.getBoundaryName(r);
                    i = l != null ? "@" + l : "";
                  }
                  a.forEach(function (r) {
                    var o;
                    (o = t.placeholderMap[r]) == null ||
                      o.forEach(function (t) {
                        if (
                          t.startTime <= n.timestamp &&
                          t.description != null
                        ) {
                          var o;
                          (u.push({
                            description: e
                              ? "HeroHold(" + t.description + i + ")"
                              : t.description,
                            endTime: (o = t.endTime) != null ? o : 1 / 0,
                          }),
                            c.add(r));
                        }
                      });
                  });
                }),
                  f(t.subSpans, c, n.timestamp));
                var m = _(u);
                if (m.length > 0) {
                  var p = n.data || {};
                  ((p.vcBlockingPlaceholders = m), (n.data = p));
                }
              }
            }
          }));
    }
    ((l.getVCBlockingPlaceholders = _),
      (l.markVCBlockingSubspans = f),
      (l.observeMutation = g),
      (l.markOtherInteractionSubspanToNavigationVC = h),
      (l.traceNavigationVC = y),
      (l.traceInteractionVC = C),
      (l.copyVcMetricsOnComplete = b),
      (l.logFinalReactStackOnBeforeComplete = v));
  },
  98,
);
