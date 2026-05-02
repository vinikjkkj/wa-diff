__d(
  "QoSMonitor",
  ["Probers", "StreamAvailabilityState", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 5e3,
      u = (function () {
        function t(t, n, a) {
          var i = this;
          ((this.$1 = n != null ? n : r("uuidv4")().slice(0, 8)),
            (this.$2 = a != null ? a : "unknown"),
            (this.$3 = new (r("StreamAvailabilityState"))()),
            (this.$4 = o("Probers").createStreamProbe(
              function () {
                return t.ping();
              },
              e,
              function () {
                return i.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return i.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$5 = o("Probers").createNetworkProbe(
              s,
              function () {
                return i.processEvent({ type: "network_ping_success" });
              },
              function () {
                return i.processEvent({ type: "network_ping_timeout" });
              },
            )));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t) {
            var e = this.$3.processEvent(t);
            e.becameTerminated
              ? (this.$4.stop(), this.$5.stop())
              : e.streamBecameAvailable
                ? (this.$4.start(), this.$5.stop())
                : e.streamBecameUnavailable &&
                  (this.$4.stop(), this.$5.start());
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
