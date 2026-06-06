__d(
  "DGWWebSocketTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["gateway.internalfb.com"]),
      l = new Set();
    function s(e) {
      try {
        return new URL(e).hostname;
      } catch (e) {
        return null;
      }
    }
    async function u(t) {
      var n = s(t);
      if (n == null || !e.has(n) || l.has(n)) return !1;
      l.add(n);
      var r = t.replace(/^wss:/i, "https:");
      return (
        await new Promise(function (e) {
          var t = new XMLHttpRequest();
          t.onloadend = function () {
            return e();
          };
          try {
            (t.open("GET", r), (t.withCredentials = !0), t.send());
          } catch (t) {
            e();
          }
        }),
        !0
      );
    }
    function c(e) {
      var t = new WebSocket(e);
      return (
        (t.binaryType = "arraybuffer"),
        (t.onopen = function () {}),
        (t.onclose = function () {}),
        (t.onerror = function () {}),
        t
      );
    }
    ((i.primeInternalCertOnce = u), (i.getWebSocketConnection = c));
  },
  66,
);
