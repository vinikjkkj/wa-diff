__d(
  "WACryptoHmac",
  ["WACryptoDependencies", "WATypedArraysCast"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = new Uint8Array(e),
      u = { name: "HMAC", hash: "SHA-256" },
      c = { name: "HMAC", hash: "SHA-512" },
      d = { name: "HMAC", hash: "SHA-1" };
    function m(e, t) {
      var n = o("WATypedArraysCast").castTypedArrays(Uint8Array, t);
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.importKey("raw", n, e, !1, ["sign"])
        .then(function (t) {
          return { key: t, algo: e };
        });
    }
    function p(e) {
      return m(u, e);
    }
    function _(e, t, n) {
      var r = e.algo,
        a = e.key;
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.sign(r, a, t)
        .then(function (e) {
          return n != null && n !== 0 ? e.slice(0, n) : e;
        });
    }
    function f(e, t) {
      return m(u, e != null ? e : s).then(function (e) {
        return _(e, t);
      });
    }
    function g(e, t, n) {
      return m(u, e).then(function (e) {
        return _(e, t, n);
      });
    }
    function h(e, t, n) {
      return m(c, e).then(function (e) {
        return _(e, t, n);
      });
    }
    function y(e, t, n) {
      return m(d, e).then(function (e) {
        return _(e, t, n);
      });
    }
    ((l.SHA256_BYTE_LENGTH = e),
      (l.encodeKeySha256 = p),
      (l.sign = _),
      (l.extractSha256 = f),
      (l.hmacSha256 = g),
      (l.hmacSha512 = h),
      (l.hmacSha1 = y));
  },
  98,
);
