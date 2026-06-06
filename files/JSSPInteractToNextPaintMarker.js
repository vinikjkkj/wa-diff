__d(
  "JSSPInteractToNextPaintMarker",
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
          (a.getINPDataList = function (t) {
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
          (a.transform = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, r) {
                var a = this,
                  i = this.getINPDataList(r);
                if (i == null) return t;
                t.metadata = babelHelpers.extends({}, t.metadata, {
                  INPInputDelays: [],
                  INPProcessingTimes: [],
                  INPPresentationDelays: [],
                  INPDurations: [],
                  INPEventTypes: [],
                  INPEventTargetComponentNames: [],
                });
                for (var l of i) {
                  var s = t.metadata,
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
          r
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
