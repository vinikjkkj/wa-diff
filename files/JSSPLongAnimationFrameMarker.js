__d(
  "JSSPLongAnimationFrameMarker",
  ["JSSPTraceBaseTransformer", "JSSelfProfilerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 300,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getLoAFDataList = function (t) {
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
          (r.transform = async function (n, r, a) {
            var t = this,
              i = this.getLoAFDataList(a);
            if (i == null) return n;
            n.metadata = babelHelpers.extends({}, n.metadata, {
              LoAFDurations: [],
              LoAFTotalScriptExecutionDurations: [],
              LoAFTotalRenderToStyleAndLayoutDurations: [],
              LoAFTotalStyleAndLayoutToPaintDurations: [],
            });
            for (var l of i) {
              var s = n.metadata,
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
              var c = async function (r) {
                  await o("JSSelfProfilerUtils").nextEventLoop(function () {
                    return t.batchProcess(n, r, i);
                  });
                },
                d = 0;
              d < n.samples.length;
              d += e
            )
              await c(d);
            return n;
          }),
          (r.batchProcess = function (n, r, a) {
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
          n
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
