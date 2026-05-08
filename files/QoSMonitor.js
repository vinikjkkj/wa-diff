__d(
  "QoSMonitor",
  ["Probers", "StreamAvailabilityState", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 5e3,
      u = 900 * 1e3,
      c = (function () {
        function t(t, n, a, i, l) {
          var c = this;
          ((this.$7 = null),
            (this.$8 = !1),
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
                return c.processEvent({ type: "stream_ping_success" });
              },
              function () {
                return c.processEvent({ type: "stream_ping_timeout" });
              },
            )),
            (this.$6 = o("Probers").createNetworkProbe(
              s,
              a,
              function () {
                return c.processEvent({ type: "network_ping_success" });
              },
              function () {
                return c.processEvent({ type: "network_ping_timeout" });
              },
            )),
            (this.$7 = window.setTimeout(function () {
              return c.$9();
            }, u)));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t) {
            if (!this.$8) {
              var e = this.$4.processEvent(t);
              e.becameTerminated
                ? this.$9()
                : e.streamBecameAvailable
                  ? (this.$5.start(), this.$6.stop())
                  : e.streamBecameUnavailable &&
                    (this.$5.stop(), this.$6.start());
            }
          }),
          (n.$9 = function () {
            var e = this;
            this.$8 ||
              ((this.$8 = !0),
              this.$5.stop(),
              this.$6.stop(),
              this.$7 != null &&
                (window.clearTimeout(this.$7), (this.$7 = null)),
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
    l.default = c;
  },
  98,
);
