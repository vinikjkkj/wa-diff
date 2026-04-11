__d(
  "MqttTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n, r) {
        ((this.errorCode = t), (this.errorName = n), (this.errorMessage = r));
      },
      l = Object.freeze({
        APP_DISCONNECT: new e(
          7,
          "APP_DISCONNECT",
          "Disconnect initiated by app",
        ),
        BROWSER_CLOSE: new e(11, "BROWSER_CLOSE", "Browser closed"),
        CONNACK_FAILURE: new e(
          5,
          "CONNACK_FAILURE",
          "Connection failure due to connack",
        ),
        CONNECT_TIMEOUT: new e(4, "CONNECT_TIMEOUT", "Connect timed out"),
        INVALID_DATA_TYPE: new e(
          3,
          "INVALID_DATA_TYPE",
          "Received non-arraybuffer from socket.",
        ),
        PING_TIMEOUT: new e(6, "PING_TIMEOUT", "Ping timeout"),
        RECONNECT: new e(10, "RECONNECT", "Reconnecting"),
        SERVER_DISCONNECT: new e(
          8,
          "SERVER_DISCONNECT",
          "Disconnect message sent my server",
        ),
        SOCKET_CLOSE: new e(9, "SOCKET_CLOSE", "Socket connection closed"),
        SOCKET_ERROR: new e(1, "SOCKET_ERROR", "Socket error"),
        SOCKET_MESSAGE: new e(
          2,
          "SOCKET_MESSAGE",
          "Unable to parse invalid socket message",
        ),
      }),
      s = function (t, n) {
        ((this.mqttError = t), (this.connAck = n));
      },
      u = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            r === void 0 && (r = null),
            (o = e.call(this, n) || this),
            (o.isRecoverable = t),
            (o.originalError = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.MqttError = e),
      (i.MqttErrors = l),
      (i.ConnectFailure = s),
      (i.MqttChannelError = u));
  },
  66,
);
