__d(
  "DGWStreamEvents",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$4 = new Map()),
          (this.$5 = new Map()),
          (this.$6 = e),
          (this.$1 = t),
          n != null && (this.$8 = "streamId:" + n + "::"));
      }
      var t = e.prototype;
      return (
        (t.dataSent = function (t, n, r) {
          var e,
            o = n ? "sendWithAckRequested" : "sendWithoutAckRequested";
          (this.$6.logEvent(
            this.$1,
            o,
            ((e = this.$8) != null ? e : "") +
              "sendId:" +
              r +
              ", payloadSize:" +
              t,
            !0,
          ),
            this.$4.set(r, {
              ackRequested: n,
              payloadSize: t,
              sendTimestamp: Date.now(),
            }));
        }),
        (t.ackReceived = function (t) {
          var e;
          (this.$6.logEvent(
            this.$1,
            "AckReceived",
            ((e = this.$8) != null ? e : "") + "sendId:" + t,
            !0,
          ),
            this.$6.bumpODSKey(this.$1, "ack_received"));
          var n = this.$4.get(t);
          n != null && (n.ackReceivedTimestamp = Date.now());
        }),
        (t.ackSent = function (t) {
          var e;
          (this.$6.bumpODSKey(this.$1, "ack_sent"),
            this.$6.logEvent(
              this.$1,
              "ACK sent",
              ((e = this.$8) != null ? e : "") + "ackId:" + t,
              !0,
            ));
        }),
        (t.drainSent = function (t) {
          var e;
          this.$6.logEvent(
            this.$1,
            "Drain sent",
            ((e = this.$8) != null ? e : "") + "drainReason: " + t,
          );
        }),
        (t.dataReceived = function (t, n, r) {
          var e;
          (this.$6.bumpODSKey(this.$1, "data_received"),
            this.$6.logEvent(
              this.$1,
              "Data received",
              ((e = this.$8) != null ? e : "") +
                "sendId:" +
                (r != null ? r : "null") +
                ", ackRequested:" +
                n.toString() +
                ", payloadSize:" +
                t,
              !0,
            ),
            r != null &&
              this.$5.set(r, {
                ackRequested: n,
                payloadSize: t,
                receiveTimestamp: Date.now(),
              }));
        }),
        (t.endOfDataReceived = function () {
          (this.$6.bumpODSKey(this.$1, "end_of_data_received"),
            this.$6.logEvent(this.$1, "EndOfDataReceived", this.$8, !0));
        }),
        (t.endOfDataSent = function () {
          (this.$6.bumpODSKey(this.$1, "end_of_data_sent"),
            this.$6.logEvent(this.$1, "EndOfDataSent", this.$8, !0));
        }),
        (t.streamClosed = function (t, n) {
          this.$7 = Date.now();
          var e = this.$9();
          if (t) {
            var r;
            (this.$6.bumpODSKey(this.$1, "stream_closed_gracefully"),
              this.$6.logEvent(
                this.$1,
                "Stream closed gracefully",
                "" + ((r = this.$8) != null ? r : "") + e,
              ));
          } else {
            var o;
            (this.$6.bumpODSKey(this.$1, "stream_closed_with_error"),
              this.$6.logError(
                this.$1,
                "Stream closed abnormally",
                n,
                "" + ((o = this.$8) != null ? o : "") + e,
              ));
          }
        }),
        (t.connectionEstablishmentFailure = function (t) {
          this.$6.logEvent(
            this.$1,
            "WebSocket connection establishment failure",
            "WebSocket close code: " + t,
          );
        }),
        (t.streamEstablishmentFailure = function (t, n) {
          var e;
          (this.$6.logError(
            this.$1,
            "Failed to establish DGW Stream",
            "Last seen error: " + t.toString(),
            "" + ((e = this.$8) != null ? e : "") + n,
          ),
            this.$6.bumpODSKey(this.$1, "stream_establishment_failure"));
        }),
        (t.error = function (t, n) {
          var e = { msg: n, state: this.$9() };
          this.$6.logError(this.$1, t, JSON.stringify(e), this.$8);
        }),
        (t.$9 = function () {
          var e = {
            currentNetworkCondition:
              window.navigator && window.navigator.onLine === !0,
            establishRequestTimestamp: this.$2,
            establishedTimestamp: this.$3,
            streamClosedTimestamp: this.$7,
            sendHistory: JSON.stringify(Array.from(this.$4.entries())),
            receiveHistory: JSON.stringify(Array.from(this.$5.entries())),
          };
          return JSON.stringify(e);
        }),
        e
      );
    })();
    i.DGWStreamEvents = e;
  },
  66,
);
