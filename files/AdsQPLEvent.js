__d(
  "AdsQPLEvent",
  ["AdsWorkerMgmtQPLLoggerChannel", "QLogEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    ((e = o("QLogEvent")).OnEventStart.add(function (e, t) {
      o("AdsWorkerMgmtQPLLoggerChannel")
        .AdsWorkerMgmtQPLLoggerChannel()
        .markerStart(e.event, t, e.instanceKey, e.isUserFlow);
    }),
      e.OnEventStop.add(function (e, t) {
        o("AdsWorkerMgmtQPLLoggerChannel")
          .AdsWorkerMgmtQPLLoggerChannel()
          .markerEnd(e.event, e.getAction(), t, e.instanceKey);
      }),
      e.OnEventPoint.add(function (e, t, n) {
        o("AdsWorkerMgmtQPLLoggerChannel")
          .AdsWorkerMgmtQPLLoggerChannel()
          .addPoint(e.event, t, n.timestamp, e.instanceKey, !1);
      }),
      e.OnEventAnnotate.add(function (e, t) {
        o("AdsWorkerMgmtQPLLoggerChannel")
          .AdsWorkerMgmtQPLLoggerChannel()
          .markerAnnotate(e.event, t, { instanceKey: e.instanceKey }, 1);
      }),
      (l.event = e.event),
      (l.QPLEvent = e.QPLEvent));
  },
  98,
);
