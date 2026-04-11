__d(
  "JSSPConfigInit",
  [
    "JSSPBrsidMarker",
    "JSSPDevTraceFilter",
    "JSSPEmptySampleFilter",
    "JSSPEventCountCollector",
    "JSSPEventCountMarker",
    "JSSPFELabsMarker",
    "JSSPIdMarker",
    "JSSPInteractToNextPaintMarker",
    "JSSPInteractionToNextPaintCollector",
    "JSSPInteractionTraceDataMarker",
    "JSSPJestE2EMarker",
    "JSSPLongAnimationFrameCollector",
    "JSSPLongAnimationFrameMarker",
    "JSSPLongTaskLinker",
    "JSSPLongTaskMarker",
    "JSSPMemoryCollector",
    "JSSPMemoryMarker",
    "JSSPPerformanceEntryCollector",
    "JSSPReactFrameDedupFilter",
    "JSSPSampleDurationMarker",
    "JSSPSetting",
    "JSSPSubSpanMarker",
    "JSSPTraceSizeOptimizer",
    "JSSPUrlCollector",
    "JSSPUrlMarker",
    "JSSelfProfiler",
    "JSSelfProfilerConfig.experimental",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      ((e.run = function () {
        var e = this.getInstance();
        (e.registerDataCollectors(), e.registerTraceTransformers());
      }),
        (e.getInstance = function () {
          return new this();
        }));
      var t = e.prototype;
      return (
        (t.registerDataCollectors = function () {
          var e;
          ((e = r("JSSelfProfiler")).registerDataCollector(
            new (r("JSSPPerformanceEntryCollector"))(),
            "JSSPPerformanceEntryCollector",
          ),
            e.registerDataCollector(
              new (r("JSSPUrlCollector"))(),
              "JSSPUrlCollector",
            ),
            e.registerDataCollector(
              new (r("JSSPMemoryCollector"))(),
              "JSSPMemoryCollector",
            ),
            e.registerDataCollector(
              new (r("JSSPEventCountCollector"))(),
              "JSSPEventCountCollector",
            ),
            o("JSSPSetting").isCollectingINP &&
              (r("JSSelfProfiler").registerDataCollector(
                new (r("JSSPInteractionToNextPaintCollector"))(),
                "JSSPInteractionToNextPaintCollector",
              ),
              r("JSSelfProfiler").registerDataCollector(
                new (r("JSSPLongTaskLinker"))(),
                "JSSPLongTaskLinker",
                !0,
              )),
            o("JSSPSetting").isCollectingLoAF &&
              r("JSSelfProfiler").registerDataCollector(
                new (r("JSSPLongAnimationFrameCollector"))(),
                "JSSPLongAnimationFrameCollector",
              ));
        }),
        (t.registerTraceTransformers = function () {
          var e;
          if (
            ((e = r("JSSelfProfiler")).registerTraceTransformer(
              new (r("JSSPEmptySampleFilter"))(),
              "JSSPEmptySampleFilter",
            ),
            e.registerTraceTransformer(
              new (r("JSSPTraceSizeOptimizer"))(),
              "JSSPTraceSizeOptimizer",
            ),
            e.registerTraceTransformer(
              new (r("JSSPDevTraceFilter"))(),
              "JSSPDevTraceFilter",
            ),
            e.registerTraceTransformer(
              new (r("JSSPJestE2EMarker"))(),
              "JSSPJestE2EMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPLongTaskMarker"))(),
              "JSSPLongTaskMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPBrsidMarker"))(),
              "JSSPBrsidMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPUrlMarker"))(),
              "JSSPUrlMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPMemoryMarker"))(),
              "JSSPMemoryMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPFELabsMarker"))(),
              "JSSPFELabsMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPSubSpanMarker"))(),
              "JSSPSubSpanMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPSampleDurationMarker"))(),
              "JSSPSampleDurationMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPInteractionTraceDataMarker"))(),
              "JSSPInteractionTraceDataMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPEventCountMarker"))(),
              "JSSPEventCountMarker",
            ),
            e.registerTraceTransformer(
              new (r("JSSPIdMarker"))(),
              "JSSPIdMarker",
            ),
            o("JSSPSetting").isCollectingINP &&
              r("JSSelfProfiler").registerTraceTransformer(
                new (r("JSSPInteractToNextPaintMarker"))(),
                "JSSPInteractToNextPaintMarker",
              ),
            o("JSSPSetting").isCollectingLoAF &&
              r("JSSelfProfiler").registerTraceTransformer(
                new (r("JSSPLongAnimationFrameMarker"))(),
                "JSSPLongAnimationFrameMarker",
              ),
            r("justknobx")._("2285"))
          ) {
            var t;
            r("JSSelfProfiler").registerTraceTransformer(
              new (r("JSSPReactFrameDedupFilter"))(
                (t =
                  r("JSSelfProfilerConfig.experimental") == null
                    ? void 0
                    : r("JSSelfProfilerConfig.experimental")
                        .REMOVE_STACK_FRAME_IN_SCUBA) != null
                  ? t
                  : [],
              ),
              "JSSPReactFrameDedupFilter",
            );
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
