__d(
  "WorkerMessagePortLogging",
  ["MainPageUrl", "QLogEvent", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Math.random() < 0.1,
      s = 20,
      u = 100,
      c = 50;
    function d() {
      return (
        o("MainPageUrl").isWorkerLogEnabled() ||
        o("MainPageUrl").mainPageUrl.searchParams.get("worker_log") === 1
      );
    }
    var m = 0;
    function p() {
      return o("QLogEvent").event(r("qpl")._(41497718, "106"), m++);
    }
    function _(t, n, r) {
      if ((r === void 0 && (r = !1), !(n == null || !e))) {
        var o = n.receiveDateTime,
          a = n.receiveTimestamp,
          i = n.sendDateTime,
          l = n.sendDelayHighPrecision,
          d = n.sendTimestamp,
          m = p();
        m.startFromTime();
        var _ = m.range("SEND_DELAY");
        (_.start(d), _.stop(a));
        var f = m.range("SEND_DELAY_LOW_PRECISION");
        (f.start(i), f.stop(o));
        var g = Math.abs(d - i),
          h = Math.abs(a - o);
        if (
          (m.annotate({
            string: { port_name: t },
            int: { send_delay: l, send_drift: g, receive_drift: h },
            bool: {
              send_delay_above_max: l != null && l > s,
              send_drift_above_max: g > u,
              receive_drift_above_max: h > u,
            },
          }),
          r)
        ) {
          var y = m.range("ROUND_TRIP");
          (y.start(n.sendTimestamp), y.stop(n.receiveTimestamp));
          var C = n.receiveTimestamp - n.sendTimestamp;
          m.annotate({
            int: { round_trip: C },
            bool: { round_trip_above_max: C > c },
          });
        }
        m.stop();
      }
    }
    ((l.isWorkerLogEnabled = d), (l.logMessageTiming = _));
  },
  98,
);
