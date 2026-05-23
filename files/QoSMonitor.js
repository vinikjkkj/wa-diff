__d(
  "QoSMonitor",
  ["Probers", "StreamAvailabilityState", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 5e3,
      u = 5e3,
      c = 900 * 1e3,
      d = (function () {
        function t(t, n, a, i, l, d) {
          var m = this;
          ((this.$9 = null),
            (this.$10 = !1),
            (this.$1 = i != null ? i : r("uuidv4")().slice(0, 8)),
            (this.$2 = l != null ? l : "unknown"),
            (this.$3 = d),
            (this.$4 = n),
            (this.$5 = new (r("StreamAvailabilityState"))()),
            (this.$6 = o("Probers").createStreamProbe(
              function () {
                return t.ping();
              },
              e,
              function () {
                return m.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return m.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$7 = o("Probers").createStreamProbe(
              function () {
                return t.ping();
              },
              s,
              function () {
                return m.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return m.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$8 = o("Probers").createNetworkProbe(
              u,
              a,
              function () {
                return m.processEvent({ type: "network_ping_success" });
              },
              function () {
                return m.processEvent({ type: "network_ping_timeout" });
              },
            )),
            (this.$9 = window.setTimeout(function () {
              return m.$11();
            }, c)));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t) {
            if (!this.$10) {
              var e = this.$5.processEvent(t);
              e.becameTerminated
                ? this.$11()
                : e.streamBecameAvailable
                  ? (this.$7.stop(), this.$8.stop(), this.$6.start())
                  : e.streamBecameUnavailable &&
                    (this.$7.start(), this.$8.start(), this.$6.stop());
            }
          }),
          (n.$11 = function () {
            var e = this;
            this.$10 ||
              ((this.$10 = !0),
              this.$6.stop(),
              this.$7.stop(),
              this.$8.stop(),
              this.$9 != null &&
                (window.clearTimeout(this.$9), (this.$9 = null)),
              this.$5.finalize(),
              this.$4.log(function () {
                var t;
                return {
                  request_id: e.$1,
                  method: e.$2,
                  user_id: e.$3,
                  domain: window.location.hostname,
                  ts_start_ms: String((t = e.$5.getStartMs()) != null ? t : 0),
                  duration_ms: String(e.$5.getDurationMs()),
                  total_unavailability_ms: String(
                    e.$5.getTotalUnavailabilityMs(),
                  ),
                  max_unavailability_ms: String(e.$5.getMaxUnavailabilityMs()),
                  sequence_id: "0",
                  unavailabilities: e.$5
                    .getUnavailabilities()
                    .map(function (e) {
                      var t;
                      return {
                        start_ms: String(e.startMs),
                        duration_ms: String((t = e.durationMs) != null ? t : 0),
                        cause: e.cause,
                      };
                    }),
                  events: e.$5.getEvents().map(function (e) {
                    return {
                      type: e.event.type,
                      timestamp_ms: String(e.timestamp),
                      stream: e.state.stream,
                      network: e.state.network,
                      terminated: e.state.terminated,
                    };
                  }),
                };
              }));
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
