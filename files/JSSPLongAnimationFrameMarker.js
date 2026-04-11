__d(
  "JSSPLongAnimationFrameMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 300,
      s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getLoAFDataList = function (t) {
            var e = t.LoAFEntryList;
            if (e == null) return null;
            var n = e.map(function (e) {
              var t = e.endTime,
                n = e.startTime,
                r = {
                  LoAFTotalScriptExecutionDuration:
                    e.LoAFTotalScriptExecutionDuration,
                  LoAFTotalRenderToStyleAndLayoutDuration:
                    e.LoAFTotalRenderToStyleAndLayoutDuration,
                  LoAFTotalStyleAndLayoutToPaintDuration:
                    e.LoAFTotalStyleAndLayoutToPaintDuration,
                  duration: t - n,
                };
              return { LoAFRecord: e, metadata: r };
            });
            return n.sort(function (e, t) {
              return e.LoAFRecord.startTime - t.LoAFRecord.startTime;
            });
          }),
          (a.transform = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, r) {
                var a = this,
                  i = this.getLoAFDataList(r);
                if (i == null) return t;
                t.metadata = babelHelpers.extends({}, t.metadata, {
                  LoAFDurations: [],
                  LoAFTotalScriptExecutionDurations: [],
                  LoAFTotalRenderToStyleAndLayoutDurations: [],
                  LoAFTotalStyleAndLayoutToPaintDurations: [],
                });
                for (var l of i) {
                  var s = t.metadata,
                    u = l.metadata;
                  (s.LoAFDurations.push(u.duration),
                    s.LoAFTotalScriptExecutionDurations.push(
                      u.LoAFTotalScriptExecutionDuration,
                    ),
                    s.LoAFTotalRenderToStyleAndLayoutDurations.push(
                      u.LoAFTotalRenderToStyleAndLayoutDuration,
                    ),
                    s.LoAFTotalStyleAndLayoutToPaintDurations.push(
                      u.LoAFTotalStyleAndLayoutToPaintDuration,
                    ));
                }
                for (
                  var c = function* (n) {
                      yield o("JSSelfProfilerUtils").nextEventLoop(function () {
                        return a.batchProcess(t, n, i);
                      });
                    },
                    d = 0;
                  d < t.samples.length;
                  d += e
                )
                  yield* c(d);
                return t;
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.batchProcess = function (n, r, a) {
            for (var t = Math.min(r + e, n.samples.length), i = r; i < t; ++i)
              for (var l = n.samples[i], s = 0; s < a.length; ++s) {
                var u = a[s].LoAFRecord;
                if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                  ((l.LoAFId = s),
                    o("JSSelfProfilerUtils").addMarkerToSample(
                      l,
                      "long-animation-frame",
                    ));
                  break;
                }
              }
          }),
          r
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
