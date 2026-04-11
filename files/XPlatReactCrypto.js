__d(
  "XPlatReactCrypto",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = self.crypto) == null ? void 0 : e.subtle;
    function u(e) {
      var t;
      if (
        typeof ((t = self.crypto) == null ? void 0 : t.getRandomValues) !=
        "function"
      )
        throw r("err")("crypto.getRandomValues: Not implemented");
      return (self.crypto.getRandomValues(e), e);
    }
    function c() {
      var e;
      if (
        typeof ((e = self.crypto) == null ? void 0 : e.randomUUID) != "function"
      )
        return null;
      var t = self.crypto.randomUUID();
      return typeof t == "string" ? t : null;
    }
    function d(e, t, n, o, a) {
      if (s == null) throw r("err")("crypto.subtle.importKey: Not implemented");
      return s.importKey(e, t, n, o, a);
    }
    function m(e, t) {
      if (s == null) throw r("err")("crypto.subtle.exportKey: Not implemented");
      return s.exportKey(e, t);
    }
    function p(e, t, n) {
      if (s == null)
        throw r("err")("crypto.subtle.generateKey: Not implemented");
      return s.generateKey(e, t, n);
    }
    function _(e, t, n) {
      if (s == null) throw r("err")("crypto.subtle.encrypt: Not implemented");
      return s.encrypt(e, t, n);
    }
    function f(e, t, n) {
      if (s == null) throw r("err")("crypto.subtle.decrypt: Not implemented");
      return s.decrypt(e, t, n);
    }
    function g(e, t, n) {
      if (s == null) throw r("err")("crypto.subtle.sign: Not implemented");
      return s.sign(e, t, n);
    }
    function h(e, t) {
      if (s == null) throw r("err")("crypto.subtle.digest: Not implemented");
      return s.digest(e, t);
    }
    function y(e, t, n) {
      if (s == null)
        throw r("err")("crypto.subtle.deriveBits: Not implemented");
      return s.deriveBits(e, t, n);
    }
    function C(e, t, n, o, a) {
      if (s == null) throw r("err")("crypto.subtle.deriveKey: Not implemented");
      return s.deriveKey(e, t, n, o, a);
    }
    ((l.getRandomValues = u),
      (l.randomUUID = c),
      (l.subtleImportKey = d),
      (l.subtleExportKey = m),
      (l.subtleGenerateKey = p),
      (l.subtleEncrypt = _),
      (l.subtleDecrypt = f),
      (l.subtleSign = g),
      (l.subtleDigest = h),
      (l.subtleDeriveBits = y),
      (l.subtleDeriveKey = C));
  },
  98,
);
