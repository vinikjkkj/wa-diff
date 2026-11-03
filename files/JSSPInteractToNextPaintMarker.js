__d(
  "JSSPInteractToNextPaintMarker",
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
          (r.getINPDataList = function (t) {
            var e = t.INPEntryList;
            if (e == null) return null;
            var n = e.map(function (e) {
              var t,
                n = e.endTime,
                r = e.processingEnd,
                o = e.processingStart,
                a = e.startTime,
                i = o - a,
                l = r - o,
                s = n - r,
                u = e.eventType,
                c = (t = e.componentName) != null ? t : "",
                d = {
                  inputDelay: i,
                  processingTime: l,
                  presentationDelay: s,
                  duration: n - a,
                  eventType: u,
                  eventTargetComponent: c,
                };
              return { INPRecord: e, metadata: d };
            });
            return n.sort(function (e, t) {
              return e.INPRecord.startTime - t.INPRecord.startTime;
            });
          }),
          (r.transform = async function (n, r, a) {
            var t = this,
              i = this.getINPDataList(a);
            if (i == null) return n;
            n.metadata = babelHelpers.extends({}, n.metadata, {
              INPInputDelays: [],
              INPProcessingTimes: [],
              INPPresentationDelays: [],
              INPDurations: [],
              INPEventTypes: [],
              INPEventTargetComponentNames: [],
            });
            for (var l of i) {
              var s = n.metadata,
                u = l.metadata;
              (s.INPInputDelays.push(u.inputDelay),
                s.INPProcessingTimes.push(u.processingTime),
                s.INPPresentationDelays.push(u.presentationDelay),
                s.INPDurations.push(u.duration),
                s.INPEventTypes.push(l.metadata.eventType),
                s.INPEventTargetComponentNames.push(
                  l.metadata.eventTargetComponent,
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
                var u = a[s].INPRecord;
                if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                  ((l.INPId = s),
                    o("JSSelfProfilerUtils").addMarkerToSample(
                      l,
                      "interaction-to-next-paint",
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
