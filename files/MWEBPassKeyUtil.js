__d(
  "MWEBPassKeyUtil",
  ["MWEBCryptoUtil", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = (n = o("MWEBCryptoUtil")).decodeBase64(t.root_scope),
            a = n.decodeBase64(t.root_rotatable_scope),
            i = n.decodeBase64(t.root_stored_scope),
            l = yield new n.DerivableSecret(e).hkdfDerive(r),
            s = yield l.hkdfDerive(a),
            u = yield s.hkdfDerive(i);
          return u.get();
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield new (o("MWEBCryptoUtil").DerivableSecret)(e).hkdfDerive(
              t,
            ),
            a = n != null ? yield r.hkdfDerive(n) : r;
          return a.toEncryptionKey();
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield u(
              e,
              o("MWEBCryptoUtil").decodeBase64(t.drvspec.use_case_scope),
              t.drvspec.salt != null
                ? o("MWEBCryptoUtil").decodeBase64Bytes(t.drvspec.salt)
                : null,
            ),
            r = o("MWEBCryptoUtil").decodeBase64Bytes(t.erc),
            a = yield n.decrypt(r);
          return new TextDecoder("utf-8").decode(a);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield e(t, n.drvspec);
          return d(r, n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var o = yield e(t, r);
          return h(o, n, r);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield u(
              e,
              o("MWEBCryptoUtil").decodeBase64(n.use_case_scope),
              n.salt != null
                ? o("MWEBCryptoUtil").decodeBase64Bytes(n.salt)
                : null,
            ),
            a = new TextEncoder().encode(t),
            i = yield r.encrypt(a.buffer);
          return o("MWEBCryptoUtil").toBase64String(
            btoa(
              String.fromCharCode.apply(String, Array.from(new Uint8Array(i))),
            ),
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.deriveAccountLevelEncryptionKey = e),
      (l.decryptRecoveryCode = d),
      (l.getRecoveryCode = p),
      (l.encryptRecoveryCode = f),
      (l.encryptRecoveryCodeWithKey = h));
  },
  98,
);
