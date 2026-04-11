__d(
  "ACSTokenHmacUtil",
  ["XPlatReactCrypto"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s(e, t).then(function (e) {
        return c(e, n);
      });
    }
    function s(e, t) {
      return o("XPlatReactCrypto")
        .subtleImportKey("raw", t, e, !1, ["sign"])
        .then(function (t) {
          return { algo: e, key: t };
        });
    }
    function u(e) {
      return typeof e.hash == "string" ? e.hash : e.hash.name;
    }
    function c(e, t) {
      var n = e.algo,
        r = e.key,
        a = { hash: u(n), name: "HMAC" };
      return o("XPlatReactCrypto")
        .subtleSign(a, r, t)
        .then(function (e) {
          return new Uint8Array(e);
        });
    }
    l.hmac = e;
  },
  98,
);
