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
        function t(t, n, a, i, l) {
          var d = this;
          ((this.$8 = null),
            (this.$9 = !1),
            (this.$1 = i != null ? i : r("uuidv4")().slice(0, 8)),
            (this.$2 = l != null ? l : "unknown"),
            (this.$3 = n),
            (this.$4 = new (r("StreamAvailabilityState"))()),
            (this.$5 = o("Probers").createStreamProbe(
              function () {
                return t.ping();
              },
              e,
              function () {
                return d.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return d.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$6 = o("Probers").createStreamProbe(
              function () {
                return t.ping();
              },
              s,
              function () {
                return d.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return d.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$7 = o("Probers").createNetworkProbe(
              u,
              a,
              function () {
                return d.processEvent({ type: "network_ping_success" });
              },
              function () {
                return d.processEvent({ type: "network_ping_timeout" });
              },
            )),
            (this.$8 = window.setTimeout(function () {
              return d.$10();
            }, c)));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t) {
            if (!this.$9) {
              var e = this.$4.processEvent(t);
              e.becameTerminated
                ? this.$10()
                : e.streamBecameAvailable
                  ? (this.$6.stop(), this.$7.stop(), this.$5.start())
                  : e.streamBecameUnavailable &&
                    (this.$6.start(), this.$7.start(), this.$5.stop());
            }
          }),
          (n.$10 = function () {
            var e = this;
            this.$9 ||
              ((this.$9 = !0),
              this.$5.stop(),
              this.$6.stop(),
              this.$7.stop(),
              this.$8 != null &&
                (window.clearTimeout(this.$8), (this.$8 = null)),
              this.$4.finalize(),
              this.$3.log(function () {
                var t;
                return {
                  request_id: e.$1,
                  method: e.$2,
                  ts_start_ms: String((t = e.$4.getStartMs()) != null ? t : 0),
                  duration_ms: String(e.$4.getDurationMs()),
                  total_unavailability_ms: String(
                    e.$4.getTotalUnavailabilityMs(),
                  ),
                  max_unavailability_ms: String(e.$4.getMaxUnavailabilityMs()),
                  sequence_id: "0",
                  unavailabilities: e.$4
                    .getUnavailabilities()
                    .map(function (e) {
                      var t;
                      return {
                        start_ms: String(e.startMs),
                        duration_ms: String((t = e.durationMs) != null ? t : 0),
                        cause: e.cause,
                      };
                    }),
                  events: e.$4.getEvents().map(function (e) {
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
