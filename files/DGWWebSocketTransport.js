__d(
  "DGWWebSocketTransport",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = new Set(["gateway.internalfb.com"]),
      s = new Set();
    function u(e) {
      try {
        return new URL(e).hostname;
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = u(t);
          if (r == null || !l.has(r) || s.has(r)) return !1;
          s.add(r);
          var o = t.replace(/^wss:/i, "https:");
          return (
            yield new (e || (e = n("Promise")))(function (e) {
              var t = new XMLHttpRequest();
              t.onloadend = function () {
                return e();
              };
              try {
                (t.open("GET", o), (t.withCredentials = !0), t.send());
              } catch (t) {
                e();
              }
            }),
            !0
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = new WebSocket(e);
      return (
        (t.binaryType = "arraybuffer"),
        (t.onopen = function () {}),
        (t.onclose = function () {}),
        (t.onerror = function () {}),
        t
      );
    }
    ((i.primeInternalCertOnce = c), (i.getWebSocketConnection = m));
  },
  66,
);
