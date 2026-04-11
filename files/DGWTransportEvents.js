__d(
  "DGWTransportEvents",
  ["IDGWLoggingContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$3 = e;
      }
      var t = e.prototype;
      return (
        (t.transportEstablished = function (t) {
          (this.$3.logEvent(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "open",
            t,
          ),
            (this.$2 = Date.now()),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_group_establishment_success",
            ));
        }),
        (t.transportPingSent = function (t) {
          this.$3.logEvent(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Ping Frame Sent",
            t,
            !0,
          );
        }),
        (t.transportPongReceived = function (t) {
          this.$3.logEvent(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Pong Frame Received",
            t,
            !0,
          );
        }),
        (t.transportEstablishmentPending = function () {
          ((this.$1 = Date.now()),
            this.$3.logEvent(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "transportPending",
              null,
              !0,
            ),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_group_establishment_pending",
            ));
        }),
        (t.transportClosed = function (t, n, r) {
          ((this.$4 = Date.now()),
            t
              ? (this.$3.bumpODSKey(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .WEBSOCKET_TRANSPORT_COMPONENT,
                  "transport_close_graceful",
                ),
                this.$3.logEvent(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .WEBSOCKET_TRANSPORT_COMPONENT,
                  "Transport closed gracefully",
                  null,
                  !0,
                ))
              : (this.$3.bumpODSKey(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .WEBSOCKET_TRANSPORT_COMPONENT,
                  "transport_close_with_error",
                ),
                this.$3.logError(
                  o("IDGWLoggingContext").DGWLoggingComponent
                    .WEBSOCKET_TRANSPORT_COMPONENT,
                  "Transport closed abnormally",
                  n,
                  r,
                )));
        }),
        (t.transportEstablishmentFailure = function (t) {
          (this.$3.logError(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "WebSocket transport establishment failure",
            "WebSocket close code: " +
              t.code +
              " reason: " +
              t.reason +
              " wasClean: " +
              String(t.wasClean),
          ),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_group_establishment_failure",
            ));
        }),
        (t.streamEstablishmentTimeout = function (t, n, r) {
          (this.$3.logError(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Grouped Stream establishment timeout",
            t,
            "streamId:" + n,
            !1,
            r,
          ),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_establishment_timeout",
            ));
        }),
        (t.streamEstablishmentPending = function (t, n) {
          (this.$3.logEvent(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Grouped Stream establishment pending",
            "streamId:" + t,
            !0,
            n,
          ),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_establishment_pending",
            ));
        }),
        (t.streamEstablishmentSuccess = function (t, n) {
          (this.$3.logEvent(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Grouped Stream establishment success",
            "streamId:" + t,
            !0,
            n,
          ),
            this.$3.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent
                .WEBSOCKET_TRANSPORT_COMPONENT,
              "stream_establishment_success",
            ));
        }),
        (t.transportError = function (t, n, r) {
          this.$3.logError(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            t,
            n,
            r,
          );
        }),
        (t.receivedFrameForInactiveStream = function (t, n, r) {
          this.$3.logWarn(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Frame received for inactive stream",
            "frameType: " + t + ", streamID: " + n,
            r,
          );
        }),
        (t.ranOutOfStreamIds = function (t) {
          this.$3.logWarn(
            o("IDGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "Hit max StreamId limit",
            "Hit max StreamId limit",
            t,
          );
        }),
        e
      );
    })();
    l.DGWTransportEvents = e;
  },
  98,
);
