__d(
  "MqttWebSocketUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return (
        "WebSocket" in t &&
        t.WebSocket != null &&
        "CLOSING" in t.WebSocket.prototype
      );
    }
    i.hasWSSupport = e;
  },
  66,
);
