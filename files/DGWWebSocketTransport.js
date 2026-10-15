__d(
  "DGWWebSocketTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new WebSocket(e);
      return (
        (t.binaryType = "arraybuffer"),
        (t.onopen = function () {}),
        (t.onclose = function () {}),
        (t.onerror = function () {}),
        t
      );
    }
    i.getWebSocketConnection = e;
  },
  66,
);
