__d(
  "WAWebUserThreadIdHmac",
  ["WABase64", "WACryptoHmac", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = new TextEncoder();
    function s(t) {
      return e.encode(t).buffer;
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(e),
            r = s(t),
            a = yield o("WACryptoHmac").hmacSha256(n, r);
          return o("WABase64").encodeB64(a);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = s(e);
          return self.crypto.subtle.digest("SHA-256", t);
        })),
        m.apply(this, arguments)
      );
    }
    l.generateUserThreadIDHMAC = u;
  },
  98,
);
