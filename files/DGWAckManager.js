__d(
  "DGWAckManager",
  ["IDGWLoggingContext", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t, n) {
          var r = this;
          ((this.$3 = n),
            (this.sendId = e),
            (this.$2 = t),
            (this.handleAckReceived = function () {
              r.stopTracking(!0);
            }),
            (this.$1 = window.setTimeout(function () {
              r.stopTracking(!1);
            }, t)));
        }
        var t = e.prototype;
        return (
          (t.stopTracking = function (t) {
            (window.clearTimeout(this.$1), this.$3(t));
          }),
          e
        );
      })(),
      s = (function () {
        function t(e) {
          ((this.$1 = new Map()), (this.$2 = e), (this.$3 = !1));
        }
        var n = t.prototype;
        return (
          (n.wasTransportClosed = function () {
            return this.$3;
          }),
          (n.waitForAck = async function (n, a) {
            this.$2.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
              "ack_expected",
            );
            var t = this.$1;
            try {
              var i = await new Promise(function (r, o) {
                t.set(n, new e(n, a, r));
              });
              return (
                i === !0
                  ? this.$2.logEvent(
                      o("IDGWLoggingContext").DGWLoggingComponent
                        .ACK_MANAGER_COMPONENT,
                      "Received ACK",
                      "sendId:" + n,
                      !0,
                    )
                  : (this.$2.bumpODSKey(
                      o("IDGWLoggingContext").DGWLoggingComponent
                        .ACK_MANAGER_COMPONENT,
                      "ack_timeout",
                    ),
                    this.$2.logWarn(
                      o("IDGWLoggingContext").DGWLoggingComponent
                        .ACK_MANAGER_COMPONENT,
                      "ACK timeout",
                      "Request " + n + " timed out after " + a + "ms",
                    )),
                t.delete(n),
                i
              );
            } catch (e) {
              var l = r("getErrorSafe")(e);
              throw (
                this.$2.bumpODSKey(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .ACK_MANAGER_COMPONENT,
                  "ack_error",
                ),
                t.delete(n),
                l
              );
            }
          }),
          (n.handleAckReceived = function (t) {
            this.$2.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
              "ack_received",
            );
            var e = this.$1.get(t);
            if (e === void 0) {
              (this.$2.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .ACK_MANAGER_COMPONENT,
                "ack_received.not_tracked",
              ),
                this.$2.logWarn(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .ACK_MANAGER_COMPONENT,
                  "untracked ACK",
                  "Received ACK for ackId " +
                    t +
                    " which was not being tracked",
                ));
              return;
            }
            e.handleAckReceived();
          }),
          (n.clearPendingAcks = function () {
            var e = this;
            ((this.$3 = !0),
              this.$2.logEvent(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .ACK_MANAGER_COMPONENT,
                "Clearing pending acks",
                "ACKs cleared size: " + this.$1.size,
              ),
              this.$1.forEach(function (t, n, r) {
                (e.$2.logEvent(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .ACK_MANAGER_COMPONENT,
                  "Clearing pending ACK with ackId " + t.sendId,
                  null,
                  !0,
                ),
                  t.stopTracking(!1),
                  r.delete(n));
              }));
          }),
          t
        );
      })();
    l.DGWAckManager = s;
  },
  98,
);
