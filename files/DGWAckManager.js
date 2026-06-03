__d(
  "DGWAckManager",
  ["IDGWLoggingContext", "Promise", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
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
      u = (function () {
        function t(e) {
          ((this.$1 = new Map()), (this.$2 = e), (this.$3 = !1));
        }
        var a = t.prototype;
        return (
          (a.wasTransportClosed = function () {
            return this.$3;
          }),
          (a.waitForAck = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                this.$2.bumpODSKey(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .ACK_MANAGER_COMPONENT,
                  "ack_expected",
                );
                var i = this.$1;
                try {
                  var l = yield new (e || (e = n("Promise")))(function (e, n) {
                    i.set(t, new s(t, a, e));
                  });
                  return (
                    l === !0
                      ? this.$2.logEvent(
                          o("IDGWLoggingContext").DGWLoggingComponent
                            .ACK_MANAGER_COMPONENT,
                          "Received ACK",
                          "sendId:" + t,
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
                          "Request " + t + " timed out after " + a + "ms",
                        )),
                    i.delete(t),
                    l
                  );
                } catch (e) {
                  var u = r("getErrorSafe")(e);
                  throw (
                    this.$2.bumpODSKey(
                      o("IDGWLoggingContext").DGWLoggingComponent
                        .ACK_MANAGER_COMPONENT,
                      "ack_error",
                    ),
                    i.delete(t),
                    u
                  );
                }
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.handleAckReceived = function (t) {
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
          (a.clearPendingAcks = function () {
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
    l.DGWAckManager = u;
  },
  98,
);
