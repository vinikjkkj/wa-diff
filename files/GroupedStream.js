__d(
  "GroupedStream",
  [
    "DGWAckManager",
    "DGWConstants",
    "DGWStream",
    "DGWStreamEvents",
    "IDGWLoggingContext",
    "Random",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, a, i, l) {
        ((this.$1 = e),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = t),
          (this.$7 = n),
          (this.$8 = r),
          (this.$2 = i),
          (this.$9 = a),
          (this.$10 = new (o("DGWAckManager").DGWAckManager)(this.$9)),
          (this.$12 = new (o("DGWStreamEvents").DGWStreamEvents)(
            this.$9,
            o("IDGWLoggingContext").DGWLoggingComponent
              .GROUPED_STREAM_COMPONENT,
            this.$1,
          )),
          (this.$11 = 0),
          (this.$13 = l),
          (this.$14 =
            Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4)),
          (this.$15 = !1),
          this.$9.qplMarkerStart(
            o("IDGWLoggingContext").QPLEvent.STREAM_LIFECYCLE,
            this.$14,
          ));
      }
      var t = e.prototype;
      return (
        (t.send = async function (t, n) {
          var e = this.$11++ % o("DGWConstants").MAX_ACK_ID,
            r = this.$16(t, !0, e);
          if (!this.$17(r, !0, e)) return !1;
          var a = await this.$10.waitForAck(
            e,
            n != null ? n : o("DGWConstants").DEFAULT_ACK_TIMEOUT_MS,
          );
          return a;
        }),
        (t.sendFrame = async function (t, n, a) {
          var e = this.$11++ % o("DGWConstants").MAX_ACK_ID,
            i = this.$16(n, !0, e);
          if (i == null) return !1;
          var l = new Uint8Array(t.length + i.length);
          if ((l.set(t), l.set(i, t.length), !this.$17(l, !0, e))) return !1;
          var s = await this.$10.waitForAck(
            e,
            a != null ? a : o("DGWConstants").DEFAULT_ACK_TIMEOUT_MS,
          );
          if ((this.__markerPoint(s ? "ack_recevied" : "ack_timeout"), !s)) {
            this.__endMarker(o("IDGWLoggingContext").QPLResult.FAIL);
            var u = this.$10.wasTransportClosed()
              ? o("DGWStream").StreamError.ACK_TRANSPORT_CLOSED
              : o("DGWStream").StreamError.ACK_TIMEOUT;
            return Promise.reject(r("err")(u));
          }
          return s;
        }),
        (t.sendAndForget = function (t) {
          var e = this.$16(t, !1, 0);
          return this.$17(e, !1, 0);
        }),
        (t.sendFrameAndForget = function (t, n) {
          var e = this.$16(n, !1, 0);
          if (e == null) return !1;
          var r = new Uint8Array(t.length + e.length);
          return (r.set(t), r.set(e, t.length), this.$17(r, !1, 0));
        }),
        (t.close = function () {
          var e = this.$2.encodeEndOfData(this.$1);
          if (e == null) {
            this.$9.logError(
              o("IDGWLoggingContext").DGWLoggingComponent
                .GROUPED_STREAM_COMPONENT,
              "Failed to encode EndOfData",
              "streamId: " + this.$1,
            );
            return;
          }
          var t = this.$8.send(e);
          if (!t) {
            this.$9.logError(
              o("IDGWLoggingContext").DGWLoggingComponent
                .GROUPED_STREAM_COMPONENT,
              "Failed to send EndOfData",
              "streamId: " +
                this.$1 +
                ". StreamGroupTransport not open during send",
            );
            return;
          }
          (this.$12.endOfDataSent(), (this.$5 = !0), this.$4 && this.$18());
        }),
        (t.loggingContext = function () {
          return this.$9;
        }),
        (t.__sendDrain = function (t) {
          var e = o("DGWConstants").drainReasonToDrainReasonString(t);
          if (this.$5) return !1;
          var n = this.$2.encodeDrain(t);
          if (n == null) return !1;
          this.$12.drainSent(e);
          var r = this.$8.send(n);
          return r;
        }),
        (t.__transportCloseHook = function (t) {
          (this.$13(),
            this.$10.clearPendingAcks(),
            t
              ? (this.$12.error(
                  "Received StreamError",
                  "StreamErrorType: " + t,
                ),
                this.$6.onError(t))
              : this.$5 && this.$4
                ? this.$18()
                : (this.$12.streamClosed(
                    !1,
                    "Stream closed: ClosedLocally: " +
                      this.$5.toString() +
                      ", EndOfDataReceived: " +
                      this.$4.toString(),
                  ),
                  this.$6.onError(o("DGWStream").StreamError.PREMATURE_CLOSE)));
        }),
        (t.$18 = function () {
          (this.$13(),
            this.$12.streamClosed(!0, "Graceful close"),
            this.$6.onClose(this));
        }),
        (t.__dataReceivedHook = function (t, n) {
          (this.$12.dataReceived(t.length, n != null, n),
            n != null && this.$19(n),
            this.$6.onDataReceived(t));
        }),
        (t.__ackReceivedHook = function (t) {
          (this.$12.ackReceived(t), this.$10.handleAckReceived(t));
        }),
        (t.__drainReceivedHook = function (t) {
          this.$3 === !1 &&
            (this.$6.onStreamMustDrain(this, t), (this.$3 = !0));
        }),
        (t.__endOfDataHook = function () {
          (this.$12.endOfDataReceived(),
            (this.$4 = !0),
            this.$5
              ? this.$18()
              : this.$6.onServerHasFinishedSendingData(this));
        }),
        (t.__markerPoint = function (t) {
          this.$15 ||
            this.$9.qplMarkerPoint(
              o("IDGWLoggingContext").QPLEvent.STREAM_LIFECYCLE,
              t,
              this.$14,
            );
        }),
        (t.__markerAnnotate = function (t) {
          this.$15 ||
            this.$9.qplMarkerAnnotate(
              o("IDGWLoggingContext").QPLEvent.STREAM_LIFECYCLE,
              t,
              this.$14,
            );
        }),
        (t.__endMarker = function (t) {
          this.$15 ||
            ((this.$15 = !0),
            this.$9.qplMarkerEnd(
              o("IDGWLoggingContext").QPLEvent.STREAM_LIFECYCLE,
              t,
              this.$14,
            ));
        }),
        (t.$16 = function (t, n, r) {
          return this.$2.encodeData(t, n, r, this.$1);
        }),
        (t.$17 = function (t, n, r) {
          if ((this.__markerPoint("send_data_start"), this.$5))
            return (
              this.$9.logError(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .GROUPED_STREAM_COMPONENT,
                "Failed to send data",
                "Stream closed locally",
              ),
              !1
            );
          if (t == null) return !1;
          var e = this.$8.send(t);
          return e
            ? (this.__markerPoint("send_data_end"),
              this.$12.dataSent(t.length, n, r),
              !0)
            : (this.$9.logError(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .GROUPED_STREAM_COMPONENT,
                "Failed to send data",
                "ClosedLocally: " + this.$5.toString(),
              ),
              !1);
        }),
        (t.$19 = function (t) {
          var e = this.$2.encodeAck(t, this.$1);
          if (e == null)
            return (
              this.$9.logError(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .GROUPED_STREAM_COMPONENT,
                "Failed to encode ACK",
                "ackId: " + t,
              ),
              !1
            );
          var n = this.$8.send(e);
          return n
            ? (this.$12.ackSent(t), !0)
            : (this.$9.logError(
                o("IDGWLoggingContext").DGWLoggingComponent
                  .GROUPED_STREAM_COMPONENT,
                "Failed to send ACK",
                "ackId: " + t,
              ),
              !1);
        }),
        e
      );
    })();
    l.GroupedStream = e;
  },
  98,
);
