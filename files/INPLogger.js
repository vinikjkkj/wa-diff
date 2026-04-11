__d(
  "INPLogger",
  [
    "CPUPressure",
    "DOMMutationTracker",
    "MemoryUtils",
    "OneTraceCore",
    "ReactStackUtils",
    "addAnnotations",
    "getIncrementalEventCount",
    "performanceNow",
    "stringHash",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("event"),
      c = new Set(),
      d = !1,
      m = 1,
      p = ["click", "keyup"],
      _ = new Set(p);
    function f() {
      return _;
    }
    function g(e) {
      if (!d) {
        if (
          (e.INP.overrideDelayedEventTypeFilter != null &&
            (_ = new Set(e.INP.overrideDelayedEventTypeFilter)),
          u)
        ) {
          e.INP.enableDOMMutationTracking === !0 &&
            o("DOMMutationTracker").init(e);
          var t = new window.PerformanceObserver(function (e) {
            e.getEntries().forEach(function (e) {
              _.has(e.name) &&
                c.forEach(function (t) {
                  t(e);
                });
            });
          });
          (h(function (t) {
            var n = r("OneTraceCore").startTrace(
                r("uuidv4")(),
                r("OneTraceCore").getCurrentTracePolicy(),
                "INP",
                t.startTime,
                void 0,
                { string: { inputEventType: t.name } },
              ),
              a = o("MemoryUtils").getCurrentMemory().usedJSHeapSize,
              i = r("getIncrementalEventCount")(t.name, "INP");
            if (
              (r("addAnnotations")(n.annotations, {
                int: {
                  cumulativeTotalEvent: i,
                  instanceNum: m++,
                  usedJSHeapSize: a,
                },
                string: {
                  inputEventType: t.name,
                  recentInteractionIndentifier:
                    r("OneTraceCore").getRecentInteractionIndentifier(),
                },
              }),
              t.target != null)
            ) {
              var l = t.target,
                u = l.isConnected === !1 ? "detached" : "attached";
              if (
                (r("addAnnotations")(n.annotations, {
                  string: { targetElementStatus: u },
                }),
                e.INP.getReactComponentStackFromDOMElement != null &&
                  (e.INP.logReactStack || e.INP.logReactStackHash))
              ) {
                var c = e.INP.getReactComponentStackFromDOMElement,
                  d = o("ReactStackUtils").getTrimmedReactStack(
                    l,
                    "HeroPagelet",
                    c,
                  );
                if (d != null) {
                  if (e.INP.logReactStackHash) {
                    var p = o("stringHash").stringArrayHash(d);
                    r("addAnnotations")(n.annotations, {
                      string: { reactStackHash: p },
                    });
                  }
                  e.INP.logReactStack &&
                    r("addAnnotations")(n.annotations, {
                      string_array: { reactStack: d },
                    });
                }
                var _ = e.INP.getWrapperComponentPropValueFromDOMElement;
                if (_) {
                  var f = _(l, "HeroPagelet", "name");
                  f != null &&
                    r("addAnnotations")(n.annotations, {
                      string: { pageletName: f },
                    });
                }
              }
            }
            if (
              (e.enableCPUPressureTracking === !0 &&
                o("CPUPressure").canUseCPUPressureAPI &&
                r("addAnnotations")(n.annotations, {
                  string: { cpu_pressure: o("CPUPressure").getCurrentState() },
                }),
              e.INP.enableDOMMutationTracking === !0)
            ) {
              var g = (s || (s = r("performanceNow")))(),
                h = o("DOMMutationTracker").hasMutationsInTimeRange(
                  t.processingStart,
                  g,
                );
              r("addAnnotations")(n.annotations, {
                bool: { hadDOMMutations: h },
              });
              var y = o("DOMMutationTracker").getMutationsInTimeRange(
                  t.processingStart,
                  g,
                ),
                C = 0,
                b = 0,
                v = 0,
                S = 0;
              (y.forEach(function (e) {
                ((C += e.addedNodesRefs.length),
                  (b += e.removedNodesRefs.length),
                  (v += e.hiddenElementRefs.length),
                  (S += e.unhiddenElementRefs.length));
              }),
                r("addAnnotations")(n.annotations, {
                  int: {
                    addedNodes: C,
                    removedNodes: b,
                    hiddenElements: v,
                    unhiddenElements: S,
                  },
                }));
            }
            ((n.markerPoints.processingStart = {
              timeSinceStart: t.processingStart,
            }),
              (n.markerPoints.processingEnd = {
                timeSinceStart: t.processingEnd,
              }),
              e.INP.eventTimingCallback == null ||
                e.INP.eventTimingCallback(t, n),
              r("OneTraceCore").endTrace(
                n.traceID,
                t.startTime + t.duration,
                "SUCCESS",
              ));
          }),
            t.observe({ buffered: !0, type: "event" }));
        }
        d = !0;
      }
    }
    function h(e) {
      return u
        ? (c.add(e),
          function () {
            c.delete(e);
          })
        : function () {};
    }
    ((l.canUseEventTimingAPI = u),
      (l.getObservedEventTypes = f),
      (l.init = g),
      (l.subscribe = h));
  },
  98,
);
