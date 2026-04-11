__d(
  "RSTTracesManagerInWorker",
  [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTMainThreadDataInWorker",
    "RSTUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    function s() {
      (o("RSTEventsMessageQueue").subscribe(
        o("RSTEvents").RSTEvent.TRACE_START,
        function (e) {
          var t,
            n = e.mainToWorkerMessage,
            a = n == null || (t = n.metadata) == null ? void 0 : t.trace;
          if (a != null) {
            var i = n == null ? void 0 : n.sessionID;
            if (i != null) {
              o("RSTUtils").debugLog("trace start from main thread received");
              var l = r("RSTMainThreadDataInWorker").getDataEntry(i);
              if (l != null) {
                var s = l.tracesManager;
                (s.addTrace(a), s.compactTraces());
              }
            }
          }
        },
      ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.TRACE_POLICY_SET,
          function (e) {
            var t,
              n = e.mainToWorkerMessage,
              a = n == null || (t = n.metadata) == null ? void 0 : t.trace;
            if (a != null) {
              var i = n == null ? void 0 : n.sessionID;
              if (i != null) {
                o("RSTUtils").debugLog(
                  "trace policy from main thread received",
                );
                var l = r("RSTMainThreadDataInWorker").getDataEntry(i);
                if (l != null) {
                  var s = l.tracesManager;
                  (s.addTrace(a),
                    s.setLastTraceWithPolicySet(a),
                    s.compactTraces());
                }
              }
            }
          },
        ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.TRACE_END,
          function (e) {
            var t,
              n = e.mainToWorkerMessage,
              a = n == null || (t = n.metadata) == null ? void 0 : t.trace;
            if (a != null) {
              var i = n == null ? void 0 : n.sessionID;
              if (i != null) {
                var l = babelHelpers.extends({ endTimestamp: Date.now() }, a);
                o("RSTUtils").debugLog("trace end from main thread received");
                var s = r("RSTMainThreadDataInWorker").getDataEntry(i);
                if (s != null) {
                  var u = s.tracesManager;
                  (u.setLastTraceWithPolicySet(l), u.deleteTrace(a.traceID));
                }
              }
            }
          },
        ));
    }
    var u = (function () {
      function t() {
        ((this.$1 = new Map()), (this.$2 = null));
      }
      var n = t.prototype;
      return (
        (n.addTrace = function (t) {
          this.$1.set(t.traceID, t);
        }),
        (n.deleteTrace = function (t) {
          this.$1.delete(t);
        }),
        (n.setLastTraceWithPolicySet = function (t) {
          this.$2 == null
            ? (this.$2 = t)
            : this.$2.startTime <= t.startTime && (this.$2 = t);
        }),
        (n.getLastTraceWithPolicySet = function () {
          return this.$2;
        }),
        (n.getCurrentTraces = function () {
          var e = Date.now(),
            t = Array.from(this.$1.values());
          return t.filter(function (t) {
            var n;
            return (
              e >= t.startTime && e <= ((n = t.endTime) != null ? n : 1 / 0)
            );
          });
        }),
        (n.compactTraces = function () {
          var t = this.$1;
          if (!(t.size <= e))
            for (
              var n = Array.from(t.values()).sort(function (e, t) {
                return t.startTime - e.startTime;
              });
              n.length > e;
            ) {
              var r = n.pop();
              r != null && t.delete(r == null ? void 0 : r.traceID);
            }
        }),
        t
      );
    })();
    ((l.registerTracesManager = s), (l.TracesManager = u));
  },
  98,
);
