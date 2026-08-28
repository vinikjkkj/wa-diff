__d(
  "SharedQPLPointRecorder",
  ["InteractionTracingMetrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        PUBLISH_STARTED: {
          displayName: "Server Publishing",
          spanEndingPointName: {
            happyPath: "PUBLISH_COMPLETED",
            sadPath: "PUBLISH_FAILED",
          },
        },
        PUBLISH_DRAFT_API_START: {
          displayName: "Publish Draft API",
          spanEndingPointName: {
            happyPath: "PUBLISH_DRAFT_API_START",
            sadPath: "PUBLISH_DRAFT_API_ERROR",
          },
        },
        CREATE_AND_PUBLISH_DRAFT_API_START: {
          displayName: "Create & Publish Draft API",
          spanEndingPointName: {
            happyPath: "CREATE_AND_PUBLISH_DRAFT_API_END",
            sadPath: "CREATE_AND_PUBLISH_DRAFT_API_ERROR",
          },
        },
      },
      s = (function () {
        function t() {
          this.recordedPointsPerActiveInteraction = new Map();
        }
        var n = t.prototype;
        return (
          (n.$1 = function (t) {
            this.recordedPointsPerActiveInteraction.delete(t);
          }),
          (n.record = function (t) {
            var e = t.interactionId,
              n = t.name,
              r = t.timestamp,
              o = this.recordedPointsPerActiveInteraction.get(e);
            (o ||
              ((o = new Map()),
              this.recordedPointsPerActiveInteraction.set(e, o)),
              o.set(n, r));
          }),
          (n.$2 = function (t, n, r, o) {
            var e = t.has(o),
              a = !r.has(n);
            return e && a;
          }),
          (n.$3 = function (t, n, r, o) {
            if (this.$2(t, n, r, o)) {
              var e;
              return (r.add(n), (e = t.get(o)) == null ? void 0 : e.valueOf());
            }
            return null;
          }),
          (n.processCompletedInteraction = function (n) {
            var t = this,
              o = this.recordedPointsPerActiveInteraction.get(n);
            if (o) {
              var a = new Set();
              (o.forEach(function (i, l) {
                var s = e[l];
                if (s) {
                  var u = s.displayName,
                    c = s.spanEndingPointName,
                    d = c.happyPath,
                    m = c.sadPath,
                    p = t.$3(o, l, a, d) || t.$3(o, l, a, m);
                  p != null &&
                    r("InteractionTracingMetrics").addSubspan(
                      n,
                      u,
                      "AppTiming",
                      i,
                      p,
                      {},
                    );
                }
              }),
                this.$1(n));
            }
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
